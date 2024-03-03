import useDialogStore from './store';
import { DialogId } from './types';

const useDialog = (id: DialogId) => {
  const { dialogInfo, open, close, remove } = useDialogStore((state) => ({
    dialogInfo: state.dialogs.get(id),
    open: state.open,
    close: state.close,
    remove: state.remove,
  }));

  const openDialog = () => {
    open(id);
  };

  const closeDialog = () => {
    close(id);
  };

  const afterClose = () => {
    if (!dialogInfo?.keepAlive) {
      remove(id);
    }
  };

  return {
    visible: !!dialogInfo?.visible,
    open: openDialog,
    close: closeDialog,
    afterClose,
  };
};

export default useDialog;
