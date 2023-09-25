import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/products?limit=10&offset=0";

const useGetProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const response = await axios(API);
        setProducts(response.data);
    }, []);
    return products;
};

export default useGetProducts;
