import { Signal } from "./signals";

export const EVENTS = [
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
  "$wheel",
] as const;

export type Events = (typeof EVENTS)[number];

export type CSSProperties = {
  [key in keyof CSSStyleDeclaration]?: string | number;
};

export type Attributes = {
  [key: string]:
    | boolean
    | string
    | EventListenerOrEventListenerObject
    | CSSProperties;
} & {
  style?: CSSProperties;
} & {
  [key in Events]?: EventListenerOrEventListenerObject;
} & HTMLAttributes;

export type Child = string | HTMLElement;

export type OnEvent = Map<Events, EventListenerOrEventListenerObject>;

export const HTML_TAGS = [
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
  "wbr",
] as const;

export type HTMLTags = (typeof HTML_TAGS)[number];

type HTMLDir = "ltr" | "rtl" | "auto";

type HTMLAutocapitalize =
  | "off"
  | "none"
  | "on"
  | "sentences"
  | "words"
  | "characters";

type HTMLTypeTypes =
  | "text"
  | "email"
  | "password"
  | "radio"
  | "tel"
  | "url"
  | "checkbox"
  | "date"
  | "week"
  | "time"
  | "file"
  | "month"
  | "range"
  | "color"
  | "image"
  | "reset"
  | "hidden"
  | "search"
  | "number"
  | "submit"
  | "button"
  | "datetime"
  | "datetime-local";

export interface HTMLAttributes extends AriaAttributes {
  for?: string;
  accessKey?: string;
  class?: string | undefined;
  contenteditable?: boolean | "plaintext-only" | "inherit";
  contextmenu?: string;
  dir?: HTMLDir;
  draggable?: boolean | "false" | "true";
  hidden?: boolean | "hidden" | "until-found";
  name?: string;
  id?: string;
  inert?: boolean;
  lang?: string;
  spellcheck?: boolean;
  tabindex?: number | string;
  title?: string;
  translate?: "yes" | "no";
  about?: string;
  datatype?: string;
  inlist?: any;
  popover?: boolean | "manual" | "auto";
  prefix?: string;
  property?: string;
  resource?: string;
  type?: HTMLTypeTypes;
  vocab?: string;
  autocapitalize?: HTMLAutocapitalize;
  slot?: string;
  color?: string;
  itemprop?: string;
  itemscope?: boolean;
  itemtype?: string;
  itemid?: string;
  itemref?: string;
  part?: string;
  exportparts?: string;
  inputmode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  contentEditable?: Signal<boolean> | boolean | "plaintext-only" | "inherit";
  contextMenu?: string;
  tabIndex?: number | string;
  autoCapitalize?: HTMLAutocapitalize;
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
  itemId?: string;
  itemRef?: string;
  exportParts?: string;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";

