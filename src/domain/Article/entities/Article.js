export default class Article {
  title;

  summary;

  type;

  linkUrl;

  keywords;

  constructor({
    title = "",
    summary = "",
    type = "",
    linkUrl = "",
    keywords = [],
  }) {
    this.title = title;
    this.summary = summary;
    this.type = type;
    this.linkUrl = linkUrl;
    this.keywords = keywords;
  }
}
