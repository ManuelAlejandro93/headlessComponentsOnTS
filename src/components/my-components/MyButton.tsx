import { Button } from '@/components/ui/button';
interface Props {
  tittle: string;
  variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';
}

export function MyButtonButton({ tittle, variant }: Props) {
  return <Button variant={variant}>{tittle}</Button>;
}
