'use client';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

type SliderProps = React.ComponentProps<typeof Slider>;

export function MySlider({ className, ...props }: SliderProps) {
  const [sliderValue, setSliderValue] = useState<number[]>([30]);
  return (
    <Slider
      // max={100}
      // step={10}
      // defaultValue={sliderValue}
      // onValueChange={(newSlidervalue) => setSliderValue(newSlidervalue)}
      className={cn('w-[60%]', className)}
      {...props}
    />
  );
}
