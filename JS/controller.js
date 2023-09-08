import {
  fetchData,
  fetchFilteredData,
  fetchCountryData,
  fetchByCode,
} from "./model.js";
import { clearInit, resultView, onClickView } from "./view.js";
const resultSect = document.querySelector(".flagInfo");
const spinContainer = document.querySelector(".spinContainer");
const spin = document.querySelector(".spin");
const arrow = document.querySelector(".arrow");
const dropDown = document.querySelector(".filterSect");
const filterBY = document.querySelector(".filterBY");
const searchImg = document.querySelector(".searchImg");
const searchInput = document.querySelector(".searchInput");
const fullInfo = document.querySelector(".fullInfo");
const arrowImg = document.querySelector(".arrowImg");
const searchBar = document.querySelector(".searchBar");

searchBar.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    // Prevent the default Enter key behavior (e.g., form submission)
    e.preventDefault();
    await searchFunc();
  }
});

async function searchFunc() {
  const searchVal = searchInput.value;
  clearInit(resultSect);
  try {
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
}

async function initPage() {
  clearInit(resultSect);

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

searchImg.addEventListener("click", async () => {
  console.log("lol");
  await searchFunc();
});

async function detailOnClick(e) {
  clearInit(resultSect);
  e.preventDefault();
  const dataName = e.currentTarget.getAttribute("dataNAme");
  try {
    const clickResult = await fetchCountryData(dataName);

    clickResult.forEach((result) => {
      console.log(result);
      const {
        flags,
        name,
        population,
        region,
        subregion,
        capital: capitals,
        tld,
        currencies,
        languages,
        borders,
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
        borders,
        borderDetailOnClick
      );
    });
  } catch (err) {
  } finally {
  }
}

async function borderDetailOnClick(e) {
  e.preventDefault();
  // clearInit(resultSect);
  const bordCode = e.currentTarget.textContent;
  try {
    const clickResult = await fetchByCode(bordCode);
    clearInit(resultSect);
    clickResult.forEach((result) => {
      const {
        flags,
        name,
        population,
        region,
        subregion,
        capital: capitals,
        tld,
        currencies,
        languages,
        borders,
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
      onClickView(
        fullInfo,
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
        borders,
        borderDetailOnClick
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

arrowImg.addEventListener("click", (e) => {
  e.preventDefault();
  arrow.classList.toggle("rotate-180");
  if (arrow.classList.contains("rotate-180")) {
    dropDown.classList.remove("opacity-0");
    dropDown.classList.remove("hidden");
  } else {
    dropDown.classList.add("opacity-0");
    dropDown.classList.add("hidden");
  }
});

filterBY.addEventListener("click", async (e) => {
  e.preventDefault();
  clearInit(resultSect);
  arrow.classList.remove("rotate-180");
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
