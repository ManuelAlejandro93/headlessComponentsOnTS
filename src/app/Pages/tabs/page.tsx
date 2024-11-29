import { MyTabs } from '@/components';

export default function TabsPage() {
  return (
    <>
      <h1 className='text-center pb-8'>You are on the tabs Page</h1>
      <div className='grid grid-cols-2 place-items-center'>
        <h2>Configuraciones de Cuenta.</h2>
        <MyTabs />
      </div>
    </>
  );
}
