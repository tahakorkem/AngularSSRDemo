export interface Config {
  toolbar: {
    message: string;
    color: string;
  }
  homePage: {
    products: {
      id: string;
      name: string;
    }[];
  };
}
