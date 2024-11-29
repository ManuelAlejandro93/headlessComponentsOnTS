import { MyCustomContextMenu } from '@/components/my-components';

export default function ContextMenuPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>You are on the Custom Context Menu Page</h1>
      <MyCustomContextMenu></MyCustomContextMenu>
    </div>
  );
}
