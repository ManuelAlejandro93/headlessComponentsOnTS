'use client';

import * as React from 'react';

import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

export function MyCustomProgressBar() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((lastProgress) => Math.min(lastProgress + 0.5, 101));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
      value={progress}
      className='w-[70%] h-[20px] bg-blue-700'
    />
  );
}
