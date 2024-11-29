import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function MyUsefulAvatar() {
  return (
    <Avatar>
      <AvatarImage
        src='https://github.com/shadcn.png'
        alt='@shadcn'
      />
      <AvatarFallback>MP</AvatarFallback>
    </Avatar>
  );
}
