export interface Product {
    productId : number;
    name : string;
    price : number;
    offerPrice : number,
    productImage: string;
    searchKeywords: string;
    description: string;
    category: string;
    categoryId : number;
    brand : string;
    color : string;
    size : number;
    ratingAvg : number;
    ratingCount : number;
    stock : number;
    dateCreated: string;
    isAvailable: boolean;
}