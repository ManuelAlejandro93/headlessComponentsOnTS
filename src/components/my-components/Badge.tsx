import { Badge } from '@/components/ui/badge';

interface BadgeProps {
  variant:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'success'
    | 'info';
}

export const MyBadge = ({ variant }: BadgeProps) => {
  return (
    <Badge
      variant={variant}
      className='flex justify-center'
    >
      Custom Badge
    </Badge>
  );
};
