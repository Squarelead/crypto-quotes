export default async function GetTickerInfo() {
  const url = `https://poloniex.com/public?command=returnTicker`;
  let result = await fetch(url, {
    method: "GET",
    dataType: "json",
  });
  if (result.status >= 200 && result.status <= 299) {
    result = await result.json();
    if (result.hasOwnProperty("error")) {
      console.log("Error: ", result.error);
      return "error";
    }
    return result;
  } else {
    console.log(result.status, result.statusText);
    return "error";
  }
}
