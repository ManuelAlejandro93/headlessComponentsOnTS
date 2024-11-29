'use client';

import { Checkbox } from '@/components/ui/checkbox';

interface MyCustomCheckboxProps {
  title: string;
  subTitle: string;
  disable?: boolean;
  checked?: boolean;
  onChangeChecked?: () => void;
}

export function MyCustomCheckbox({
  title = 'Accept terms and conditions',
  subTitle = 'You agree to our Terms of Service and Privacy Policy.',
  disable = false,
  checked = false,
  onChangeChecked
}: MyCustomCheckboxProps) {
  return (
    <div className='items-top flex space-x-2'>
      <Checkbox
        id='checkboxCheck'
        disabled={disable}
        checked={checked}
        onCheckedChange={onChangeChecked}
      />
      <div className='grid gap-1.5 leading-none'>
        <label
          htmlFor='checkboxCheck'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          {title}
        </label>
        <p className='text-sm text-muted-foreground'>{subTitle}</p>
      </div>
    </div>
  );
}
