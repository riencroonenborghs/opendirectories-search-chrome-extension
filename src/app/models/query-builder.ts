import { Blacklist } from "./blacklist";
import { QueryType } from "./query-type";

export class QueryBuilder {
  private server: string = "https://www.google.com/";
  private path: string = "search"

  private query: string;
  private queryType: QueryType;
  private alternative: boolean;
  private quoted: boolean;

  private blacklist: Array<Blacklist>;

  constructor(query: string, queryType: QueryType, alternative: boolean, quoted: boolean, blacklist: Array<Blacklist>) {
    this.query = query;
    this.queryType = queryType;
    this.alternative = alternative;
    this.quoted = quoted;
    this.blacklist = blacklist;
  }

  url() {
    return `${this.server}${this.path}?q=${encodeURIComponent(this.buildQuery())}`;
  }

  humanReadable() {
    return this.buildQuery();
  }

  private buildQuery() {
    let queryString: string = "";
    
    if(this.alternative) {
      queryString = "\"parent directory\" ";
    } else {
      queryString = "intitle:\"index.of\" ";
    }

    if(this.quoted) {
      queryString += ` "${this.query}" `;
    } else {
      queryString += this.query;
    }

    queryString += " -html -htm -php -asp -jsp ";

    this.blacklist.forEach((item) => {
      queryString += ` -${item.url} `
    });

    return ` ${queryString}${this.buildExtensions()} `;
  }

  private buildExtensions() {
    if(this.queryType.extensions.length == 0) { return ""; }
    else { 
      return ` (${this.queryType.extensions.join("|")}) `;
    }
  }
}
