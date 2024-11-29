interface ButtonData {
  id: string;
  title: string;
  variantStyle: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';
}

export const ButtonData: ButtonData[] = [
  {
    id: crypto.randomUUID(),
    title: 'Botón por defecto',
    variantStyle: 'default'
  },
  {
    id: crypto.randomUUID(),
    title: 'Botón destructivo',
    variantStyle: 'destructive'
  },
  {
    id: crypto.randomUUID(),
    title: 'Botón outline',
    variantStyle: 'outline'
  },
  {
    id: crypto.randomUUID(),
    title: 'Botón secondary',
    variantStyle: 'secondary'
  },
  {
    id: crypto.randomUUID(),
    title: 'Botón ghost',
    variantStyle: 'ghost'
  }
];