  onmouseover?: EventListenerOrEventListenerObject;
  onabort?: EventListenerOrEventListenerObject;
  onanimationend?: EventListenerOrEventListenerObject;
  onanimationiteration?: EventListenerOrEventListenerObject;
  onanimationstart?: EventListenerOrEventListenerObject;
  onauxclick?: EventListenerOrEventListenerObject;
  onbeforeinput?: EventListenerOrEventListenerObject;
  onblur?: EventListenerOrEventListenerObject;
  oncanplay?: EventListenerOrEventListenerObject;
  oncanplaythrough?: EventListenerOrEventListenerObject;
  onchange?: EventListenerOrEventListenerObject;
  onclick?: EventListenerOrEventListenerObject;
  oncontextmenu?: EventListenerOrEventListenerObject;
  ondblclick?: EventListenerOrEventListenerObject;
  ondrag?: EventListenerOrEventListenerObject;
  ondragend?: EventListenerOrEventListenerObject;
  ondragenter?: EventListenerOrEventListenerObject;
  ondragleave?: EventListenerOrEventListenerObject;
  ondragover?: EventListenerOrEventListenerObject;
  ondragstart?: EventListenerOrEventListenerObject;
  ondrop?: EventListenerOrEventListenerObject;
  ondurationchange?: EventListenerOrEventListenerObject;
  onemptied?: EventListenerOrEventListenerObject;
  onended?: EventListenerOrEventListenerObject;
  onerror?: EventListenerOrEventListenerObject;
  onfocus?: EventListenerOrEventListenerObject;
  ongotpointercapture?: EventListenerOrEventListenerObject;
  oninput?: EventListenerOrEventListenerObject;
  oninvalid?: EventListenerOrEventListenerObject;
  onkeydown?: EventListenerOrEventListenerObject;
  onkeypress?: EventListenerOrEventListenerObject;
  onkeyup?: EventListenerOrEventListenerObject;
  onload?: EventListenerOrEventListenerObject;
  onloadeddata?: EventListenerOrEventListenerObject;
  onloadedmetadata?: EventListenerOrEventListenerObject;
  onloadstart?: EventListenerOrEventListenerObject;
  onlostpointercapture?: EventListenerOrEventListenerObject;
  onmousedown?: EventListenerOrEventListenerObject;
  onmouseenter?: EventListenerOrEventListenerObject;
  onmouseleave?: EventListenerOrEventListenerObject;
  onmousemove?: EventListenerOrEventListenerObject;
  onmouseout?: EventListenerOrEventListenerObject;
  onmouseup?: EventListenerOrEventListenerObject;
  onpause?: EventListenerOrEventListenerObject;
  onplay?: EventListenerOrEventListenerObject;
  onplaying?: EventListenerOrEventListenerObject;
  onpointercancel?: EventListenerOrEventListenerObject;
  onpointerdown?: EventListenerOrEventListenerObject;
  onpointerenter?: EventListenerOrEventListenerObject;
  onpointerleave?: EventListenerOrEventListenerObject;
  onpointermove?: EventListenerOrEventListenerObject;
  onpointerout?: EventListenerOrEventListenerObject;
  onpointerover?: EventListenerOrEventListenerObject;
  onpointerup?: EventListenerOrEventListenerObject;
  onprogress?: EventListenerOrEventListenerObject;
  onratechange?: EventListenerOrEventListenerObject;
  onreset?: EventListenerOrEventListenerObject;
  onscroll?: EventListenerOrEventListenerObject;
  onscrollend?: EventListenerOrEventListenerObject;
  onseeked?: EventListenerOrEventListenerObject;
  onseeking?: EventListenerOrEventListenerObject;
  onselect?: EventListenerOrEventListenerObject;
  onstalled?: EventListenerOrEventListenerObject;
  onsubmit?: EventListenerOrEventListenerObject;
  onsuspend?: EventListenerOrEventListenerObject;
  ontimeupdate?: EventListenerOrEventListenerObject;
  ontouchcancel?: EventListenerOrEventListenerObject;
  ontouchend?: EventListenerOrEventListenerObject;
  ontouchmove?: EventListenerOrEventListenerObject;
  ontouchstart?: EventListenerOrEventListenerObject;
  ontransitionstart?: EventListenerOrEventListenerObject;
  ontransitionend?: EventListenerOrEventListenerObject;
  ontransitionrun?: EventListenerOrEventListenerObject;
  ontransitioncancel?: EventListenerOrEventListenerObject;
  onvolumechange?: EventListenerOrEventListenerObject;
  onwaiting?: EventListenerOrEventListenerObject;
  onwheel?: EventListenerOrEventListenerObject;
}

interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  "aria-activedescendant"?: string;
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  "aria-atomic"?: boolean | "false" | "true";
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  "aria-autocomplete"?: "none" | "inline" | "list" | "both";
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  "aria-busy"?: boolean | "false" | "true";
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  "aria-checked"?: boolean | "false" | "mixed" | "true";
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  "aria-colcount"?: number | string;
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  "aria-colindex"?: number | string;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  "aria-colspan"?: number | string;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  "aria-controls"?: string;
  /** Indicates the element that represents the current item within a container or set of related elements. */
  "aria-current"?:
    | boolean
    | "false"
    | "true"
    | "page"
    | "step"
    | "location"
    | "date"
    | "time";
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  "aria-describedby"?: string;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  "aria-details"?: string;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  "aria-disabled"?: boolean | "false" | "true";
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup";
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  "aria-errormessage"?: string;
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  "aria-expanded"?: boolean | "false" | "true";
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  "aria-flowto"?: string;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  "aria-grabbed"?: boolean | "false" | "true";
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  "aria-haspopup"?:
    | boolean
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog";
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  "aria-hidden"?: boolean | "false" | "true";
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling";
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  "aria-keyshortcuts"?: string;
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  "aria-label"?: string;
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  "aria-labelledby"?: string;
  /** Defines the hierarchical level of an element within a structure. */
  "aria-level"?: number | string;
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  "aria-live"?: "off" | "assertive" | "polite";
  /** Indicates whether an element is modal when displayed. */
  "aria-modal"?: boolean | "false" | "true";
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  "aria-multiline"?: boolean | "false" | "true";
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  "aria-multiselectable"?: boolean | "false" | "true";
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  "aria-orientation"?: "horizontal" | "vertical";
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  "aria-owns"?: string;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  "aria-placeholder"?: string;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  "aria-posinset"?: number | string;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  "aria-pressed"?: boolean | "false" | "mixed" | "true";
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  "aria-readonly"?: boolean | "false" | "true";
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  "aria-relevant"?:
    | "additions"
    | "additions removals"
    | "additions text"
    | "all"
    | "removals"
    | "removals additions"
    | "removals text"
    | "text"
    | "text additions"
    | "text removals";
  /** Indicates that user input is required on the element before a form may be submitted. */
  "aria-required"?: boolean | "false" | "true";
  /** Defines a human-readable, author-localized description for the role of an element. */
  "aria-roledescription"?: string;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  "aria-rowcount"?: number | string;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  "aria-rowindex"?: number | string;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  "aria-rowspan"?: number | string;
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  "aria-selected"?: boolean | "false" | "true";
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  "aria-setsize"?: number | string;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  "aria-sort"?: "none" | "ascending" | "descending" | "other";
  /** Defines the maximum allowed value for a range widget. */
  "aria-valuemax"?: number | string;
  /** Defines the minimum allowed value for a range widget. */
  "aria-valuemin"?: number | string;
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  "aria-valuenow"?: number | string;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  "aria-valuetext"?: string;
  role?:
    | "alert"
    | "alertdialog"
    | "application"
    | "article"
    | "banner"
    | "button"
    | "cell"
    | "checkbox"
    | "columnheader"
    | "combobox"
    | "complementary"
    | "contentinfo"
    | "definition"
    | "dialog"
    | "directory"
    | "document"
    | "feed"
    | "figure"
    | "form"
    | "grid"
    | "gridcell"
    | "group"
    | "heading"
    | "img"
    | "link"
    | "list"
    | "listbox"
    | "listitem"
    | "log"
    | "main"
    | "marquee"
    | "math"
    | "menu"
    | "menubar"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "meter"
    | "navigation"
    | "none"
    | "note"
    | "option"
    | "presentation"
    | "progressbar"
    | "radio"
    | "radiogroup"
    | "region"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "scrollbar"
    | "search"
    | "searchbox"
    | "separator"
    | "slider"
    | "spinbutton"
    | "status"
    | "switch"
    | "tab"
    | "table"
    | "tablist"
    | "tabpanel"
    | "term"
    | "textbox"
    | "timer"
    | "toolbar"
    | "tooltip"
    | "tree"
    | "treegrid"
    | "treeitem";
}
