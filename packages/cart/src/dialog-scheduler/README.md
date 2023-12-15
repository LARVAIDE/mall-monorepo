# Dialog Module

## 分类

- Normal: 一般弹窗。挂载即打开，关闭即销毁。
- Alive: 常驻页面，可以重复打开/关闭。

## 用法

### Normal

```tsx
// 挂载弹窗即打开
Dialog.mount(Component); 

// 关闭即卸载
<Modal afterClose={Dialog.unmount}>
  Modal content...
</Modal>
```

### Alive

#### 注册

```ts
Dialog.mount(Component, true); // 全局注册弹窗
```

#### 调用

```tsx
// Hook用法
const { visible, onOpen, onClose } = Dialog.useModal("xxx");

// API用法
const { visible, onOpen, onClose } = Dialog.getModalByKey("xxx");
```

#### 卸载

退出登录时。

## 实现

用 Stack 管理 Normal 类型弹窗。

用 Map 管理 Alive 类型弹窗。
