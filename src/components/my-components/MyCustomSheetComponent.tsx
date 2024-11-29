'use client';
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

export function MySheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>Configuraciones de Perfil</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Editar Perfil</SheetTitle>
          <SheetDescription>
            Aquí puedes ver la información de tu cuenta y modificarla. Dale
            Click cuando hayas acabado.
          </SheetDescription>
        </SheetHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label
              htmlFor='name'
              className='text-right'
            >
              Nombre
            </Label>
            <Input
              id='name'
              value='Pedro Duarte'
              className='col-span-3'
              onChange={() => {}}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label
              htmlFor='username'
              className='text-right'
            >
              Usuario
            </Label>
            <Input
              id='username'
              className='col-span-3'
              value={'@PedroDuarte'}
              onChange={() => {}}
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type='submit'>Guardar Cambios</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
