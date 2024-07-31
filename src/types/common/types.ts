export interface Category {
    id: string;
    name: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: string;
}