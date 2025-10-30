import { css, html, LitElement, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
class HelloWorld extends LitElement {
  public static override styles = css`
    :host {
      font-size: 2em;
    }

    .who {
      color: var(--hello-world-who-color, DodgerBlue);
    }
  `;

  @property({ type: String })
  declare who: string;

  public constructor() {
    super();
    this.who = 'world';
  }

  public override render(): TemplateResult {
    return html`<span class="hello-world">Hello <span class="who">${this.who}</span>!</span>`;
  }
}

export default HelloWorld;

declare global {
  interface HTMLElementTagNameMap {
    'hello-world': HelloWorld;
  }
}
