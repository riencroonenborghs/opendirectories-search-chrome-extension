export class QueryType {
  label: string;
  extensions: Array<string>;
  isDefault: boolean;

  constructor(label: string, extensions: Array<string>, isDefault: boolean = true) {
    this.label = label;
    this.extensions = extensions;
    this.isDefault = isDefault;
  }
}
