import type { FunctionComponentElement } from 'react';

export type DialogComponent = FunctionComponentElement;

export interface IDialogSchedulerItemProps {
  visible: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}

export interface IDialogScheduler {
  /**
   * 挂载一个弹窗
   */
  mount: (dialog: DialogComponent) => void;
  /**
   * 卸载顶层弹窗
   */
  unmount: () => DialogComponent | undefined;
  /**
   * 页面上是否有某个弹窗
   */
  stockDialog: (key: string) => boolean;
  /**
   * 重置所有弹窗
   */
  destroyAll: () => void;
  /**
   * 弹窗列表
   */
  renderList: () => DialogComponent[];
}
