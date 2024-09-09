import {
  Attributes,
  Child,
  EVENTS,
  Events,
  HTMLTags,
  HTML_TAGS,
  OnEvent,
} from "./attributes";
import { Signal } from "./signals";

function setAttributes(el: HTMLElement, attrs: Attributes, events: OnEvent) {
  for (const attr in attrs) {
    if (attr.startsWith("$")) {
      const fn = attrs[attr];
      if (typeof fn === "function" && isEvent(attr)) {
        events.set(attr as Events, fn);
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

function setChildren<T>(
  el: HTMLElement,
  ...children: (Child | Signal<T> | undefined)[]
) {
  for (const child of children) {
    if (child === undefined) {
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

function setEvents(el: HTMLElement, events: OnEvent) {
  events.forEach((event, onEvent) => {
    const eventName = onEvent.slice(1);
    el.addEventListener(eventName.toLowerCase(), event);
  });
}

function isEvent(val: string) {
  return EVENTS.includes(val as Events);
}

const tagFunctions: {
  [key in HTMLTags]: (
    attributes: Attributes,
    ...children: (Child | Signal<any> | undefined)[]
  ) => HTMLElement;
} = Object.create(null);

HTML_TAGS.forEach((tag) => {
  tagFunctions[tag] = (attributes, ...children): HTMLElement => {
    const element = document.createElement(tag);
    const events: OnEvent = new Map();

    setAttributes(element, attributes, events);
    setChildren(element, ...children);
    setEvents(element, events);

    return element;
  };
});

export const {
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
  wbr,
} = tagFunctions;
