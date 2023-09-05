export function resultView(
  rendSect,
  flag,
  name,
  population,
  region,
  capital,
  functionClick
) {
  const countryDiv = document.createElement("div");
  const flagDiv = document.createElement("div");
  const infoDiv = document.createElement("div");
  countryDiv.classList.add(
    "rounded-md",
    "overflow-hidden",
    "bg-white",
    "shadow-md",
    "mb-8",
    "justify-center",
    "md:mx-4",
    "lg:text-xl"
  );
  countryDiv.setAttribute("dataName", name);
  countryDiv.addEventListener("click", functionClick);
  infoDiv.classList.add("p-8");
  const flagImg = document.createElement("img");
  flagImg.src = flag;
  const nameH1 = document.createElement("h1");
  nameH1.textContent = name;
  nameH1.classList.add("font-bold", "pb-4", "text-xl");
  const populationH1 = document.createElement("h1");
  populationH1.innerHTML =
    '<span class="font-bold">Population:</span> ' + population;
  const regionH1 = document.createElement("h1");
  regionH1.innerHTML = '<span class="font-bold">Region:</span> ' + region;
  const capitalH1 = document.createElement("h1");
  capitalH1.innerHTML = '<span class="font-bold">Capital:</span> ' + capital;
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

export function onClickView(
  rendSect,
  flag,
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  TLDomain,
  curr,
  lang,
  borderCoun
) {
  const flagDiv = document.createElement("Div");
  const infoDiv = document.createElement("Div");
  const lowerInfoDiv = document.createElement("Div");
  const footerDiv = document.createElement("Div");
  const flagImg = document.createElement("img");
  flagImg.src = flag;
  const nameH1 = document.createElement("h1");
  nameH1.textContent = name;
  const natNameH1 = document.createElement("h1");
  natNameH1.innerHTML =
    '<span class="font-bold">Native Name:</span> ' + nativeName;
  const popH1 = document.createElement("h1");
  popH1.innerHTML = '<span class="font-bold">Population:</span> ' + population;
  const regH1 = document.createElement("h1");
  regH1.innerHTML = '<span class="font-bold">Region:</span> ' + region;
  const subregH1 = document.createElement("h1");
  subregH1.innerHTML =
    '<span class="font-bold">Sub region:</span> ' + subRegion;
  const capH1 = document.createElement("h1");
  capH1.innerHTML = '<span class="font-bold">Capital:</span> ' + capital;
  const TLDH1 = document.createElement("h1");
  TLDH1.innerHTML =
    '<span class="font-bold">Top level Domain:</span> ' + TLDomain;
  const currH1 = document.createElement("h1");
  currH1.innerHTML = '<span class="font-bold">Currencies:</span> ' + curr;
  const langH1 = document.createElement("h1");
  langH1.innerHTML = '<span class="font-bold">Languages:</span> ' + lang;
  const borderCounH1 = document.createElement("h1");
  borderCounH1.innerHTML =
    '<span class="font-bold">Border Countries:</span> ' + borderCoun;
  flagDiv.appendChild(flagImg);
  infoDiv.appendChild(nameH1);
  infoDiv.appendChild(natNameH1);
  infoDiv.appendChild(popH1);
  infoDiv.appendChild(regH1);
  infoDiv.appendChild(subregH1);
  infoDiv.appendChild(capH1);
  lowerInfoDiv.appendChild(TLDH1);
  lowerInfoDiv.appendChild(currH1);
  lowerInfoDiv.appendChild(langH1);
  footerDiv.appendChild(borderCounH1);
  rendSect.appendChild(flagDiv);
  rendSect.appendChild(infoDiv);
  rendSect.appendChild(lowerInfoDiv);
  rendSect.appendChild(footerDiv);
}

export function borderCountView(borderVal) {
  const bordDiv = document.createElement("Div");
  const bordH1 = document.createElement("h1");
  bordH1.textContent = borderVal;
  bordDiv.classList.add("p-2", "shadow-md");
  bordDiv.appendChild(bordH1);
}
