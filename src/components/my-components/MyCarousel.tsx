'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';

import { CarouselProps } from '@/interfaces';

export function MyCarousel({
  loop = true,
  delay = 2000,
  autoplay = true
}: CarouselProps) {
  return (
    <Carousel
      className='w-full max-w-xs'
      opts={{ loop: loop }}
      plugins={autoplay ? [Autoplay({ delay: delay })] : []}
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem
            key={index}
            className='basis-1/4'
          >
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <span className='text-4xl font-semibold'>{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden justify-center sm:flex' />
      <CarouselNext className='hidden justify-center sm:flex' />
    </Carousel>
  );
}
