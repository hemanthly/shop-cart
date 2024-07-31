export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Smartphone X",
      price: 599.99,
      description: "Latest model with advanced features",
      image: "https://5.imimg.com/data5/NN/PW/XN/SELLER-8587078/11-500x500.jpg"
    },
    {
      id: 2,
      name: "Laptop Pro",
      price: 1299.99,
      description: "Powerful laptop for professionals",
      image: "https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: 129.99,
      description: "High-quality sound with long battery life",
      image: "https://m.media-amazon.com/images/I/41YSPmLOs9L._AC_.jpg"
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 249.99,
      description: "Stay connected with style",
      image: "https://m.media-amazon.com/images/I/6112gBlymoL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 5,
      name: "4K TV",
      price: 799.99,
      description: "Immersive viewing experience",
      image: "https://m.media-amazon.com/images/I/31aDWE4msZL._AC_UF1000,1000_QL80_.jpg"
    }
  ];