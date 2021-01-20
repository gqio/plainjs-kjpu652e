import {
  LitElement,
  TemplateResult,
  html,
  customElement
} from 'lit-element';

@customElement("my-other-app")
export class OtherApp extends LitElement {
  render(): TemplateResult {
    return html`
    <div>Other App</div>
    `;  
  }
}