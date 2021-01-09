function formatPrice(price) {
  // 逻辑或，如果前者为真就返回前面的值，如果前者为假，返回后面的值

  price = Number(price) || 0;
  return `￥${price.toFixed(2)}`;
}