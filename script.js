function convertToIQD(button) {
  const exchangeRate = 1320; // سعر صرف الدولار مقابل الدينار العراقي
  const card = button.closest('.product-card');
  const usdPrice = parseFloat(card.querySelector('.usd-price').textContent);
  const iqdPrice = Math.round(usdPrice * exchangeRate);
  
  card.querySelector('.iqd-price').textContent = iqdPrice.toLocaleString();
}
