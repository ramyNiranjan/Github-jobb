import formatDistance from "date-fns/formatDistance";

export const convertToReadableDate = (data) => {
  return formatDistance(new Date(data), Date.now(), {
    addSuffix: true,
  });
};
export const removeHTMLTages = (string) => {
  return string && string.replace(/<(.|\n)*?>/g, "");
};

export const manipulateUserValue = (searchValue) => {
  return searchValue === null
    ? searchValue
    : searchValue.trim().replace(" ", "+").toLowerCase();
};

export const findResult = (arr, search) => {
  return arr.reduce((acc, curr) => {
    if (curr[search]) {
      acc = curr[search];
    }
    return acc;
  }, []);
};
