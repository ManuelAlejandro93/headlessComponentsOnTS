'use client';
import { MyToast } from '@/components';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const toastItems = [
  { id: 1, variant: 'default' },
  { id: 2, variant: 'destructive' },
  { id: 3, variant: 'success' },
  { id: 4, variant: 'default' },
  { id: 5, variant: 'destructive' },
  { id: 6, variant: 'success' },
  { id: 7, variant: 'default' },
  { id: 8, variant: 'destructive' },
  { id: 9, variant: 'success' },
  { id: 10, variant: 'info' },
  { id: 11, variant: 'info' },
  { id: 12, variant: 'info' }
] as const;

export default function ToastPage() {
  const { toast } = useToast();
  return (
    <div className='text-center'>
      <h1>Algunos toast tienen colores diferentes, ¡Descúbrelo!</h1>
      <div className='grid grid-cols-3 gap-4'>
        {toastItems.map((button) => (
          <Button
            key={button.id}
            variant={'outline'}
            onClick={() =>
              toast({
                variant: button.variant,
                title: `Botón ${button.id}.`,
                description: `Has hecho click en botón ${button.id}.`
              })
            }
          >
            {' '}
            {`Soy el Botón ${button.id}`}
          </Button>
        ))}
      </div>
    </div>
  );
}
