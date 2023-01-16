const getData = async function (url) {
  const promise = await fetch(url);
  const response = await promise.json();
  return response;
};
export default getData;
