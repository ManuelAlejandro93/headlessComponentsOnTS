'use client';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command';

import { DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import { commandItemGroups, CommandPalleteItemsData as data } from '@/data';
import { useState } from 'react';

export function CustomCommandDialog() {
  const [openDialog, setOpenDialog] = useState(true);

  return (
    <div className='flex justify-center'>
      <CommandDialog
        open={openDialog}
        onOpenChange={() => setOpenDialog((state) => !state)}
      >
        <DialogTitle className='hidden'>
          Opciones de configuraciones.
        </DialogTitle>
        <CommandInput placeholder='Intenta encontrar algo...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading={commandItemGroups.manejadoresDeTiempo}>
            {data
              .filter(
                (item) => item.group === commandItemGroups.manejadoresDeTiempo
              )
              .map((item) => (
                <CommandItem key={item.id}>
                  {item.icon}
                  <span>{item.title}</span>
                  <CommandShortcut>{item.shortcut}</CommandShortcut>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={commandItemGroups.configuradoresDeCuenta}>
            {data
              .filter(
                (item) =>
                  item.group === commandItemGroups.configuradoresDeCuenta
              )
              .map((item) => (
                <CommandItem key={item.id}>
                  {item.icon}
                  <span>{item.title}</span>
                  <CommandShortcut>{item.shortcut}</CommandShortcut>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
      <div className='flex flex-col justify-center'>
        <Button
          variant='outline'
          onClick={() => setOpenDialog((state) => !state)}
        >
          Activar Dialog
        </Button>
      </div>
    </div>
  );
}
