export async function fetchData() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    if (!response.ok) {
      throw new Error(`Kindly check your network and try again.`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
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
    if (!response.ok) {
      throw new Error("Kindly check your network and try again pls");
    }
    return data;
  } catch (err) {
    throw err;
  }
}

export async function fetchCountryData(name) {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

    if (response.status === 404) {
      throw new Error("Invalid country name.");
    }

    if (!response.ok) {
      throw new Error("Kindly check your network and try again pls");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

export async function fetchByCode(code) {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  try {
    const resp = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    if (!resp.ok) {
      throw new Error("Kindly check your network and try again pls");
    }
    const data = await resp.json();
    return data;
  } catch (err) {
    throw err;
  }
}
