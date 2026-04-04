import { css, html, LitElement, type TemplateResult } from 'lit';

class HelloWorld extends LitElement {
  public static override styles = css`
    :host {
      font-size: 2em;
    }

    .who {
      color: var(--hello-world-who-color, DodgerBlue);
    }
  `;

  public static override properties = {
    who: { type: String },
  };

  declare who: string;

  public constructor() {
    super();
    this.who = 'world';
  }

  public override render(): TemplateResult {
    return html`<span class="hello-world">Hello <span class="who">${this.who}</span>!</span>`;
  }
}

customElements.define('hello-world', HelloWorld);

export default HelloWorld;

declare global {
  interface HTMLElementTagNameMap {
    'hello-world': HelloWorld;
  }
}
