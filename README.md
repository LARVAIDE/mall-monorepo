# Mall Monorepo

> node: >= 18
> pnpm: >= 8

## 本地开发

安装项目所有依赖（包括本地依赖）

```bash
pnpm i
```

构建本地依赖

```bash
pnpm dev:shared
```

运行项目

```bash
pnpm dev 
```

## 包版本管理

* 采用[changeset](https://pnpm.io/zh/using-changesets)管理版本更新
* 版本号遵循[semver 规范](https://semver.org/lang/zh-CN/)

### 使用步骤

#### Pre-releases

* 正式版本忽略此步骤，执行下面通用操作里的指令。
* 如果是非正式版本，进入对应的 [Pre-releases](https://github.com/changesets/changesets/blob/main/docs/prereleases.md#prereleases) 模式后，再执行下面通用操作里的指令。

```bash
## 内部测试版
pnpm run version:beta # pnpm changeset pre enter beta

## 测试版
pnpm run version:alpha # pnpm changeset pre enter alpha

## 发行候选版
pnpm run version:rc # pnpm changeset pre enter rc
```

#### 通用操作

选择版本更新范围

```bash
pnpm run version:rules # pnpm changeset add
```

执行版本号更新

```bash
pnpm run version:update # pnpm changeset version
```
