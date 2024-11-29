import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

import { AccordionItems } from '@/data';

export function TestAccordion() {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full'
    >
      {AccordionItems.map((item) => (
        <AccordionItem
          value={item.id}
          key={item.id}
        >
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
