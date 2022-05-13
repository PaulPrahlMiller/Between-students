// Source - https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
// Generator function to create an array of numbers in a defined range
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export default range;
