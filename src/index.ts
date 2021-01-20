import {
  LitElement,
  html,
  css,
  CSSResult,
  customElement,
  TemplateResult,
} from "lit-element";

@customElement("my-app")
export default class MyApp extends LitElement {
  public async load(): Promise<void> {  
    const otherAppUrl = new URL(
      './other-app.js',
      import.meta.url
    );
    console.log(otherAppUrl.href)
    await import(otherAppUrl.href);   
        // await import('./other-app.js');    
 
    const a = document.createElement('my-other-app')
    this.shadowRoot.appendChild(a);
  }

  protected render(): TemplateResult {
    return html`
      <button @click="${this.load}">Dynamic load other app</button>
    `;
  }

  static get styles(): CSSResult {
    return css`
      * {
        box-sizing: border-box;
      }
    `;
  }
}
