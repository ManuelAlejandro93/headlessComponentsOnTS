import {
  Timer,
  Clock5,
  AlarmClockPlus,
  UserRoundPen,
  Landmark,
  Stethoscope
} from 'lucide-react';

interface CommandItemGroupsInterface {
  manejadoresDeTiempo: 'Manejadores de tiempo.';
  configuradoresDeCuenta: 'Configuradores De Cuenta.';
}

interface CommandPalleteItemsDataInterface {
  id: string;
  group: 'Manejadores de tiempo.' | 'Configuradores De Cuenta.';
  title: string;
  shortcut: string;
  icon: JSX.Element;
}

export const commandItemGroups: CommandItemGroupsInterface = {
  manejadoresDeTiempo: 'Manejadores de tiempo.',
  configuradoresDeCuenta: 'Configuradores De Cuenta.'
};

export const CommandPalleteItemsData: CommandPalleteItemsDataInterface[] = [
  {
    id: crypto.randomUUID(),
    group: commandItemGroups.manejadoresDeTiempo,
    title: 'Cronómetro',
    shortcut: 'Ctrl + Cron',
    icon: <Timer />
  },
  {
    id: crypto.randomUUID(),
    group: commandItemGroups.manejadoresDeTiempo,
    title: 'Reloj',
    shortcut: 'Ctrl + Rel',
    icon: <Clock5 />
  },
  {
    id: crypto.randomUUID(),
    group: commandItemGroups.manejadoresDeTiempo,
    title: 'Alarma',
    shortcut: 'Ctrl + Alar',
    icon: <AlarmClockPlus />
  },
  {
    id: crypto.randomUUID(),
    group: commandItemGroups.configuradoresDeCuenta,
    title: 'Datos Personales',
    shortcut: 'Ctrl + Pers',
    icon: <UserRoundPen />
  },
  {
    id: crypto.randomUUID(),
    group: commandItemGroups.configuradoresDeCuenta,
    title: 'Datos Bancarios',
    shortcut: 'Ctrl + Banc',
    icon: <Landmark />
  },
  {
    id: crypto.randomUUID(),
    group: commandItemGroups.configuradoresDeCuenta,
    title: 'Datos de Salud',
    shortcut: 'Ctrl + Salud',
    icon: <Stethoscope />
  }
];
