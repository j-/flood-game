import { useCallback } from 'react';
import useLocalStorageState from 'use-local-storage-state';

export const DIALOG_HIDDEN_STORAGE_KEY = 'dialog-hidden';

export const useHelpDialog = () => {
  const [
    isDialogHidden,
    setIsDialogHidden,
    { removeItem }
  ] = useLocalStorageState<true | undefined>(DIALOG_HIDDEN_STORAGE_KEY);

  const isDialogShown = !isDialogHidden;

  const showDialog = removeItem;

  const hideDialog = useCallback(() => {
    setIsDialogHidden(true);
  }, [setIsDialogHidden]);

  return { isDialogShown, showDialog, hideDialog };
};
