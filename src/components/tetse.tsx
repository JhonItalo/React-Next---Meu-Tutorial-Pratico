import Link from 'next/link';
import React from 'react'
import { useQuery } from 'react-query';



export const ListProductsWrapper = ({ category }: { category: string }) => {
    return (
        <ListProducts category={category} use={UseListProdcuts} />
    )
}

interface Props {
    category: string
    use: () => useListProductsInterface
}

const ListProducts = ({ category, use }: Props) => {
    const { data, isLoading, error, handleClick } = use()
    return (
        <>
            <h2>{category}</h2>
            <ul>
                {data && data.map((item) => (
                    <li key={item.id} >
                        <Link href="#" target='_blanck'>
                            <h3>{item.name}</h3>
                            <h3>{item.price}</h3>
                            <h3>{item.descript}</h3>
                        </Link>
                        <button onClick={() => handleClick("id.client", item.id)}>like</button>
                    </li>
                ))}
                {isLoading && <p>loading</p>}
                {error && <p>reload</p>}
            </ul >
        </>
    )
}

export default ListProducts



interface ProductModel {
    data: null | {
        id: string
        name: string
        price: string
        descript: string
    }[],
    isLoading: boolean,
    error: boolean
}
interface useListProductsInterface extends ProductModel {
    handleClick: (id_client: string, id_product: string) => Promise<void>
}

const UseListProdcuts = () => {
    const { data, isLoading, error } = useQuery("rep", ProductService.getProducts) as ProductModel

    const handleClick = async (id_client: string, id_product: string) => {
        // return ProductService.AddProductfavorites({ id_client, id_product })
        console.log("click")
        return
    }
    return { data, isLoading, error, handleClick }
}

class ProductService {
    static async getProducts() {
        const response = await fetch(`http://localhost:3000/api`);
        const data = await response.json();
        return data

    }

    static async AddProductfavorites(input: { id_client: string, id_product: string }) {
        const response = await fetch(`http://localhost:3000/api`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
        });
        if (response.ok) {
            return
        }
        return
    }
}

