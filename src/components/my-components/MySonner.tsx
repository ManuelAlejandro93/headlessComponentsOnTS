'use client';

import { toast as Sonner } from 'sonner';

import { Button } from '@/components/ui/button';

export function MySonner() {
  return (
    <Button
      variant='outline'
      onClick={() =>
        Sonner.info('Acción Exitosa.', {
          richColors: true,
          position: 'bottom-center',
          description: 'Cita para el: Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'cancel',
            onClick: () => console.log('Undo')
          }
        })
      }
    >
      Click on me mutiple times.
    </Button>
  );
}
