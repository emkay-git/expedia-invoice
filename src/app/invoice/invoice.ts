import { Product } from '../product';

export interface Invoice {
    products: Array<Product>;
    total: number;
}
