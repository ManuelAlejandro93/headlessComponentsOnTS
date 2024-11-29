import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function MyAvatar() {
  return (
    <Avatar>
      <AvatarImage
        // src='https://github.com/shadcn.png'
        src='https://github.com/shadcn.png'
        alt='@shadcn'
      />
      <AvatarFallback>MP</AvatarFallback>
    </Avatar>
  );
}
