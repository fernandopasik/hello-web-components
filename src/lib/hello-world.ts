import type { CSSResult, TemplateResult } from 'lit-element';
import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('hello-world')
class HelloWorld extends LitElement {
  public static styles: CSSResult = css`
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
