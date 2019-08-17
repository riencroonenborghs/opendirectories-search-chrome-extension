import { QueryBuilder } from "./query-builder";
import { Blacklist } from "./blacklist";
import { QueryType } from "./query-type";

export class Query {
  query: string = "";
  queryType: QueryType;
  alternative: boolean = false;
  quoted: boolean = true;
  incognito: boolean = true;

  humanReadable: string = "";
  url: string = "";
  
  constructor() {}

  clear() {
    this.query = "";
    this.queryType = null;
    this.humanReadable = "";
  }

  build(blacklist: Array<Blacklist>) {
    let queryBuilder: QueryBuilder = new QueryBuilder(
      this.query,
      this.queryType,
      this.alternative,
      this.quoted,
      blacklist
    );

    this.humanReadable = queryBuilder.humanReadable();
    this.url = queryBuilder.url();
  }

  fromData(data: any) {
    this.query = data.query;
    this.queryType = new QueryType(data.queryType.label, data.queryType.extensions);
    this.alternative = data.alternative;
    this.quoted = data.quoted;
    this.incognito = data.incognito;
  }

  toHash() {
    return {
      query: this.query,
      queryType: {label: this.queryType.label, extensions: this.queryType.extensions},
      alternative: this.alternative,
      quoted: this.quoted,
      incognito: this.incognito
    };
  }
}
