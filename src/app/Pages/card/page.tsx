import { MyCard } from '@/components';

export default function CardPage() {
  return (
    <>
      <h1 className='text-center'>You are on Card page</h1>
      <div className='grid grid-cols-4 gap-2'>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
      </div>
    </>
  );
}
