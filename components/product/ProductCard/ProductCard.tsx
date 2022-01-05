import { Product } from "@common/types/product";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from './ProductCard.module.css';

interface Props {
    product?: Product;
};

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product }) => {
    return (
        <Link href={`/products/${product.slug}`}>
            <a className={s.root}>
                <div className={s.productBg}>

                </div>
                <div className={s.pruductTag}>
                    <h3 className={s.productTitle}>
                        <span>{product?.name}</span>
                    </h3>
                    <span className={s.productPrice}>
                        {product.price.value} {product.price.currencyCode}
                    </span>
                </div>
                { product.images && (
                    <Image 
                        className={s.productImage}
                        alt={product.name ?? 'Product image'}
                        src={product.images[0].url ?? placeholderImage}
                        height={540}
                        width={540}
                        quality={85}
                        layout="responsive"
                    />
                )}
            </a>
        </Link>
    )
};

export default ProductCard;