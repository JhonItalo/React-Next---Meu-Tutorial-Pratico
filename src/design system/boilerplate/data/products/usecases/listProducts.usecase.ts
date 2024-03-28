import { IProductModel } from '../model/Products.model';

export default class ProductService {
	async list(): Promise<IProductModel> {
		const response = await fetch('get products');
		const data = response.json();
		return data;
	}
}
