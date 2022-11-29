import React from "react";
import { useCssHandles } from 'vtex.css-handles'

import './styles.css'

type Props = {
    products: []
}

const ProductGroup = ({products}:Props) => {
    const CSS_HANDLES = [
        "productGroup__general--container",
        "productGroup__container",
        "productGroup__image--container",
        "productGroup__image",
        "productGroup__info--container",
        "productGroup__info--name",
        "productGroup__info--price",
        "productGroup__info--quantity",
    ]
    const handles = useCssHandles(CSS_HANDLES);
    return (
        <div className={handles['productGroup__general--container']}>
            {
                products.map((product:any,index) => {
                    return(
                        <div className={handles['productGroup__container']} key={index}>
                            <div className={handles['productGroup__image--container']}>
                                <img className={handles['productGroup__image']} src={product.imageUrls.at1x}/>
                            </div>
                            <div className={handles['productGroup__info--container']}>
                                <p className={handles['productGroup__info--name']}>{product.name}</p>
                                <p className={handles['productGroup__info--price']}>${product.price / 100}</p>
                                <p className={handles['productGroup__info--quantity']}><span>Cant:</span> {product.quantity}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductGroup