const searchFilter = (products, query) => {
  const regex = /[^a-z0-9']+/gi;

  let filtered = null;

  filtered = products.filter((product) => {
    const fields = [product.category, product.title, product.description];

    return fields.some((field) => {
      console.log(field);
      let words = field
        .replace(regex, ' ')
        .split(' ')
        .map((word) => {
          return word.toLowerCase();
        });
      // Match both singular and plural versions of search term.
      return words.includes(query) || words.includes(query + 's');
    });
  });

  // If no items are found the array length will be 0. Null should be returned rather than an empty array.
  return filtered;
};

export default searchFilter;
