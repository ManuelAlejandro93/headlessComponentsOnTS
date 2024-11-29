'use client';
import { useState } from 'react';
import { MyCustomCheckbox } from '@/components';

export default function CheckboxPage() {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className='flex justify-center'>
      <MyCustomCheckbox
        title='Aceptar terminos y condiciones.'
        subTitle='Acepta pagar el 5% de interés anual.'
        checked={checked}
        onChangeChecked={setChecked as () => void}
      ></MyCustomCheckbox>
    </div>
  );
}
