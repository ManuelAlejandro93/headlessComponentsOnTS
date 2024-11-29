import { MyUsefulAvatar } from '@/components';

export default function AvatarPage() {
  return (
    <div className='grid grid-cols-3'>
      <div className='w-full flex justify-center items-center gap-4'>
        <MyUsefulAvatar></MyUsefulAvatar>
        <p>@neologista</p>
      </div>
      <div className='w-full flex justify-center items-center gap-4'>
        <MyUsefulAvatar></MyUsefulAvatar>
        <p>@neologista</p>
      </div>
      <div className='w-full flex justify-center items-center gap-4'>
        <MyUsefulAvatar></MyUsefulAvatar>
        <p>@neologista</p>
      </div>
    </div>
  );
}
