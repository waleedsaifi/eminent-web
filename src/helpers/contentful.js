import {createClient} from "contentful";

const config = {
  space: "1cn68t2wnpi8",
  accessToken: "V-x4N7tTEt44WpLjhL5nDY4RSCxbafNr7ZBCVQjU70w"
};


export default class Contentful  {
  client = createClient(config);
  static _instance = new Contentful();

  constructor() {
    if (Contentful._instance) {
      throw new Error("Instantiation failed");
    }
  }
  static getInstance() {
    return Contentful._instance
  }
}