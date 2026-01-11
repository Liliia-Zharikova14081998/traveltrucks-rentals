'use client';

import { useState } from 'react';
import css from './Calendar.module.css';

const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

type Props = {
  onSelect: (date: Date) => void;
  selectedDate?: Date | null;
};

export default function Calendar({ onSelect, selectedDate }: Props) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = (firstDayOfMonth.getDay() + 6) % 7; 
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthLastDay = new Date(year, month, 0).getDate();

  const cells: { day: number; isCurrent: boolean; monthOffset: number }[] = [];

  for (let i = startDay - 1; i >= 0; i--) {
    cells.push({ day: prevMonthLastDay - i, isCurrent: false, monthOffset: -1 });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, isCurrent: true, monthOffset: 0 });
  }

  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, isCurrent: false, monthOffset: 1 });
  }

  const handleDateClick = (day: number, monthOffset: number) => {
    const clickedDate = new Date(year, month + monthOffset, day);
    onSelect(clickedDate);
    
    if (monthOffset !== 0) {
      if (month + monthOffset > 11) {
        setMonth(0);
        setYear(y => y + 1);
      } else if (month + monthOffset < 0) {
        setMonth(11);
        setYear(y => y - 1);
      } else {
        setMonth(m => m + monthOffset);
      }
    }
  };

  const isSelected = (day: number, monthOffset: number) => {
    if (!selectedDate) return false;
    const dateToCompare = new Date(year, month + monthOffset, day);
    return (
      dateToCompare.getDate() === selectedDate.getDate() &&
      dateToCompare.getMonth() === selectedDate.getMonth() &&
      dateToCompare.getFullYear() === selectedDate.getFullYear()
    );
  };

  const changeMonth = (offset: number) => {
    const newDate = new Date(year, month + offset, 1);
    setMonth(newDate.getMonth());
    setYear(newDate.getFullYear());
  };

  return (
  <div className={css.calendarCard}>
  
    <div className={css.header}>
      <button type="button" onClick={() => changeMonth(-1)} className={css.navBtn}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <span className={css.currentDate}>{months[month]} {year}</span>
      <button type="button" onClick={() => changeMonth(1)} className={css.navBtn}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>

    <div className={css.daysHeaderRow}>
      {daysOfWeek.map(d => (
        <div key={d} className={css.dayName}>{d}</div>
      ))}
    </div>

    <div className={css.grid}>
      {cells.map((cell, i) => (
        <div
          key={i}
          className={`${css.dayCell} ${!cell.isCurrent ? css.notCurrent : ''} ${isSelected(cell.day, cell.monthOffset) ? css.selected : ''}`}
          onClick={() => handleDateClick(cell.day, cell.monthOffset)}
        >
          {cell.day}
        </div>
      ))}
    </div>
  </div>
    );
}