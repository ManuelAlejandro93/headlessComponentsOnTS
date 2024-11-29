'use client';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function MultipleDateCalendarPage() {
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([
    new Date()
  ]);

  const shownMultipleDate = multipleDate
    ?.map((date) =>
      date.toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      })
    )
    .join('. ');

  return (
    <div className='flex-col sm:flex sm:flex-row gap-4'>
      <Calendar
        mode='multiple'
        selected={multipleDate}
        onSelect={setMultipleDate}
        className='rounded-md border'
        disabled={(date) => date.getDay() === 1}
      />

      <div className=''>
        <h1 className='text-3xl'>Choose multiple date on the calendar.</h1>
        <div className='border-b'></div>
        <b>Las fechas Seleccionadas fueron:</b>
        <h2>{shownMultipleDate}</h2>
      </div>
    </div>
  );
}
