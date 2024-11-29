import { AccordionItems as DataInterface } from '@/interfaces';

export const AccordionItems: DataInterface[] = [
  {
    id: crypto.randomUUID(),
    title: '¿Quién hizo esto?',
    description: 'Lo hice yo: Manuel Alejandro.'
  },
  {
    id: crypto.randomUUID(),
    title: '¿En serio?',
    description: 'Sí, lo hice yo: Manuel Alejandro.'
  }
];
