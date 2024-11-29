import { MyCalendar } from '@/components';

export default function CalendarPage() {
  return (
    <>
      <h1 className='text-center'>Calendar Page</h1>
      <div className='grid grid-cols-3 gap-4'>
        <MyCalendar></MyCalendar>
        <MyCalendar></MyCalendar>
        <MyCalendar></MyCalendar>
      </div>
    </>
  );
}
