async function filter(arr, itemToMatch) {
  return arr.filter((obj) => {
    return Object.keys(itemToMatch).every((prop) => {
      return obj[prop] === itemToMatch[prop];
    });
  });
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

function sortJsonArray(array, property, order) {
  // Given that the ID and Postal properties get cast to strings by the csv-to-json NPM package,
  // we need to parse the string back to an integer and then do the proper comparison for sort,
  // otherwise the sort will try to sort the numbers as strings and the result will not be what is expected.
  if (property === 'id' || property === 'postal') {
    if (order === "asc" || order === "") {
      return array.sort(compareNumbers(property, "asc"));
    } else if (order === "dsc") {
      return array.sort(compareNumbers(property, "dsc"));
    }
  } else {
    if (order === "asc" || order === "") {
      return array.sort(compareStrings(property, "asc"));
    } else if (order === "dsc") {
      return array.sort(compareStrings(property, "dsc"));
    }
  }
}

function compareNumbers(property, order) {
  if (order === "dsc") {
    return (a, b) => {
      const x = (a[property] !== null) ? parseInt(a[property]) : "";
      const y = (b[property] !== null) ? parseInt(b[property]) : "";
      return x < y ? 1 : (x > y ? -1 : 0)
    }
    // If the order is ASC, blank, or not a proper direction (i.e. not ASC/DSC), we will use ASC sort order.
  } else {
    return (a, b) => {
      const x = (a[property] !== null) ? parseInt(a[property]) : "";
      const y = (b[property] !== null) ? parseInt(b[property]) : "";
      return x < y ? -1 : (x > y ? 1 : 0)
    }
  }
}

function compareStrings(property, order) {
  if (order === "dsc") {
    return (a, b) => {
      const x = (a[property] !== null) ? a[property] : "";
      const y = (b[property] !== null) ? b[property] : "";
      return x < y ? 1 : (x > y ? -1 : 0)
    }
    // If the order is ASC, blank, or not a proper direction (i.e. not ASC/DSC), we will use ASC sort order.
  } else {
    return (a, b) => {
      const x = (a[property] !== null) ? a[property] : "";
      const y = (b[property] !== null) ? b[property] : "";
      return x < y ? -1 : (x > y ? 1 : 0)
    }
  }
}

module.exports = {
  filter,
  isEmpty,
  sortJsonArray
};