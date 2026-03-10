function pizzaRewards(customers, minOrders, minPrice) {
  const result =[];
  for (let customer in customers){
     const largeOrder = customers[customer].filter(order=>order>=minPrice)
     if (largeOrder.length >= minOrders) result.push(customer)
  }
  return result
}