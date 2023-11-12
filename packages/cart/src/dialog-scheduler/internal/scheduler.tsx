import { ElementType } from 'react';

import Stack from '../data-structures/stack';
import DialogFactory from './factory';

class DialogScheduler {
  private dialogStack: Stack<ElementType>;
  private static instance: DialogScheduler | undefined;

  constructor() {
    this.dialogStack = new Stack();

    if (!DialogScheduler.instance) {
      DialogScheduler.instance = this;
    }

    return DialogScheduler.instance;
  }

  mount = (dialog: ElementType) => {
    this.dialogStack.push(DialogFactory(dialog));
  };

  unmount = () => {
    return this.dialogStack.pop();
  };

  renderList = () => {
    const list = [];

    while (!this.dialogStack.isEmpty()) {
      list.push(this.dialogStack.pop());
    }

    return list;
  };
}

export default DialogScheduler;
