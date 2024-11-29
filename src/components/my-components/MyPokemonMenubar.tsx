'use client';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger
} from '@/components/ui/menubar';

import { PokemonDataArray } from '@/data';

export const MyPokemonMenubar = () => {
  const onSeletedOption = (url: string): void => {
    window.open(url, '_blank');
  };
  return (
    <Menubar>
      {PokemonDataArray.map((pokemon) => (
        <MenubarMenu key={pokemon.id}>
          <MenubarTrigger>
            {pokemon.name}
            <MenubarContent>
              <MenubarItem
                onClick={() =>
                  onSeletedOption(pokemon.images.imageDefaultFront)
                }
              >
                Pokemon ID: {pokemon.id}
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Imagen 1: Default Art</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Imagen 2: Shinny Art</MenubarItem>
              <MenubarSeparator />
            </MenubarContent>
          </MenubarTrigger>
        </MenubarMenu>
      ))}
    </Menubar>
  );
};
