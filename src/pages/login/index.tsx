import ProForm, { ProFormText } from '@ant-design/pro-form';
export default () => {
  return (
    <ProForm>
      <ProFormText name="username" label="用户名" />
      <ProFormText.Password name="password" label="密码" />
    </ProForm>
  );
};
