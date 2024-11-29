import { MyContextMenu } from '@/components/my-components';

export default function ContextMenuPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>You are on the Context Menu Page</h1>
      <MyContextMenu></MyContextMenu>
    </div>
  );
}
