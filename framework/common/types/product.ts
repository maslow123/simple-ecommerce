export interface ProductImage {
    url: string;
    alt?: string; // optional
};

export interface ProductPrice {
    value: number;
    currencyCode: "USD" | "EUR" | string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    slug: string;
    path: string;
    images: ProductImage[];
    price: ProductPrice
};