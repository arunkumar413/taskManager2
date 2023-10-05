export function sortItems(items) {
  let sortedItems = items.sort((a, b) => {
    const nameA = a.status.toUpperCase(); // ignore upper and lowercase
    const nameB = b.status.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });


  return sortedItems;
}
