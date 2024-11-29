import { AccordionItems as DataInterface } from '../interfaces';

export const AlertData: DataInterface[] = [
  {
    id: crypto.randomUUID(),
    title: 'Default Alert',
    description: 'Run to the hills.',
    variantStyle: 'default'
  },
  {
    id: crypto.randomUUID(),
    title: 'Destructive Alert',
    description: 'Don´t Buy Chinesse Rice.',
    variantStyle: 'destructive'
  },
  {
    id: crypto.randomUUID(),
    title: 'Success Alert',
    description: 'Welcome to Hardvard.',
    variantStyle: 'success'
  }
];
