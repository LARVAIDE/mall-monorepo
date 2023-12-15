import { ReactElement, useContext } from 'react';

import { DialogContext } from './provider';

const useNormalModal = () => {
  const { dialogScheduler, mount, unmount, forceUpdate } = useContext(DialogContext);

  const toggleVisible = (visible: boolean, props: any) => {
    const target = dialogScheduler.NormalStack.peek();
    if (!target) {
      throw new Error('target is null');
    }
    target.visible = visible;
    target.props = props;
  };

  const mountNormal = (component: ReactElement, props: any) => {
    mount(component, { visible: true, keepAlive: false, props });
  };

  const hide = (): Promise<unknown> => {
    let theResolve!: (args?: unknown) => void;
    const promise = new Promise((resolve, reject) => {
      theResolve = resolve;
    });
    theResolve(toggleVisible(false, null));
    forceUpdate();
    return promise;
  };

  const target = dialogScheduler.NormalStack.peek();

  return {
    visible: target?.visible,
    props: target?.props,
    mount: mountNormal,
    unmount,
    hide,
  };
};

export default useNormalModal;
