import { MyCustomTabs } from '@/components';
import { customTabsData as data } from '@/data';

export default function CustomTabsPage() {
  return (
    <div>
      <h1 className='text-center'>You are on the custom tabs Page</h1>
      <MyCustomTabs data={data}></MyCustomTabs>
    </div>
  );
}
