import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {}, // 开启ant-design-pro布局
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/user',
      component: '@/pages/user/index',
      wrappers: ['@/wrappers/auth'], // 权限
    },
    { path: '/login', component: '@/pages/login/index' },
    { path: '/404', component: '@/pages/404' },
    { redirect: '/404' },
  ],
  fastRefresh: {},
  mfsu: {},
});
