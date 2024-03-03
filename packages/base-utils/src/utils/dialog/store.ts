import { getUuid, MCLogger } from '@mc/web-base-utils';
import { enableMapSet, produce } from 'immer';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { Action, DialogComponent, DialogId, DialogPreset, State } from './types';

const forceRegisteredDialog = (id: DialogId) => useDialogStore.getState().dialogs.get(id);

const getDialogId = (dialog: DialogComponent): DialogId => {
  const { dialogMappings } = useDialogStore.getState();
  const dialogMappingEntry = [...dialogMappings.entries()].find((entry) => entry[1] === dialog);
  if (dialogMappingEntry) {
    return dialogMappingEntry[0];
  }
  if (dialog.displayName) {
    return dialog.displayName;
  }
  if (dialog.name) {
    return dialog.name;
  }
  return getUuid();
};

const registerDialog = (dialog: DialogId | DialogComponent, preset?: DialogPreset) => {
  const { visible = true, keepAlive = false, ...rest } = preset || {};
  const addDialog = (id: string, comp: DialogComponent) => {
    useDialogStore.getState().add(id, {
      id,
      comp,
      visible,
      props: rest,
      keepAlive,
    });
  };

  switch (typeof dialog) {
    case 'string': {
      const forceDialog = useDialogStore.getState().dialogMappings.get(dialog);
      if (forceDialog) {
        addDialog(dialog, forceDialog);
      } else {
        MCLogger.warn(`Dialog ${dialog} does not exist`);
      }
      break;
    }
    case 'function': {
      addDialog(getDialogId(dialog), dialog);
      break;
    }
    case 'object': {
      const { $$typeof: dialogType } = dialog;
      if (dialogType === Symbol.for('react.memo')) {
        addDialog(getDialogId(dialog), dialog);
      }
      break;
    }
    default:
      MCLogger.warn(`current dialog type is cannot handled`);
      break;
  }
};

const initialState = (): State => ({
  dialogs: new Map(),
  dialogMappings: new Map(),
  dialogMappingsInitialized: false,
});

enableMapSet();
const useDialogStore = create<State & Action>()(
  immer((set, get) => ({
    dialogs: new Map(),
    dialogMappings: new Map(),
    dialogMappingsInitialized: false,
    ...initialState,

    open: (comp: DialogId | DialogComponent, props?: any) => {
      if ((comp && typeof comp !== 'string') || !forceRegisteredDialog(comp)) {
        registerDialog(comp, props);
        return;
      }
      set(
        produce((state) => {
          state.dialogs.get(comp).visible = true;
          state.dialogs.get(comp).props = props;
        }),
      );
    },
    close: (id: DialogId) => {
      if (forceRegisteredDialog(id)) {
        set(
          produce((state) => {
            state.dialogs.get(id).visible = false;
          }),
        );
      } else {
        MCLogger.warn(`Dialog ${id} is not registered`);
      }
    },
    add: (id, payload) => {
      set((state) => {
        state.dialogs.set(id, payload);
      });
    },
    remove: (id) => {
      set((state) => {
        state.dialogs.delete(id);
      });
    },
    destroyAll: () => {
      set((state) => {
        state.dialogs.clear();
      });
    },
    init: (mapping) => {
      if (!get().dialogMappingsInitialized) {
        set({ dialogMappings: new Map(Object.entries(mapping)), dialogMappingsInitialized: true });
      }
    },
  })),
);

export default useDialogStore;
