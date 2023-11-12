import { lazy } from 'react';

// Full load
import WelcomeDialog from '../dialogs/welcome-dialog';

const delayLoad = (promise: Promise<any>) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};

// OnDemand load
const SettingsDialog = lazy(() => delayLoad(import('../dialogs/setting-dialog')));

export { SettingsDialog,WelcomeDialog };
