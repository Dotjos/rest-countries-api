import { fetchData, fetchFilteredData, fetchCountryData } from "./model.js";
import { clearInit, resultView, onClickView } from "./view.js";
const resultSect = document.querySelector(".flagInfo");
const spinContainer = document.querySelector(".spinContainer");
const spin = document.querySelector(".spin");
const arrow = document.querySelector(".arrow");
const dropDown = document.querySelector(".filterSect");
const filterBY = document.querySelector(".filterBY");
const searchImg = document.querySelector(".searchImg");
const searchInput = document.querySelector(".searchInput");

searchImg.addEventListener("click", async () => {
  const searchVal = searchInput.value;
  console.log(searchVal);
  try {
    clearInit(resultSect);
    const results = await fetchCountryData(searchVal);
    results.forEach((result) => {
      const { flags, name, population, region, capital: capitals } = result;
      const { svg: flagSvg } = flags;
      const { common: commoName } = name;
      const formattedPopulation = population.toLocaleString();
      const capStrings = capitals.toString();
      resultView(
        resultSect,
        flagSvg,
        commoName,
        formattedPopulation,
        region,
        capStrings,
        detailOnClick
      );
    });
    console.log(dat);
  } catch (err) {
  } finally {
  }
});

async function detailOnClick(e) {
  const dataName = e.currentTarget.getAttribute("dataNAme");

  try {
    const clickResult = await fetchCountryData(dataName);
    clearInit(resultSect);
    clickResult.forEach((result) => {
      console.log(result);
      const {
        flags,
        borders,
        name,
        population,
        region,
        subregion,
        capital: capitals,
        tld,
        currencies,
        languages,
      } = result;
      const { svg: flagSvg } = flags;
      const { common } = name;
      const { nativeName: nativeObj } = name;
      const natName = getNativeName(nativeObj).join(",");
      const popFormatted = population.toLocaleString();
      const capStrings = capitals.toString();
      const tldString = tld.toString();
      const currName = getNameFromCurrency(currencies);
      const lang = getLang(languages).join(",");
      const bordString = borders.join(",");

      onClickView(
        resultSect,
        flagSvg,
        common,
        natName,
        popFormatted,
        region,
        subregion,
        capStrings,
        tldString,
        currName,
        lang,
        bordString
      );
    });
  } catch (err) {
  } finally {
  }
}

function getNameFromCurrency(currObj) {
  function findName(obj) {
    // Check if the object has a 'name' property
    if (obj && obj.name) {
      return obj.name;
    }
  }
  for (const key in currObj) {
    if (typeof currObj[key] === "object") {
      const result = findName(currObj[key]);
      if (result) {
        return result; // Return the first 'name' property found
      }
    }
  }
  return "Name not found";
}

function getLang(langObj) {
  return Object.values(langObj);
}

function getNativeName(nativeObj) {
  function findComName(obj) {
    if (obj && obj.common) {
      return obj.common;
    }
  }

  const commNames = [];
  function getAllCommoNames(nativeObj) {
    for (const key in nativeObj) {
      if (typeof nativeObj[key] === "object") {
        const result = findComName(nativeObj[key]);
        if (result) {
          commNames.push(result);
        }
      }
    }
  }
  getAllCommoNames(nativeObj);
  if (commNames.length > 0) {
    return commNames;
  } else {
    ("Native name not found");
  }
}

async function initPage() {
  try {
    const results = await fetchData();
    results.forEach((result) => {
      const { flags, name, population, region, capital: capitals } = result;
      const { svg: flagSvg } = flags;
      const { common: commoName } = name;
      const formattedPopulation = population.toLocaleString();
      const capStrings = capitals.toString();
      resultView(
        resultSect,
        flagSvg,
        commoName,
        formattedPopulation,
        region,
        capStrings,
        detailOnClick
      );
    });
  } catch (err) {
    console.err;
  } finally {
    spinContainer.classList.add("hidden");
  }
}

arrow.addEventListener("click", () => {
  arrow.classList.toggle("rotate-180");
  dropDown.classList.toggle("opacity-0");
});

filterBY.addEventListener("click", async (e) => {
  e.preventDefault();
  clearInit(resultSect);
  const region = e.target.textContent;
  spinContainer.classList.remove("hidden");
  try {
    const results = await fetchFilteredData(region);
    results.forEach((result) => {
      const { flags, name, population, region, capital: capitals } = result;
      const { svg: flagSvg } = flags;
      const { common: commoName } = name;
      const formattedPopulation = population.toLocaleString();
      let capStrings;
      capitals ? (capStrings = capitals.toString()) : "";
      resultView(
        resultSect,
        flagSvg,
        commoName,
        formattedPopulation,
        region,
        capStrings,
        detailOnClick
      );
    });
  } catch (err) {
  } finally {
    spinContainer.classList.add("hidden");
    dropDown.classList.add("opacity-0");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  initPage();
});
