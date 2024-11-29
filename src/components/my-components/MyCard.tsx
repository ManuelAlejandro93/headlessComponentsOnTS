import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { MyButtonButton } from './MyButton';

export const MyCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <MyButtonButton
          tittle='Click'
          variant='ghost'
        />
        <MyButtonButton
          tittle='Click'
          variant='default'
        />
      </CardFooter>
    </Card>
  );
};
