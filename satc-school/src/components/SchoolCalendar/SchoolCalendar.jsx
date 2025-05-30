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

  const getEventForDay = (day) => {
    if (!day) return null;
    const formattedDate = `${targetYear}-${String(targetMonth + 1).padStart(
      2,
      '0'
    )}-${String(day).padStart(2, '0')}`;
    return events.find((event) => event.date === formattedDate) || null;
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
            const event = getEventForDay(day);
            const bgClass =
              event?.type === 'holiday'
                ? 'bg-indigo-100'
                : event?.type === 'school'
                ? 'bg-rose-100'
                : event?.type === 'meeting'
                ? 'bg-yellow-100'
                : 'bg-white';

            const dotClass =
              event?.type === 'holiday'
                ? 'bg-indigo-500'
                : event?.type === 'school'
                ? 'bg-rose-500'
                : event?.type === 'meeting'
                ? 'bg-yellow-500'
                : 'bg-transparent';

            return (
              <div
                key={i}
                className={`relative aspect-square border border-gray-200 flex items-start justify-start p-1 text-xs sm:text-sm ${bgClass}`}
              >
                {day && (
                  <>
                    <span>{day}</span>
                    {event && (
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
            {events
              .filter((event) => {
                const date = new Date(event.date);
                return (
                  date.getFullYear() === targetYear &&
                  date.getMonth() === targetMonth
                );
              })
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((event, i) => {
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
                      {event.date}
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
