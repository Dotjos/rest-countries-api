import { fetchData } from "./model.js";
import { resultView } from "./view.js";
const resultSect = document.querySelector(".flagInfo");
const spinContainer = document.querySelector(".spinContainer");
const spin = document.querySelector(".spin");
const arrow = document.querySelector(".arrow");
const filterSect = document.querySelector(".filterSect");

filterSect.addEventListener("click", () => {
  console.log("click");
});

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
  filterSect.classList.toggle("opacity-0");
});

document.addEventListener("DOMContentLoaded", () => {
  initPage();
});
