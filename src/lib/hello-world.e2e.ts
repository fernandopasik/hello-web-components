const render = async (html: string): Promise<void> => {
  await page.goto('http://localhost:10001/');
  await page.setContent(html);
};

describe('hello world', () => {
  it('starts with hello', async () => {
    await render('<hello-world></hello-world>');
    const text = await page.$eval('hello-world', (node) => node.shadowRoot?.textContent);

    expect(text).toStrictEqual(expect.stringContaining('Hello world!'));
  });
});
