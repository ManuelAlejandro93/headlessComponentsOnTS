import { MyPokemonMenubar } from '@/components';
export default async function PokemonCustomMenuBarPage() {
  return (
    <div className='flex flex-col items-center'>
      <h2>Choose one Pokemon, then choose its id.</h2>
      <MyPokemonMenubar></MyPokemonMenubar>
    </div>
  );
}
