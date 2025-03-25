export function addToCart(cart, setCart, plantName, plantPrice) {
  const plantAdded = cart.find((article) => article.name === plantName);

  if (!plantAdded) {
    setCart(cart.concat([{ name: plantName, price: plantPrice, amount: 1 }]));
    return;
  }

  const newCart = cart.map((article) =>
    article.name === plantName
      ? {
          name: plantName,
          price: plantAdded.price,
          amount: plantAdded.amount + 1,
        }
      : article
  );
  setCart(newCart);
}

export function delFromCart(cart, setCart, plantName) {
  const plantDel = cart.find((article) => article.name === plantName);

  if (!plantDel) {
    throw new Error("Plant not found in cart");
  }

  if (plantDel.amount === 1) {
    const cartWithoutPlantAdded = cart.filter(
      (article) => article.name !== plantName
    );
    setCart(cartWithoutPlantAdded);
    return;
  }

  const newCart = cart.map((article) =>
    article.name === plantName
      ? {
          name: plantName,
          price: plantDel.price,
          amount: plantDel.amount - 1,
        }
      : article
  );
  setCart(newCart);
}
