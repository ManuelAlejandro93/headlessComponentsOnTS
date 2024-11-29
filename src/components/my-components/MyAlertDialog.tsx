import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { MyAlertDialogProperties } from '@/interfaces';

export function MyAlertDialog({
  actionMessage,
  alertTitle,
  alertMessage,
  actionContinue,
  actionCancel
}: MyAlertDialogProperties) {
  return (
    <AlertDialog defaultOpen={true}>
      <AlertDialogTrigger asChild>
        <Button variant='outline'>{actionMessage ?? 'Show Dialog'}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {alertTitle ?? 'Are you absolutely sure?'}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {alertMessage ??
              'This will delete all your information from our server.'}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{actionCancel ?? 'Cancel'}</AlertDialogCancel>
          <AlertDialogAction>{actionContinue ?? 'Continue'}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
