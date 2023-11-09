import { useEffect } from "react";
// import { gtag } from "google-analytics-tag-manager";

const CheckoutButton = ({ price }) => {
  useEffect(() => {
    window.dataLayer?.push("event", "CheckoutPrice", {
      price,
      // productId,
      // productName,
    });
    console.log("data is sent");
  }, [price]);

  return <span style={{ display: "none" }}>Checkout</span>;
};

export default CheckoutButton;
