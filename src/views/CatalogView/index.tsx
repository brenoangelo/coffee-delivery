import { Container } from '../../styles/common';
import { ProductCard } from '../../components/ProductCard';
import { CoffeeList, StyledCatalog } from './styles';
import { useCatalogViewController } from './useCatalogViewController';

export function CatalogView() {
  const { products, productsLoading, addNewProduct } =
    useCatalogViewController();

  return (
    <StyledCatalog>
      <Container>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          {productsLoading ? (
            <>carregando...</>
          ) : (
            products.map((coffee) => (
              <ProductCard
                key={coffee.id}
                coffee={coffee}
                addNewProduct={addNewProduct}
              />
            ))
          )}
        </CoffeeList>
      </Container>
    </StyledCatalog>
  );
}
