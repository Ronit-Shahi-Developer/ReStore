import { useEffect } from "react";
// import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
// import { Product } from "../../app/models/product";
// import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import ProductList from "./ProductList";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";

export default function Catalog() {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState(true);

  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status } = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();
  useEffect(() => {

    // fetch('http://localhost:5000/api/products')
    // .then(response => response.json())
    // .then(data => setProducts(data));


    // agent.Catalog.list()
    // .then(products => setProducts(products))
    // .catch(error => console.log(error))
    // .finally(() => setLoading(false))

    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch])

  if (status.includes('pending')) return <LoadingComponent message="Loading Products..." />

  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  )
}