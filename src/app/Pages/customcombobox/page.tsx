import { MyCustomComboBox } from '@/components';

import { students } from '@/data';

export default function CustomComboBoxPage() {
  return (
    <div className='flex flex-col justify-between items-center'>
      <h1>You are on the custom combobox page</h1>
      <MyCustomComboBox students={students}></MyCustomComboBox>
    </div>
  );
}
