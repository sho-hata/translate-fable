import { ActionFunction, json } from '@remix-run/cloudflare';
import { Form, useActionData } from '@remix-run/react';
import { toFable } from '~/hooks/translate';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const target = formData.get('target');

  if (typeof target !== 'string' || target.length === 0) {
    return json({ errors: { message: 'required' } });
  }
  return await json({ translated: toFable(target) });
};

const Index = () => {
  const actionData = useActionData<{
    translated: string;
    errors: { message: string };
  }>();

  return (
    <>
      <h1>ファブル構文変換</h1>
      <Form replace method="post">
        <textarea name="target" />
        <br />
        <button type="submit">変換する───</button>
      </Form>
      {actionData?.errors && <span>{actionData.errors.message}</span>}
      {actionData?.translated}
    </>
  );
};

export default Index;
