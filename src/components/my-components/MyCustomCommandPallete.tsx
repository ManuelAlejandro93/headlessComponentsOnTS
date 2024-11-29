import { Calendar, User } from 'lucide-react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command';

export function MyCustomCommandPallete() {
  return (
    <Command className='rounded-lg border shadow-md md:min-w-[450px]'>
      <CommandInput placeholder='Intenta encontrar algo...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Manejadores de Tiempo'>
          <CommandItem>
            <Calendar />
            <span>Calendar</span>
            <CommandShortcut>Crtl + Cal</CommandShortcut>
          </CommandItem>
          <CommandSeparator />
        </CommandGroup>
        <CommandGroup heading='Configuradores de cuenta'>
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>Crtl + Pro</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
