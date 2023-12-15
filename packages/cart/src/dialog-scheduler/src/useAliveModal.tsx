import type { ReactElement } from 'react';
import { useContext } from 'react';

import { DialogContext } from './provider';

/**
 * AliveModal hook
 *
 * @param {string} modalKey - The key of the modal.
 * @return {object} - An object containing the following properties
 *
 * @example
 * const { handlerOpen, handlerClose, visible } = useAliveModal('xxxx');
 */
const useAliveModal = (modalKey: string) => {
  const { dialogScheduler, mount, forceUpdate } = useContext(DialogContext);

  const toggleVisible = (visible: boolean, props?: any) => {
    const target = dialogScheduler.aliveList();
    const index = target.findIndex((modal) => modal.key === modalKey);
    if (index !== -1) {
      target[index].visible = visible;
      target[index].props = props;
    } else {
      console.error('target is null');
    }
    forceUpdate();
  };

  const handlerOpen = (props?: any) => {
    toggleVisible(true, props);
  };

  const handlerClose = () => {
    toggleVisible(false);
  };

  const register = (component: ReactElement) => {
    mount(component, { visible: false, keepAlive: true, props });
  };

  const { visible, props } = dialogScheduler.aliveList().find((modal) => modal.key === modalKey) || {
    props: {},
    visible: false,
  };

  return {
    visible,
    props,
    handlerOpen,
    handlerClose,
    register,
  };
};

export default useAliveModal;
