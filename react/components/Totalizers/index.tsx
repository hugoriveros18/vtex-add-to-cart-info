import React from "react";

import { useCssHandles } from 'vtex.css-handles'

import './styles.css'


type Props = {
    products: []
}

const Totalizers = ({products}:Props) => {
    React.useEffect(() => {
        let fullAmount = 0;
        let fullQuantity = 0;
        products.forEach((product:any) => {
            fullAmount += product.sellingPrice * product.quantity;
            fullQuantity += product.quantity;
        })
        setTotalAmount(fullAmount/100);
        setTotalQuantity(fullQuantity);
    },[products])

    const [totalAmount,setTotalAmount] = React.useState<number>(0);
    const [totalQuantity,setTotalQuantity] = React.useState<number>(0);
    const CSS_HANDLES = [
        "totalizers__container",
        "totalizers__quantity",
        "totalizers__amount",
        
    ]
    const handles = useCssHandles(CSS_HANDLES);

    return(
        <div className={handles['totalizers__container']}>
            <p className={handles['totalizers__quantity']}>Tienes <span>{totalQuantity}</span> items en tu compra</p>
            <p className={handles['totalizers__amount']}><span>Total:</span> ${totalAmount}</p>
        </div>
    )
}

export default Totalizers