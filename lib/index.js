"use strict";
(() => {
  // src/ShadowDOM.ts
  var ShadowDOM = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    setContent(html2) {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = html2;
      }
    }
    setStyle(styles) {
      const style2 = document.createElement("style");
      style2.textContent = styles;
      if (this.shadowRoot) {
        this.shadowRoot.appendChild(style2);
      }
    }
    element(html2) {
      if (this.shadowRoot) {
        this.shadowRoot.append(html2);
      }
    }
    static get observedAttributes() {
      return this.attributesList || [];
    }
    attributeChangedCallback(_name, _oldValue, _newValue) {
      if (typeof this.render === "function") {
        const attributes = this.getAttributes();
        this.render(attributes);
      }
    }
    getAttributes() {
      const attributes = /* @__PURE__ */ new Map();
      this.constructor.attributesList.forEach((attr) => {
        attributes.set(attr, this.getAttribute(attr));
      });
      return attributes;
    }
  };

  // src/attributes.ts
  var EVENTS = [
    "$mouseOver",
    "$abort",
    "$animationEnd",
    "$animationIteration",
    "$animationStart",
    "$auxClick",
    "$beforeInput",
    "$blur",
    "$canPlay",
    "$canPlayThrough",
    "$change",
    "$click",
    "$contextMenu",
    "$dblClick",
    "$drag",
    "$dragEnd",
    "$dragEnter",
    "$dragLeave",
    "$dragOver",
    "$dragStart",
    "$drop",
    "$durationChange",
    "$emptied",
    "$ended",
    "$error",
    "$focus",
    "$gotPointerCapture",
    "$input",
    "$invalid",
    "$keyDown",
    "$keyPress",
    "$keyUp",
    "$load",
    "$loadedData",
    "$loadedMetadata",
    "$loadStart",
    "$lostPointerCapture",
    "$mouseDown",
    "$mouseEnter",
    "$mouseLeave",
    "$mouseMove",
    "$mouseOut",
    "$mouseOver",
    "$mouseUp",
    "$pause",
    "$play",
    "$playing",
    "$pointerCancel",
    "$pointerDown",
    "$pointerEnter",
    "$pointerLeave",
    "$pointerMove",
    "$pointerOut",
    "$pointerOver",
    "$pointerUp",
    "$progress",
    "$rateChange",
    "$reset",
    "$scroll",
    "$scrollEnd",
    "$seeked",
    "$seeking",
    "$select",
    "$stalled",
    "$submit",
    "$suspend",
    "$timeUpdate",
    "$touchCancel",
    "$touchEnd",
    "$touchMove",
    "$touchStart",
    "$transitionStart",
    "$transitionEnd",
    "$transitionRun",
    "$transitionCancel",
    "$volumeChange",
    "$waiting",
    "$wheel"
  ];
  var HTML_TAGS = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr"
  ];

  // src/utils.ts
  function render(el, val) {
    if (typeof el === "string") {
      const selector = document.querySelector(el);
      if (selector !== null && selector.innerHTML !== null) {
        if (val instanceof Node) {
          selector.appendChild(val);
        } else {
          selector.innerHTML = String(val);
        }
      }
    } else if (el !== null && el.textContent !== null) {
      if (val instanceof Node) {
        el.appendChild(val);
      } else {
        el.textContent = String(val);
      }
    }
  }
  function toHTMLInput(target) {
    return target;
  }
  function component(componentFunction) {
    return () => {
      Signal.dispose();
      return componentFunction();
    };
  }

  // src/signals.ts
  var Signal = class _Signal {
    static {
      this.cleanupFns = [];
    }
    constructor(initialValue) {
      this.val = initialValue;
      this.observers = /* @__PURE__ */ new Map();
      this.boundElements = /* @__PURE__ */ new Set();
    }
    get value() {
      return this.val;
    }
    set value(value) {
      this.val = value;
      this.observers.forEach((_, observer) => observer(value));
      this.boundElements.forEach((el) => render(el, value));
    }
    subscribe(callback) {
      const stop = () => {
        this.observers.delete(callback);
      };
      this.observers.set(callback, stop);
      _Signal.cleanupFns.push(() => this.unsubscribe(stop));
      return stop;
    }
    unsubscribe(stop) {
      stop();
    }
    bind(element) {
      if (element instanceof HTMLElement || element instanceof Element) {
        this.boundElements.add(element);
        render(element, this.value);
        return;
      }
      element.forEach((el) => {
        this.boundElements.add(el);
        render(el, this.value);
      });
    }
    static dispose() {
      _Signal.cleanupFns.forEach((cleanupFn) => cleanupFn());
      _Signal.cleanupFns = [];
    }
  };

  // src/decorators.ts
  function Component(tagName) {
    return function(constructor) {
      customElements.define(
        tagName,
        constructor
      );
    };
  }

  // src/elements.ts
  function setAttributes(el, attrs, events) {
    for (const attr in attrs) {
      if (attr.startsWith("$")) {
        const fn = attrs[attr];
        if (typeof fn === "function" && isEvent(attr)) {
          events.set(attr, fn);
        }
      } else {
        const val = attrs[attr];
        if (attr === "style" && typeof val === "object") {
          Object.assign(el.style, val);
        } else if (typeof val === "string") {
          el.setAttribute(attr, val);
        } else if (typeof val === "boolean") {
          el.setAttribute(attr, String(val));
        }
      }
    }
  }
  function setChildren(el, ...children) {
    for (const child of children) {
      if (child === void 0) {
        continue;
      }
      if (child instanceof Signal) {
        child.bind(el);
        continue;
      }
      if (typeof child === "string") {
        el.appendChild(document.createTextNode(child));
      } else {
        el.appendChild(child);
      }
    }
  }
  function setEvents(el, events) {
    events.forEach((event, onEvent) => {
      const eventName = onEvent.slice(1);
      el.addEventListener(eventName.toLowerCase(), event);
    });
  }
  function isEvent(val) {
    return EVENTS.includes(val);
  }
  var tagFunctions = /* @__PURE__ */ Object.create(null);
  HTML_TAGS.forEach((tag) => {
    tagFunctions[tag] = (attributes, ...children) => {
      const element = document.createElement(tag);
      const events = /* @__PURE__ */ new Map();
      setAttributes(element, attributes, events);
      setChildren(element, ...children);
      setEvents(element, events);
      return element;
    };
  });
  var {
    a,
    abbr,
    address,
    area,
    article,
    aside,
    audio,
    b,
    base,
    bdi,
    bdo,
    blockquote,
    body,
    br,
    button,
    canvas,
    caption,
    cite,
    code,
    col,
    colgroup,
    data,
    datalist,
    dd,
    del,
    details,
    dfn,
    dialog,
    div,
    dl,
    dt,
    em,
    embed,
    fieldset,
    figcaption,
    figure,
    footer,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    head,
    header,
    hr,
    html,
    i,
    iframe,
    img,
    input,
    ins,
    kbd,
    label,
    legend,
    li,
    link,
    main,
    map,
    mark,
    meta,
    meter,
    nav,
    noscript,
    object,
    ol,
    optgroup,
    option,
    output,
    p,
    param,
    picture,
    pre,
    progress,
    q,
    rp,
    rt,
    ruby,
    s,
    samp,
    script,
    section,
    select,
    small,
    source,
    span,
    strong,
    style,
    sub,
    summary,
    sup,
    table,
    tbody,
    td,
    template,
    textarea,
    tfoot,
    th,
    thead,
    time,
    title,
    tr,
    track,
    u,
    ul,
    var: htmlVar,
    video,
    wbr
  } = tagFunctions;
})();
