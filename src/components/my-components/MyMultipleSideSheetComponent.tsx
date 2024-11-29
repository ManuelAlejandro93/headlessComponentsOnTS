import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

const sheetSides = ['top', 'right', 'bottom', 'left'] as const;

const sheetFullInfo = [
  { id: crypto.randomUUID(), name: 'top', spanishName: 'Arriba' },
  { id: crypto.randomUUID(), name: 'right', spanishName: 'Derecha' },
  { id: crypto.randomUUID(), name: 'bottom', spanishName: 'Abajo' },
  { id: crypto.randomUUID(), name: 'left', spanishName: 'Izquierda' }
] as const;

export function MyMultipleSideSheetSide() {
  return (
    <div className='grid grid-cols-4 col-span-full gap-6 row-span-3'>
      {sheetFullInfo.map((side) => (
        <Sheet key={side.id}>
          <SheetTrigger asChild>
            <Button variant='secondary'>{side.spanishName}</Button>
          </SheetTrigger>
          <SheetContent side={side.name}>
            <SheetHeader>
              <SheetTitle>Editar Perfil</SheetTitle>
              <SheetDescription>
                Aquí puedes modificar tu perfil. Bienvenido.
              </SheetDescription>
            </SheetHeader>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label
                  htmlFor='name'
                  className='text-right'
                >
                  Name
                </Label>
                <Input
                  id='name'
                  placeholder='Pedro Duarte'
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label
                  htmlFor='username'
                  className='text-right'
                >
                  Username
                </Label>
                <Input
                  id='username'
                  placeholder='@peduarte'
                  className='col-span-3'
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type='submit'>Guardar y Salir</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
