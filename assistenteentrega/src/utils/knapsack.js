function knapsack(deliveries, maxWeight) {
  const n = deliveries.length;
  
  // Cria uma matriz value
  const value = new Array(n + 1).fill(null).map(() => new Array(maxWeight + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const delivery = deliveries[i - 1];
    const weight = delivery.peso;
    
    for (let w = 0; w <= maxWeight; w++) {
      if (weight > w) {
        // Caso não pegar
        value[i][w] = value[i - 1][w];
      } else {
        // Caso pegar o item
        value[i][w] = Math.max(value[i - 1][w], value[i - 1][w - weight] + weight);
      }
    }
  }
  let w = maxWeight;

  // Itens selecionados no knapsack
  const result = [];
  for (let i = n; i > 0 && w > 0; i--) {
    if (value[i][w] !== value[i - 1][w]) {
      result.push(deliveries[i - 1]);
      w -= deliveries[i - 1].peso;
    }
  }
  
  return result;
}

export default knapsack
