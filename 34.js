"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34],{7034:(e,t,i)=>{i.r(t),i.d(t,{W3mModal:()=>c});var n=i(1525),o=i(6526),s=i(2662),a=i(4503);const r=s.AH`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var d=function(e,t,i,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};const l="scroll-lock";let c=class extends s.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.W3.state.open,this.caipAddress=n.Uj.state.caipAddress,this.isSiweEnabled=n.Hd.state.isSiweEnabled,this.connected=n.Uj.state.isConnected,this.loading=n.W3.state.loading,this.initializeTheming(),n.Np.prefetch(),this.unsubscribe.push(n.W3.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),n.W3.subscribeKey("loading",(e=>{this.loading=e,this.onNewAddress(n.Uj.state.caipAddress)})),n.Uj.subscribeKey("isConnected",(e=>this.connected=e)),n.Uj.subscribeKey("caipAddress",(e=>this.onNewAddress(e))),n.Hd.subscribeKey("isSiweEnabled",(e=>this.isSiweEnabled=e))),n.En.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.open?s.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){const{SIWEController:e}=await i.e(727).then(i.bind(i,6727));"success"!==e.state.status&&this.connected&&await n.x4.disconnect()}n.W3.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=n.Wn.state,i=o.UiHelperUtil.getColorTheme(t);(0,o.initializeTheming)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),n.Pt.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=l,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${l}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",(t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:i}=t.target;!i||i.includes("W3M-")||i.includes("WUI-")||e?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){if(!this.connected||this.loading)return;const t=n.wE.getPlainAddress(this.caipAddress),o=n.wE.getPlainAddress(e),s=n.wE.getNetworkId(this.caipAddress),a=n.wE.getNetworkId(e);if(this.caipAddress=e,this.isSiweEnabled){const{SIWEController:e}=await i.e(727).then(i.bind(i,6727)),n=await e.getSession();if(n&&t&&o&&t!==o)return void(e.state._client?.options.signOutOnAccountChange&&(await e.signOut(),this.onSiweNavigation()));if(n&&s&&a&&s!==a)return void(e.state._client?.options.signOutOnNetworkChange&&(await e.signOut(),this.onSiweNavigation()));this.onSiweNavigation()}}onSiweNavigation(){this.open?n.IN.push("ConnectingSiwe"):n.W3.open({view:"ConnectingSiwe"})}};c.styles=r,d([(0,a.wk)()],c.prototype,"open",void 0),d([(0,a.wk)()],c.prototype,"caipAddress",void 0),d([(0,a.wk)()],c.prototype,"isSiweEnabled",void 0),d([(0,a.wk)()],c.prototype,"connected",void 0),d([(0,a.wk)()],c.prototype,"loading",void 0),c=d([(0,o.customElement)("w3m-modal")],c)}}]);