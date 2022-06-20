// Компонент Paypal на странице Checkout
import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";


const PaypalCheckoutButton = (props) => {
    const { product } = props;
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const handleApprove = (orderId) => {
        setPaidFor(true);
    }
    if (paidFor) {
        alert("Спасибо за покупку!")
    }
    if (error) {
        alert(error)
    }
    return <PayPalButtons
        // style={{
        //     color: "black",
        //     layout: "horizontal",
        //     height: 40,
        //     width: 60,
        //     tagline: false,
        //     shape: "rect"
        // }}
        onClick={(data, actions) => {
            const hasAlreadyBoughtProduct = false;

            if (hasAlreadyBoughtProduct) {
                setError("Вы уже приобрели товар!")
                return actions.reject();
            } else {
                return actions.resolve();
            }


        }}

        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        description: product.description,
                        amount: {
                            value: product.price
                        },
                        payer_info: {
                            email: product.email,
                            first_name: product.name,
                          },
                        shipping_address: {
                            line1: product.adress,
                            phone: product.phone
                          },
                    }
                ],
                redirect_urls: {
                    return_url: "/cart",
                    cancel_url: "/cart"
                  }
            })
        }}
        onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            console.log("order", order);
            handleApprove(data.orderID);
        }}
        onCancel={() => {
            //redirect
        }}
        onError={(err) => {
            setError(err);
            console.log("Paypal checkout error", err)
        }}
    />
};

export default PaypalCheckoutButton;