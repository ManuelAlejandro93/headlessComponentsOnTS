'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useToast } from '@/hooks/use-toast';

import { MyCustomTabsComponenteInterface as Props } from '@/interfaces';

export function MyCustomTabs({ data }: Props) {
  const { toast } = useToast();
  return (
    <Tabs defaultValue={data[0].tabName}>
      <TabsList
        className={`grid w-full ${
          data.length === 5 ? 'grid-cols-5' : 'grid-cols-8'
        } space-x-6`}
      >
        {data.map((estudiante) => (
          <TabsTrigger
            key={estudiante.id}
            value={estudiante.tabName}
            onFocus={() =>
              toast({
                title: `Información sobre ${estudiante.tabName}`,
                variant: 'info'
              })
            }
          >
            {estudiante.tabName}
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map((estudiante) => (
        <TabsContent
          key={estudiante.id}
          value={estudiante.tabName}
        >
          <Card>
            <CardHeader>
              <CardTitle>{estudiante.fullName}</CardTitle>
              <CardDescription>
                Aquí encontrarás información personal sobre:{' '}
                {estudiante.tabName}.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='nombre'>Nombre</Label>
                <Input
                  id='nombre'
                  defaultValue={estudiante.fullName}
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='username'>Username</Label>
                <Input
                  id='username'
                  defaultValue={`@${estudiante.userName}`}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() =>
                  toast({
                    title: `Ha seleccionado a ${estudiante.tabName}`,
                    variant: 'success'
                  })
                }
              >
                Guardar Cambios en {estudiante.tabName}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
