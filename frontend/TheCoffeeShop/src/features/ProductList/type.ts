export interface IProductCategory {
    cateId: string;
    cateName: string;
    productList: IProduct[];
  }
export interface IProduct {
    name: string;
    price: string;
    image: string;
    cateId: string;
}

export interface ICategory {
    cateId: string;
    cateName: string;
}