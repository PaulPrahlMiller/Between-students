const formatDate = (date) => {
  const pattern = /(?:(?!T).)*/;
  const formattedDate = date.match(pattern);
  return formattedDate;
};

export default formatDate;
