export const selectMostBoughtPizzas = (reduxState) => {
  if (reduxState.pizzas.allPizzas.length === 0) {
    return null;
  }

  return reduxState.pizzas.allPizzas.reduce((mostBought, nextPizza) => {
    return mostBought.bought >= nextPizza.bought ? mostBought : nextPizza;
  });
};

export const selectNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.allPizzas.length;
};

export const selectListOfPizzas = (reduxState) => {
  const sortedPizzas = [...reduxState.pizzas.allPizzas].sort((a, b) => {
    return b.bought - a.bought;
  });
  return sortedPizzas;
};
