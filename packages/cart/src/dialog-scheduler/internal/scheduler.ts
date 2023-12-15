import type { ReactElement } from 'react';

import Stack from '../data-structures/stack';

type DialogComponent = ReactElement;

export interface IDialogSchedulerItem {
  key: string | null;
  component: DialogComponent;
  visible: boolean;
  props: any;
}

export interface DialogPayload extends Omit<IDialogSchedulerItem, 'key' | 'component'> {
  keepAlive: boolean;
}

const NormalStack: Stack<IDialogSchedulerItem> = new Stack();
  const AliveStack: Stack<IDialogSchedulerItem> = new Stack();

const add = (dialog: DialogComponent, payload: DialogPayload) => {
  if (!dialog) {
    console.error('dialog is null');
    return;
  }
  if (stockDialog(dialog.key)) {
    console.error('dialog is exist');
    return;
  }
  const createDialog = () => ({
    key: dialog.key,
    component: dialog,
    props: payload.props,
    visible: payload.visible,
  });

  if (payload.keepAlive) {
    AliveStack.push(createDialog());
  } else {
    NormalStack.push(createDialog());
  }
};

const remove = () => {
  const popDialog = NormalStack.pop();
  return popDialog;
};

const stockDialog = (dialogKey: string | null) => {
  return (
    NormalStack.contains(({ key }: { key: string }) => key === dialogKey) ||
    AliveStack.contains(({ key }: { key: string }) => key === dialogKey)
  );
};

const destroyAll = () => {
  while (!NormalStack.isEmpty()) {
    NormalStack.pop();
  }
  while (!AliveStack.isEmpty()) {
    AliveStack.pop();
  }
};

const aliveList = () => {
  return AliveStack.toArray();
};

const normalList = () => {
  return NormalStack.toArray();
};

const renderList = () => {
  log();
  return aliveList()
    .map(({ component }) => component)
    .concat(normalList().map(({ component }) => component));
};

const log = () => {
  console.log(
    '%c [Normal Stack]: ',
    'color: green; background: white; font-weight: bold; border-radius: 3px',
    NormalStack.toArray(),
  );
  console.log(
    '%c [Alive Stack]: ',
    'color: green; background: yellow; font-weight: bold; border-radius: 3px',
    AliveStack.toArray(),
  );
};

export default {
  NormalStack,
  AliveStack,
  add,
  remove,
  stockDialog,
  destroyAll,
  aliveList,
  normalList,
  renderList,
};
