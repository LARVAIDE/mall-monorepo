import { Singleton } from '@mall/base';

import Stack from '../data-structures/stack';
import type { DialogComponent, IDialogScheduler } from './scheduler.d';

class DialogScheduler extends Singleton implements IDialogScheduler {
  private dialogStack: Stack<DialogComponent>;

  constructor() {
    super();
    this.dialogStack = new Stack();
  }

  mount = (dialog: DialogComponent, keepAlive = false) => {
    this.dialogStack.push(dialog);
    this.log();
  };

  unmount = () => {
    const popDialog = this.dialogStack.pop();
    this.log();
    return popDialog;
  };

  stockDialog = (dialogKey: string) => {
    return this.dialogStack.contains(({ key }: { key: string }) => key === dialogKey);
  };

  destroyAll = () => {
    while (!this.dialogStack.isEmpty()) {
      this.dialogStack.pop();
    }
  };

  renderList = () => {
    return this.dialogStack.toArray();
  };

  private log = () => {
    console.log(
      '%c [Normal Stack]: ',
      'color: green; background: white; font-weight: bold',
      this.dialogStack.toArray(),
    );
  };
}

const dialogScheduler = new DialogScheduler();

export default dialogScheduler;
