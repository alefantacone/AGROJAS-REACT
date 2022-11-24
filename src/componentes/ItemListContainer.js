import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemLists";

import { item } from "../mocks/item.mocks";

const ItemListContainer = () =>{

    const{ category } = UseParams();
    const [products, setProducts] = UseState([]);

    useEffect(() => {
        new Promise((resolve) =>
        setTimeout(() => {
            resolve(item);
        }, 2000)
        ).then((data) => {
        if (category) {
            const categories = data.filter(
            (product) => product.category === category
            );
            setProducts(categories);
        } else {
            setProducts(data);
        }
        });
    }, [category]);

if (products.length === 0) {
    return <p>Loading...</p>
}

    return(
        <div className="h-full">
        <ItemList products={products} /> 
        </div>
    );
};

export default ItemListContainer;