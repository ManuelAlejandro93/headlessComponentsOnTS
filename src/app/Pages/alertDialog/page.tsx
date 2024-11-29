import { MyAlertDialog } from '@/components';
import { myAlertDialogPropertyData } from '@/data';

export default function AlertDialogPage() {
  return (
    <div className='text-center'>
      <h1>You are on AlertDialog Page</h1>
      <MyAlertDialog {...myAlertDialogPropertyData}></MyAlertDialog>
    </div>
  );
}
