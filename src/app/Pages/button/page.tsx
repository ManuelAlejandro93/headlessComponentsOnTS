import { MyButtonButton } from '@/components';
import { ButtonData } from '@/data';

export default function AlertPage() {
  return (
    <div>
      <h1 className='text-center'>You are on Button Page</h1>
      <div className='grid grid-cols-5 gap-3'>
        {ButtonData.map((item) => (
          <MyButtonButton
            key={item.id}
            tittle={item.title}
            variant={item.variantStyle}
          />
        ))}
      </div>
    </div>
  );
}
