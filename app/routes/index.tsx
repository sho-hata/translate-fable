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
      <div style={{ marginBottom: 40, alignItems: 'center' }}>
        <Form replace method="post">
          <textarea style={{ width: 1000, height: 400 }} name="target" />
          <br />
          <button type="submit">変換する───</button>
        </Form>
      </div>
      {actionData?.errors && <span>{actionData.errors.message}</span>}
      <span style={{ whiteSpace: 'pre-wrap' }}>{actionData?.translated}</span>
    </>
  );
};

export default Index;
