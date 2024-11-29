import { MyAvatar } from '@/components';

export default function AvatarPage() {
  return (
    <div className='text-center'>
      <h1>Hello, You are on Avatar Page</h1>
      <div className='flex justify-around'>
        <MyAvatar></MyAvatar>
        <MyAvatar></MyAvatar>
      </div>
    </div>
  );
}
