'use client';
import { MySkeleton } from '@/components';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function SkeletonPage() {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className='grid grid-cols-2 text-center space-y-5'>
      <h1>You are on Skeleton Page</h1>
      {loading ? (
        <MySkeleton></MySkeleton>
      ) : (
        <div className='flex items-center space-x-4'>
          <div className='bg-red-300 h-12 w-12 rounded-full' />
          <div className='space-y-2'>
            <div className='bg-red-300 h-4 w-[250px]' />
            <div className='bg-red-300 h-4 w-[200px]' />
          </div>
        </div>
      )}
      <Button
        onClick={() => setLoading((lastLoadingState) => !lastLoadingState)}
        className='col-span-full'
        variant={'ghost'}
      >
        Click and stare at the magic!
      </Button>
    </div>
  );
}
