import type { TemplateResult } from 'lit';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
class HelloWorld extends LitElement {
  public static styles = css`
    :host {
      font-size: 2em;
    }

    .who {
      color: var(--hello-world-who-color, DodgerBlue);
    }
  `;

  @property({ type: String })
  public who = 'world';

  public render(): TemplateResult {
    return html`<span class="hello-world">Hello <span class="who">${this.who}</span>!</span>`;
  }
}

export default HelloWorld;

declare global {
  interface HTMLElementTagNameMap {
    'hello-world': HelloWorld;
  }
}
