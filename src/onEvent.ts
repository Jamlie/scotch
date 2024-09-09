export function onClick(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document.querySelector(el)?.addEventListener("click", listener, options);
  } else {
    el.addEventListener("click", listener, options);
  }
}

export function onChange(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document.querySelector(el)?.addEventListener("change", listener, options);
  } else {
    el.addEventListener("change", listener, options);
  }
}

export function onInput(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document.querySelector(el)?.addEventListener("input", listener, options);
  } else {
    el.addEventListener("input", listener, options);
  }
}

export function onKeyUp(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document.querySelector(el)?.addEventListener("keyup", listener, options);
  } else {
    el.addEventListener("keyup", listener, options);
  }
}

export function onKeyDown(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document.querySelector(el)?.addEventListener("keydown", listener, options);
  } else {
    el.addEventListener("keydown", listener, options);
  }
}

export function onKeyPress(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document.querySelector(el)?.addEventListener("keypress", listener, options);
  } else {
    el.addEventListener("keypress", listener, options);
  }
}

export function onMouseMove(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document
      .querySelector(el)
      ?.addEventListener("mousemove", listener, options);
  } else {
    el.addEventListener("mousemove", listener, options);
  }
}

export function onMouseOut(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document.querySelector(el)?.addEventListener("mouseout", listener, options);
  } else {
    el.addEventListener("mouseout", listener, options);
  }
}

export function onMouseEnter(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document
      .querySelector(el)
      ?.addEventListener("mouseenter", listener, options);
  } else {
    el.addEventListener("mouseenter", listener, options);
  }
}

export function onMouseLeave(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document
      .querySelector(el)
      ?.addEventListener("mouseleave", listener, options);
  } else {
    el.addEventListener("mouseleave", listener, options);
  }
}

export function onMouseOver(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document
      .querySelector(el)
      ?.addEventListener("mouseover", listener, options);
  } else {
    el.addEventListener("mouseover", listener, options);
  }
}

export function onMouseUp(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document.querySelector(el)?.addEventListener("mouseup", listener, options);
  } else {
    el.addEventListener("mouseup", listener, options);
  }
}

export function onMouseDown(
  el: HTMLElement | string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void {
  if (typeof el === "string") {
    document
      .querySelector(el)
      ?.addEventListener("mousedown", listener, options);
  } else {
    el.addEventListener("mousedown", listener, options);
  }
}
