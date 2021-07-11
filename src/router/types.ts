export class Route {
  path: string;
  breadcrumbName?: string;
  children?: Route[];

  constructor(path: string, breadcrumbName: string, children: Route[]) {
    this.path = path;
    this.breadcrumbName = breadcrumbName;
    this.children = children;
  }
}
