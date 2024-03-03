# NottaDialog 使用说明

运行方式参考 [方案文档 - Notion](https://www.notion.so/notta-hq/Dialog-36c66f3d55d64ddb83054e661ceaca67)

## 🪄 Usage

### 全局弹窗

1. 注册全局弹窗

```tsx
import { NottaDialog } from '@notta/base';

NottaDialog.init({
  'TranscribeImageDeleteDialog': TranscribeImageDeleteDialog,
  'RecordTranslateDialog': RecordTranslateDialog,
  ...
});
```

2. 弹窗挂载

```tsx
import { withDialogCreator } from '@notta/base';

const NotionExportDialog = withDialogCreator(({ visible, close, afterClose }) => {
  return (
    <DialogLayout
      visible={visible}
      onCancel={close}
      onClose={afterClose}
    >
  ...
    </DialogLayout>
  );
});
```

3. 打开弹窗

```tsx
import { NottaDialog } from '@notta/base';
import PurchaseDialog from '@/dialogs/openPurchaseDialog';

NottaDialog.open('PurchaseDialog', {
  subscribeType: SubscribeType.Team,
  defaultSeats,
});
```

4. 关闭弹窗

```tsx
import { NottaDialog } from '@notta/base';

NottaDialog.close('PurchaseDialog');
```

### 局部弹窗

* 打开弹窗

```tsx
import { NottaDialog } from '@notta/base';
import PurchaseDialog from '@/dialogs/openPurchaseDialog';

NottaDialog.open(PurchaseDialog, {
  subscribeType: SubscribeType.Team,
  defaultSeats,
});
```

## 📙 API

```tsx
import { NottaDialog } from '@notta/base';

// 挂载弹窗的容器
<NottaDialog.DialogView />
// k-v mapped初始化
NottaDialog.init
// 打开弹窗
NottaDialog.open
// 关闭弹窗
NottaDialog.close
// 销毁所有弹窗
NottaDialog.destroyAll
```
