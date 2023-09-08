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
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const data = await response.json();

    return data;
  } catch (err) {
  } finally {
  }
}

export async function fetchCountryData(name) {
  try {
    const data = fetch(`https://restcountries.com/v3.1/name/${name}`);
    const response = (await data).json();
    return response;
  } catch (err) {
  } finally {
  }
}

export async function fetchByCode(code) {
  try {
    const data = fetch(`https://restcountries.com/v3.1/alpha/${code}`);

    const resp = (await data).json();
    return resp;
  } catch (err) {
  } finally {
  }
}
