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

import { commandItemGroups, CommandPalleteItemsData as data } from '@/data';

export function CustomCommandPalleteComponent1() {
  return (
    <Command className='rounded-lg border shadow-md md:min-w-[450px]'>
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
              (item) => item.group === commandItemGroups.configuradoresDeCuenta
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
    </Command>
  );
}
