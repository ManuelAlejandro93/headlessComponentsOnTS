import { MyDialog, MyDialogB } from '@/components';

export default function DialogPage() {
  return (
    <div className='grid grid-cols-2 gap-5'>
      <h1 className='text-center col-span-full'>
        You are on Dialog (Only) Page
      </h1>
      <MyDialog></MyDialog>
      <MyDialogB></MyDialogB>
    </div>
  );
}
