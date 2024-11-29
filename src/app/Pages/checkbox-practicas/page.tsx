'use client';
import { MyCustomCheckbox } from '@/components';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function CheckboxPracticasPage() {
  const [terms, setTerms] = useState(false);
  const onChangeTerms = () => {
    setTerms((terms) => !terms);
  };
  return (
    <div className='grid grid-cols-2 gap-10'>
      <MyCustomCheckbox
        title='Aceptar terminos y condiciones.'
        subTitle='Acepta pagar 5% de interés anual.'
        checked={terms}
        onChangeChecked={onChangeTerms}
      />

      <Button onClick={() => onChangeTerms()}>
        Le leído los terminos y condiciones.
      </Button>

      {terms && (
        <div className='col-span-2'>
          <Badge
            variant={'destructive'}
            className='flex justify-center'
          >
            Has aceptado los términos.
          </Badge>
        </div>
      )}
    </div>
  );
}
