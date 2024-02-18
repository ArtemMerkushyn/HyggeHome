export default function sortData({ option, value }) {
  if (option === 'Expensive') {
    const sortedData = [...value].sort((a, b) => b.price - a.price);
    return sortedData;
  } else if (option === 'Cheapest') {
    const sortedData = [...value].sort((a, b) => a.price - b.price);
    return sortedData;
  } else {
    return value;
  }
}
