const render = async (html: string): Promise<void> => {
  await page.goto('http://localhost:10001/');
  await page.setContent(html);
};

describe('hello world', () => {
  it('starts with hello', async () => {
    await render('<hello-world></hello-world>');
    const element = await page.$('hello-world');

    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
    const text = await page.evaluate((el) => el?.shadowRoot?.textContent, element);

    expect(text).toStrictEqual(expect.stringContaining('Hello world!'));
  });
});
