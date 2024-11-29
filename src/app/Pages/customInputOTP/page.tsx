'use client';

import { useState } from 'react';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/components/ui/input-otp';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function InputOTPPage() {
  const [inputValue, setInputValue] = useState<string>('');
  const [showBadget, setShowBadget] = useState<boolean>(false);

  return (
    <div className='grid grid-cols-2 gap-4'>
      <h1 className='text-center col-span-full'>
        Enter a random value in the password input
      </h1>
      <InputOTP
        maxLength={6}
        value={inputValue}
        onChange={(value) => setInputValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button
        variant={'destructive'}
        onClick={() => setShowBadget((lastState) => !lastState)}
      >
        Comprobar Password
      </Button>

      {showBadget && (
        <Badge
          variant={'success'}
          className='col-span-full flex justify-center bg-green-100'
        >
          El acceso es correcto.
        </Badge>
      )}
    </div>
  );
}
