import { useMemo } from 'react';
import { holidays } from '@/data';

export default function SchoolCalendar({
  month = null,
  year = null,
  events = [],
}) {
  const today = new Date();

  const targetYear = year || today.getFullYear();
  const targetMonth = month ?? today.getMonth(); // 0 = Jan

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const firstDay = useMemo(() => {
    const first = new Date(targetYear, targetMonth, 1);
    return first.getDay(); // Will return an index for the day
  }, [targetMonth, targetYear]);

  const totalDays = useMemo(() => {
    return new Date(targetYear, targetMonth + 1, 0).getDate();
  }, [targetMonth, targetYear]); // Returns the number of days in the month

  const monthName = useMemo(() => {
    return new Date(targetYear, targetMonth).toLocaleString('default', {
      month: 'long', // Will return the month
    });
  }, [targetMonth, targetYear]);

  // Returns an array that is padded with null values and joined with the total number of days to fill the calendar grid.
  const calendarCells = useMemo(() => {
    return [
      ...Array.from({ length: firstDay }, () => null), // Returns null values as placeholders for the index, value is determined from firstDay
      ...Array.from({ length: totalDays }, (_, i) => i + 1), // Is added to the padded null array to create the entire array to be mapped.
    ];
  }, [firstDay, totalDays]);

  const eventsByDate = useMemo(() => {
    const lookup = {};

    for (const event of events) {
      if (event.date) {
        lookup[event.date] ??= [];
        lookup[event.date].push(event);
        continue;
      }

      if (event.startDate && event.endDate) {
        const current = new Date(`${event.startDate}T00:00:00`);
        const end = new Date(`${event.endDate}T00:00:00`);

        while (current <= end) {
          const year = current.getFullYear();
          const month = String(current.getMonth() + 1).padStart(2, '0');
          const day = String(current.getDate()).padStart(2, '0');
          const key = `${year}-${month}-${day}`;

          lookup[key] ??= [];
          lookup[key].push(event);

          current.setDate(current.getDate() + 1);
        }
      }
    }

    return lookup;
  }, [events]);

  const visibleEvents = useMemo(() => {
    const monthStart = new Date(targetYear, targetMonth, 1);
    const monthEnd = new Date(targetYear, targetMonth + 1, 0);

    return events
      .filter((event) => {
        if (event.date) {
          const eventDate = new Date(`${event.date}T00:00:00`);
          return eventDate >= monthStart && eventDate <= monthEnd;
        }

        if (event.startDate && event.endDate) {
          const start = new Date(`${event.startDate}T00:00:00`);
          const end = new Date(`${event.endDate}T00:00:00`);

          return start <= monthEnd && end >= monthStart;
        }

        return false;
      })
      .sort((a, b) => {
        const aDate = new Date(`${a.date || a.startDate}T00:00:00`);
        const bDate = new Date(`${b.date || b.startDate}T00:00:00`);
        return aDate - bDate;
      });
  }, [events, targetYear, targetMonth]);

  const getEventsForDay = (day) => {
    if (!day) return [];
    const formattedDate = `${targetYear}-${String(targetMonth + 1).padStart(
      2,
      '0',
    )}-${String(day).padStart(2, '0')}`;

    console.log('CELL DATE', formattedDate);

    return eventsByDate[formattedDate] || [];
  };

  const typeColors = {
    holiday: 'indigo',
    school: 'rose',
    meeting: 'yellow',
  };

  return (
    <div className="max-w-4xl mx-auto p-2">
      <div className="md:w-1/2 grid grid-cols-7 text-center font-medium mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-2 text-gray-700">
            {day}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 grid grid-cols-7 border border-gray-300 rounded overflow-hidden text-center">
          {calendarCells.map((day, i) => {
            const dayEvents = getEventsForDay(day);
            const hasEvents = dayEvents.length > 0;
            const primaryEvent = dayEvents[0];
            const bgClass =
              primaryEvent?.type === 'holiday'
                ? 'bg-indigo-100'
                : primaryEvent?.type === 'school'
                  ? 'bg-rose-100'
                  : primaryEvent?.type === 'meeting'
                    ? 'bg-yellow-100'
                    : 'bg-white';

            const dotClass =
              primaryEvent?.type === 'holiday'
                ? 'bg-indigo-500'
                : primaryEvent?.type === 'school'
                  ? 'bg-rose-500'
                  : primaryEvent?.type === 'meeting'
                    ? 'bg-yellow-500'
                    : 'bg-transparent';

            return (
              <div
                key={i}
                className={`relative aspect-square border border-gray-200 flex items-start justify-start p-1 text-xs sm:text-sm ${bgClass}`}
              >
                {/* {hasEvents && (
                  <span className="absolute bottom-1 right-1 text-[10px] px-1 rounded bg-black text-white">
                    {dayEvents.length}
                  </span>
                )} */}
                {day && (
                  <>
                    <span>{day}</span>
                    {hasEvents && (
                      <span
                        className={`absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full ${dotClass}`}
                      />
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Event List */}
        <div className="relative md:translate-x-50 mt-6 md:w-1/2">
          <h3 className="text-lg text-center md:text-left font-semibold mb-2">
            Events in {monthName}
          </h3>
          <ul className="space-y-2">
            {visibleEvents.map((event, i) => {
              const borderColor =
                event.type === 'holiday'
                  ? 'border-indigo-500'
                  : event.type === 'school'
                    ? 'border-rose-500'
                    : event.type === 'meeting'
                      ? 'border-yellow-500'
                      : 'border-gray-300';

              const bgColor =
                event.type === 'holiday'
                  ? 'bg-indigo-50'
                  : event.type === 'school'
                    ? 'bg-rose-50'
                    : event.type === 'meeting'
                      ? 'bg-yellow-50'
                      : 'bg-white';

              const textColor =
                event.type === 'holiday'
                  ? 'text-indigo-900'
                  : event.type === 'school'
                    ? 'text-rose-900'
                    : event.type === 'meeting'
                      ? 'text-yellow-900'
                      : 'text-gray-900';

              const subTextColor =
                event.type === 'holiday'
                  ? 'text-indigo-700'
                  : event.type === 'school'
                    ? 'text-rose-700'
                    : event.type === 'meeting'
                      ? 'text-yellow-700'
                      : 'text-gray-700';

              return (
                <li
                  key={i}
                  className={`border-l-4 pl-3 rounded py-2 ${borderColor} ${bgColor} ${textColor}`}
                >
                  <div className="text-sm font-medium">{event.title}</div>
                  <div className={`text-xs ${subTextColor}`}>
                    {event.date
                      ? event.date
                      : `${event.startDate} - ${event.endDate}`}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
