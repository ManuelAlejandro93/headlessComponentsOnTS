import { MyCustomCheckbox } from '@/components';

export default function CheckboxPage() {
  return (
    <div className='flex justify-center'>
      <MyCustomCheckbox
        title='Aceptar terminos y condiciones.'
        subTitle='Acepta pagar el 5% de interés anual.'
      ></MyCustomCheckbox>
    </div>
  );
}
