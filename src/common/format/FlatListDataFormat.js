export const multipleRowsFlatListFormat = (dataList, numColumns) => {
  const totalRows = Math.floor(dataList.length / numColumns);
  let totalItemLastRow = dataList.length - totalRows * numColumns;
  console.log(totalRows, totalItemLastRow);
  while (totalItemLastRow !== 0 && totalItemLastRow !== numColumns) {
    dataList.push("empty");
    totalItemLastRow++;
  }
  return dataList;
};
