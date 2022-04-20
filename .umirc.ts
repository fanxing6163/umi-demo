import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {}, // 开启ant-design-pro布局
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
