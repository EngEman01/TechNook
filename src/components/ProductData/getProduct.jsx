import { useEffect, useState } from "react";

const UseFetch = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("http://localhost:7001/products");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData();
    }, []);

    return products;
};

export default UseFetch;
