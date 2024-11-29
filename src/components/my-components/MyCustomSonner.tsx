import { toast as Sonner } from 'sonner';

import { CustomSonnerProps } from '@/interfaces';

export function MyCustomSonner({
  title,
  description
}: CustomSonnerProps): void {
  Sonner(title, {
    description
  });
}
