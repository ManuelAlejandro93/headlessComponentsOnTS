import { MyAlertDialogProperties } from '@/interfaces';

export const myAlertDialogPropertyData: MyAlertDialogProperties = {
  actionMessage: 'Open Dialog',
  alertTitle: 'Do you really want to do this?',
  alertMessage: 'Aceptar los terminos y condiciones...',
  actionContinue: 'Continuar',
  actionCancel: 'Cancelar'
} as const;
