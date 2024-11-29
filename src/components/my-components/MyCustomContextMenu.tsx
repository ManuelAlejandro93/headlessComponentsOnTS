'use client';
import { useRouter } from 'next/navigation';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@/components/ui/context-menu';

import { PageRouterData } from '@/data';

export function MyCustomContextMenu() {
  const router = useRouter();

  const handleNavigateTo = (componentRoute: string): void => {
    router.push(componentRoute);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm'>
        Click derecho para navegar a...
      </ContextMenuTrigger>
      <ContextMenuContent className='w-64'>
        {PageRouterData.map((page) => (
          <ContextMenuItem
            key={page.name}
            inset
            onClick={() => handleNavigateTo(page.href)}
          >
            {page.name}
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
}
