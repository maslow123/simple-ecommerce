import type { InferGetStaticPropsType } from "next";
import { getAllProducts } from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60 // 4 hours
  };
}
export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {
    
    return (
      <>
        <Grid>
          { products.slice(0, 3).map((product, i) => (
            <ProductCard
              key={i}
              product={product}
            />
          ))}
        </Grid>
        <Hero 
          headline="Cookies, ice cream, and muffin"
          description="Pudding caramels tootsie roll sweet jelly-o danish. Biscuit biscuit toffee sweet roll jelly-o chocolate cake toffee marshmallow jujubes. Oat cake halvah chocolate lemon drops sweet ice cream powder gummies. Toffee topping cotton candy cheesecake carrot cake jujubes carrot cake tootsie roll powder. Oat cake candy fruitcake gummies gummies shortbread pie. Candy canes jelly-o oat cake powder gingerbread jelly beans. Caramels shortbread jelly beans powder chupa chups ice cream."
        />
        <Marquee>
          { products.slice(0, 3).map((product, i) => (
            <ProductCard
              variant="slim"
              key={i}
              product={product}
            />
          ))}
        </Marquee>
        <Grid layout="B">
        { products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={i}
            product={product}
          />
        ))}
        </Grid>
        <Marquee variant="secondary">
          { products.slice(0, 3).map((product, i) => (
            <ProductCard
              variant="slim"
              key={i}
              product={product}
            />
          ))}
        </Marquee>
      </>
    )
  }
  
  Home.Layout = Layout;