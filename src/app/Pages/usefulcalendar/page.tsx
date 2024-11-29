'use client';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function UsefulCalendarPage() {
  const [dateCal1, setDateCal1] = useState<Date | undefined>(new Date());
  const [dateCal2, setDateCal2] = useState<Date | undefined>(new Date());
  const [dateCal3, setDateCal3] = useState<Date | undefined>(new Date());

  const shownDate1 = dateCal1?.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
  const shownDate2 = dateCal2?.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
  const shownDate3 = dateCal3?.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
  return (
    <div className='grid grid-cols-3 space-x-3'>
      <Calendar
        mode='single'
        selected={dateCal1}
        onSelect={setDateCal1}
        className='rounded-md border'
        disabled={(date) =>
          date.getDay() === 1
        } /* Deshabilitar este calendario los lunes */
      />
      <Calendar
        mode='single'
        selected={dateCal2}
        onSelect={setDateCal2}
        className='rounded-md border'
        disabled={(date) =>
          date < new Date()
        } /* Deshabilitar este calendario en el pasado */
      />
      <Calendar
        mode='single'
        selected={dateCal3}
        onSelect={setDateCal3}
        className='rounded-md border'
        disabled={(date) =>
          date > new Date()
        } /* Deshabilitar este calendario en el futuro */
      />
      <div className='col-span-full text-center'>
        <h1 className='text-3xl'>Fechas importantes </h1>
        <div className='border-b'></div>
        <b>Primera Fecha:</b>
        <h2>{shownDate1}</h2>
        <div className='border-b'></div>
        <b>Segunda Fecha:</b>
        <h2>{shownDate2}</h2>
        <div className='border-b'></div>
        <b>Tercera Fecha:</b>
        <h2>{shownDate3}</h2>
      </div>
    </div>
  );
}
