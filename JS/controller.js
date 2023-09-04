import { fetchData, fetchFilteredData } from "./model.js";
import { clearInit, resultView } from "./view.js";
const resultSect = document.querySelector(".flagInfo");
const spinContainer = document.querySelector(".spinContainer");
const spin = document.querySelector(".spin");
const arrow = document.querySelector(".arrow");
const dropDown = document.querySelector(".filterSect");
const filterBY = document.querySelector(".filterBY");

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
        capStrings
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
  // e.preventDefault();
  clearInit(resultSect);
  const region = e.target.textContent;
  console.log(spinContainer);
  spinContainer.classList.remove("hidden");
  console.log(spinContainer);
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
        capStrings
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
