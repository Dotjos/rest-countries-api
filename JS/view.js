export function resultView(rendSect, flag, name, population, region, capital) {
  const countryDiv = document.createElement("div");
  const flagDiv = document.createElement("div");
  const infoDiv = document.createElement("div");
  countryDiv.classList.add(
    "rounded-md",
    "overflow-hidden",
    "bg-white",
    "shadow-md",
    "mb-8",
    "lg:w-3/4",
    "border"
  );
  infoDiv.classList.add("p-8");
  const flagImg = document.createElement("img");
  flagImg.src = flag;
  const nameH1 = document.createElement("h1");
  nameH1.textContent = name;
  nameH1.classList.add("font-bold", "pb-4", "text-xl");
  const populationH1 = document.createElement("h1");
  populationH1.textContent = `Population: ${population}`;
  const regionH1 = document.createElement("h1");
  regionH1.textContent = `Region: ${region}`;
  const capitalH1 = document.createElement("h1");
  capitalH1.textContent = `Capital: ${capital}`;
  infoDiv.appendChild(nameH1);
  infoDiv.appendChild(populationH1);
  infoDiv.appendChild(regionH1);
  infoDiv.appendChild(capitalH1);
  flagDiv.appendChild(flagImg);
  countryDiv.appendChild(flagDiv);
  countryDiv.appendChild(infoDiv);
  rendSect.appendChild(countryDiv);
}

export function clearInit(parentSect) {
  while (parentSect.firstChild) {
    parentSect.removeChild(parentSect.firstChild);
  }
}