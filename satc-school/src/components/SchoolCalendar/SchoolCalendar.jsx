import { useMemo } from 'react';

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
    return first.getDay(); // 0 = Sunday
  }, [targetMonth, targetYear]);

  const totalDays = useMemo(() => {
    return new Date(targetYear, targetMonth + 1, 0).getDate();
  }, [targetMonth, targetYear]);

  const monthName = useMemo(() => {
    return new Date(targetYear, targetMonth).toLocaleString('default', {
      month: 'long',
    });
  }, [targetMonth, targetYear]);

  const calendarCells = useMemo(() => {
    return [
      ...Array.from({ length: firstDay }, () => null),
      ...Array.from({ length: totalDays }, (_, i) => i + 1),
    ];
  }, [firstDay, totalDays]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {monthName} {targetYear}
      </h2>

      <div className="grid grid-cols-7 text-center font-medium mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-2 text-gray-700">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 border border-gray-300 rounded overflow-hidden">
        {calendarCells.map((day, i) => (
          <div
            key={i}
            className={`p-4 text-sm border border-gray-300 h-20 flex items-start justify-start ${
              i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            {day && <span>{day}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
