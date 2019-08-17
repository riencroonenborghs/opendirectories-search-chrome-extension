export class Blacklist {
  url: string;
  isDefault: boolean;

  constructor(url: string, isDefault: boolean = true) {
    this.url = url;
    this.isDefault = isDefault;
  }
}
