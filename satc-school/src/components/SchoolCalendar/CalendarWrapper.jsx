'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SchoolCalendar from './SchoolCalendar';
import { holidays } from '@/data/calendar/holidays';

export default function CalendarWrapper() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth()); // 0 = Jan
  const [year, setYear] = useState(today.getFullYear());
  const [direction, setDirection] = useState(0);

  const incrementMonth = () => {
    setDirection(1);
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  const decrementMonth = () => {
    setDirection(-1);
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:mt-10">
      {/* Navigation & Title */}
      <div className="flex justify-around items-center gap-2 sm:flex-row sm:justify-between mb-6">
        <button
          onClick={decrementMonth}
          className="px-4 py-2 border rounded hover:bg-gray-100 transition"
        >
          ← Prev
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-center">
          {new Date(year, month).toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </h2>

        <button
          onClick={incrementMonth}
          className="px-4 py-2 border rounded hover:bg-gray-100 transition"
        >
          Next →
        </button>
      </div>

      {/* Calendar */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${month}-${year}`}
          initial={{ x: direction * 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction * -1000, opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <SchoolCalendar month={month} year={year} events={holidays} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
