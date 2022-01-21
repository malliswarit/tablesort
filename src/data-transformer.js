export function updatedData(data) {
  var myData = Object.keys(data).map((key) => {
    return data[key];
  });
  return myData;
}
