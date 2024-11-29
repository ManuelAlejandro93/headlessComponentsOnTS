'use client';

import * as React from 'react';

import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

export function MyProgressBar() {
  const [progress, setProgress] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((lastProgress) => {
        if (lastProgress >= 100) return 100;
        return lastProgress + 0.5;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
      value={progress}
      className='w-[90%] h-[30px] bg-blue-800'
    />
  );
}
7;
