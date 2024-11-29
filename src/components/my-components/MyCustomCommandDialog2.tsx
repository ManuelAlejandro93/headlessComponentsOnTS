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

import { commandItemGroups, CommandPalleteItemsData as data } from '@/data';
import { useEffect, useState } from 'react';

export function CustomCommandDialog2() {
  const [openDialog, setOpenDialog] = useState(true);

  useEffect(() => {
    const onClickControlU = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'u' || e.key == 'U')) {
        e.preventDefault();
        setOpenDialog((open) => !open);
      }
    };

    document.addEventListener('keydown', onClickControlU);
    return () => document.removeEventListener('keydown', onClickControlU);
  }, []);

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
                <CommandItem
                  key={item.id}
                  onSelect={() => console.log(`Se selecionó ${item.title}`)}
                >
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
                <CommandItem
                  key={item.id}
                  onSelect={() => console.log(`Se selecionó ${item.title}`)}
                >
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
        <p className='text-sm text-muted-foreground'>
          Presiona{' '}
          <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
            <span className='text-xs'>Ctrl + U</span>
          </kbd>
        </p>
      </div>
    </div>
  );
}
