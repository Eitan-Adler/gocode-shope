const priceSet = (price) => {
  return {
    regPrice: `$${price.toFixed(2)}`,
    salePrice: `$${(price * 0.8).toFixed(2)}`,
  };
};

export default priceSet;
