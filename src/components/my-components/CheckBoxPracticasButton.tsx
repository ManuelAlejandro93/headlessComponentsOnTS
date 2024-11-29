import { Button } from '@/components/ui/button';

interface Props {
  tittle: string;
}

export const CheckBoxPracticasButton = ({ tittle }: Props) => {
  return <Button>{tittle}</Button>;
};
