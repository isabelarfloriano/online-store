export async function getCategories() {
  // Implemente aqui
  try {
    const requestReturn = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const requestObject = await requestReturn.json();
    return requestObject;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  console.log(categoryId, query);
  try {
    if (!categoryId) {
      const requestReturn = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
      const requestObject = await requestReturn.json();
      return requestObject;
    }
    if (typeof categoryId !== 'string' && query === undefined) {
      const requestReturn = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
      const requestObject = await requestReturn.json();
      return requestObject;
    }
    if (typeof categoryId === 'string' && query !== undefined) {
      const requestReturn = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
      const requestObject = await requestReturn.json();
      return requestObject;
    }
  } catch (error) {
    return error;
  }
}
