const searchFilter = (products, query) => {
  const regex = /[^a-z0-9']+/gi;

  let filtered = null;
  filtered = products.filter((product) => {
    const fields = [product.title, product.category, product.description];

    return fields.some((field) => {
      let words = field
        .replace(regex, ' ')
        .split(' ')
        .map((word) => {
          return word.toLowerCase();
        });
      return words.includes(query);
    });
  });

  // If no items are found the array length will be 0. Null should be returned rather than an empty array.
  return filtered;
};

export default searchFilter;
