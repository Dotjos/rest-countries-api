import { fetchData } from "./model.js";
import { resultView } from "./view.js";
const resultSect = document.querySelector(".flagInfo");
const spinContainer = document.querySelector(".spinContainer");
const spin = document.querySelector(".spin");

async function initPage() {
  try {
    const results = await fetchData();
    results.forEach((result) => {
      const { flags, name, population, region, capital: capitals } = result;
      const { svg: flagSvg } = flags;
      const { common: commoName } = name;
      const capStrings = capitals.toString();
      resultView(
        resultSect,
        flagSvg,
        commoName,
        population,
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

document.addEventListener("DOMContentLoaded", () => {
  initPage();
});
