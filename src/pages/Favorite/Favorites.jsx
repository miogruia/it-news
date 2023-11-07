import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import Container from "react-bootstrap/Container";
import { FavoritesContext } from "../../store/Favorites/context";
import NewsCardList from "../../components/NewsCard/NewsCardList";

const Favorites = () => {
  const { favoritesState: { products } } = useContext(FavoritesContext);

  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">Știrile tale favorite</h1>
        {
          products.length === 0 
            ? <p>Momentan nu ai nicio știre favorită.</p>
            : <NewsCardList newsList={products} />
        }
      </Container>
    </Layout>
  );
};

export default Favorites;