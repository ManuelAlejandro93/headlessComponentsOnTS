import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { AlertData } from '@/data';

export function MyAlert() {
  return (
    <>
      {AlertData.map((item) => (
        <Alert
          key={item.id}
          variant={item.variantStyle}
        >
          <Terminal className='h-4 w-4' />
          <AlertTitle>{item.title}</AlertTitle>
          <AlertDescription>{item.description}</AlertDescription>
        </Alert>
      ))}
    </>
  );
}
