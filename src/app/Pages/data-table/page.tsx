import { MyAlertDialog } from '@/components';
import {
  payments,
  myAlertDialogInDataPagePropertiesData as props
} from '@/data';

export default function DataTablePage() {
  return (
    <div className='grid grid-cols-1'>
      <h1 className='text-4xl text-center'>Page on development Process.</h1>
      <h1 className='text-center'>You are on the Data Table Page</h1>
      <pre>{JSON.stringify(payments(1), null, 2)}</pre>
      {
        //! Dialog Temporal
        <MyAlertDialog {...props}></MyAlertDialog>
        //! Fin del Dialog Temporal
      }
    </div>
  );
}
