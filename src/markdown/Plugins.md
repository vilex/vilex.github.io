# 插件

本地开发实时预览插件 `vite-vilex`

1. 安装 `vite-vilex`

```shell
pnpm add vite-vilex -D
```

2. 在 `vite.config.ts` 或 `vite.config.js` 中添加

```typescript
import VilexPlugin from 'vite-vilex'

export default {
    plugins: [
        VilexPlugin()
    ]
}
```
