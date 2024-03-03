import type { FC, MemoExoticComponent } from 'react';

export type DialogComponent = FC<any> | MemoExoticComponent<FC<any>>;
export type DialogId = string;
export interface DialogItem {
  id: DialogId;
  comp: DialogComponent;
  visible: boolean;
  props?: any;
  keepAlive?: boolean;
}
export type DialogPreset = Pick<DialogItem, 'visible' | 'keepAlive' | 'props'>;

export type State = {
  dialogs: Map<DialogId, DialogItem>;
  dialogMappings: Map<DialogId, DialogComponent>;
  dialogMappingsInitialized: boolean;
};
export type Action = {
  add: (id: DialogId, payload: DialogItem) => void;
  remove: (id: DialogId) => void;
  open: (id: DialogId | DialogComponent, props?: any) => void;
  close: (id: DialogId) => void;
  destroyAll: () => void;
  init: (mapping: Record<DialogId, DialogComponent>) => void;
};

export type Dialog = {
  id: DialogId;
  visible: boolean;
  open: () => void;
  close: () => void;
  afterClose: () => void;
};
