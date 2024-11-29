'use client';
import { useEffect, useState } from 'react';
import { MySlider, MyDoubleInputSlider } from '@/components';

export default function SlidePage() {
  const [sliderValue, setSliderValue] = useState<number[]>([31]);
  const [sliderRangeValues, setSliderRangeValues] = useState<number[]>([
    20, 40
  ]);
  const [beingYoungAdvise, setBeingYoungAdvise] = useState<boolean>(true);

  useEffect(() => {
    const [actualSliderValue] = sliderValue;
    if (actualSliderValue > 30) return setBeingYoungAdvise(false);
    return setBeingYoungAdvise(true);
  }, [sliderValue]);

  return (
    <div className='grid grid-cols-1 text-center space-y-5'>
      <h1>You are on Slide Page</h1>
      <MySlider
        className='w-full'
        min={18}
        max={120}
        step={1}
        defaultValue={sliderValue}
        onValueChange={(newSlidervalue) => setSliderValue(newSlidervalue)}
      ></MySlider>
      <h1>Edad: {sliderValue}</h1>
      {beingYoungAdvise ? null : <h2>Eres mayor de 30 años.</h2>}
      <hr />
      <h2>Selecciona tu rango de edad.</h2>
      <MyDoubleInputSlider
        className='w-full'
        min={0}
        max={100}
        step={10}
        defaultValue={sliderRangeValues}
        onValueChange={(newRangevalue) => setSliderRangeValues(newRangevalue)}
      ></MyDoubleInputSlider>
      <h2>
        Tu rango de edad es: {sliderRangeValues[0]} - {sliderRangeValues[1]}
      </h2>
    </div>
  );
}
