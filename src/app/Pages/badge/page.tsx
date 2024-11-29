import { MyBadge } from '@/components/my-components/Badge';

export default function BadgePage() {
  return (
    <div>
      <h1 className='text-center'>You are on Badge Page</h1>
      <div className='grid grid-cols-3 gap-4'>
        <MyBadge variant='default'></MyBadge>
        <MyBadge variant='destructive'></MyBadge>
        <MyBadge variant='outline'></MyBadge>
        <MyBadge variant='secondary'></MyBadge>
        <MyBadge variant='success'></MyBadge>
        <MyBadge variant='info'></MyBadge>
      </div>
    </div>
  );
}
