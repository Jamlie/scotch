type PageInitFn = () => void;

export class Router {
  private initFn: PageInitFn;

  constructor(initFn: PageInitFn) {
    this.initFn = initFn;
    this.initFn();
    this.setupRouting();
    window.addEventListener("popstate", this.handlePopState.bind(this));
  }

  private async handleNavigation(href: string, pushState: boolean = true) {
    try {
      const res = await fetch(href);
      if (!res.ok) {
        throw new Error("Network response error");
      }

      const html = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      document.body.innerHTML = doc.body.innerHTML;
      document.head.innerHTML = doc.head.innerHTML;

      Array.from(document.scripts).forEach((oldScript) => {
        const newScript = document.createElement("script");
        newScript.innerHTML = oldScript.innerHTML;
        document.body.appendChild(newScript);
        oldScript.remove();
      });

      if (pushState) {
        history.pushState({}, "", href);
      }

      this.initFn();
      this.setupRouting();
    } catch (e) {
      console.error("Error fetching the content:", e);
    }
  }

  private setupRouting() {
    const routes = document.getElementsByClassName("route");
    Array.from(routes).forEach((el: Element) => {
      el.addEventListener("click", async (e) => {
        e.preventDefault();
        const href = el.getAttribute("href");
        if (href) {
          await this.handleNavigation(href);
        }
      });
    });
  }

  private async handlePopState() {
    const href = window.location.pathname;
    await this.handleNavigation(href, false);
  }
}

export function routeTo(
  path: string,
  component: HTMLElement,
): HTMLElement | undefined {
  if (window.location.pathname !== path) {
    return undefined;
  }

  return component;
}
