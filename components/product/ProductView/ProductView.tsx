import cn from 'classnames';
import { FC, useState } from 'react';
import s from './ProductView.module.css';
import { Button, Container } from '@components/ui';
import Image from "next/image";
import { Product } from '@common/types/product';
import { ProductSlider, Swatch } from '..';
import { Choices, getVariant } from '../helpers';
import { useUI } from '@components/ui/context';
import useAddItem from '@framework/cart/use-add-item';

interface Props {
  product: Product;
};

const ProductView: FC<Props> = ({ product }) => {
  const [choices, setCHoices] = useState<Choices>({});
  const { openSidebar } = useUI();
  const addItem = useAddItem();

  const variant = getVariant(product, choices);

  const addToCart = () => {
    try {
      const item = {
        productId: `${product.id}`,
        variantId: variant?.id,
        variantOptions: variant?.options
      };

      addItem(item);
      openSidebar();

    } catch(e) {
      console.log(e);
    }
  }
  return (
    <Container>
      <div className={cn(s.root, 'fit', 'mb-5')}>
        <div className={cn(s.productDisplay, 'fit')}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
              $
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image, k) => (
                 <div className={s.imageContainer} key={k}>
                    <Image
                        className={s.img}
                        src={image.url}
                        alt={image.alt}
                        width={1050}
                        height={1050}
                        quality="85"
                    />
                </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            { product.options.map(option => (
              <div className="pb-4" key={product.id}>
                <h2 className="uppercase font-medium">{option.displayName}</h2>
                <div className="flex flex-row py-4">
                  {option.values.map(optValue => {
                    const activeChoice = choices[option.displayName.toLowerCase()];

                    return (
                      <Swatch 
                        key={`${option.id}-${optValue.label}`}
                        label={optValue.label}
                        color={optValue.hexColor}
                        variant={option.displayName}
                        active={optValue.label.toLocaleLowerCase() === activeChoice}
                        onClick={() => {
                          setCHoices({
                            ...choices,
                            [option.displayName.toLowerCase()]: optValue.label.toLowerCase()
                          });
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <Button
              onClick={addToCart}              
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView;