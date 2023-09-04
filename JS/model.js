export async function fetchData() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (err) {
  } finally {
  }
}

export async function fetchFilteredData(region) {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
  } finally {
  }
}
