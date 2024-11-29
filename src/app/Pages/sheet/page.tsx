'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
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
import { MyMultipleSideSheetSide, MySheet } from '@/components';
import { Input } from '@/components/ui/input';

export default function ContextMenuPage() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className='text-center'>
      <h1>You are on the Sheet Page</h1>
      <div className='grid grid-cols-4 gap-1 text-center'>
        <div className='col-span-full'>
          <MySheet></MySheet>
        </div>
        <Sheet
          open={open}
          onOpenChange={setOpen}
        >
          <SheetTrigger asChild>
            <Button
              className='col-span-2'
              variant='outline'
            >
              Configuraciones de Perfil
            </Button>
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
        <Button
          variant={'ghost'}
          className='col-span-2'
          onClick={() => setOpen((lastOpenState) => !lastOpenState)}
        >
          Manual Toggle
        </Button>
        <div className='col-span-full'>
          <MyMultipleSideSheetSide></MyMultipleSideSheetSide>
        </div>
      </div>
    </div>
  );
}
