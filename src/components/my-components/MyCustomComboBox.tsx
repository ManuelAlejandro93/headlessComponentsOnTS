'use client';

import { useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';

import { MyCustomComboBoxProps } from '@/interfaces';

export function MyCustomComboBox({ students }: MyCustomComboBoxProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  return (
    <Popover
      open={open}
      onOpenChange={(openStateBoolean) => {
        setOpen(openStateBoolean);
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-1/3 justify-between'
        >
          {name
            ? students.find((student) => student.name === name)?.name
            : 'Selecciona tu estudiante...'}
          <ChevronsUpDown className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Buscar Estudiante...' />
          <CommandList>
            <CommandEmpty>No se encontró al estudiante.</CommandEmpty>
            <CommandGroup>
              {students.map((student) => (
                <CommandItem
                  key={student.id}
                  value={student.name}
                  onSelect={(currentName) => {
                    setName(currentName === name ? '' : currentName);
                    setOpen(false);
                  }}
                >
                  {student.name}
                  <Check
                    className={cn(
                      'ml-auto',
                      name === student.name ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
