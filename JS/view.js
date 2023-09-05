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
  lang
) {
  const flagDiv = document.createElement("Div");
  // flagDiv.classList.add("border");
  const upperInfoDiv = document.createElement("Div");
  const totalInfoDiv = document.createElement("Div");
  totalInfoDiv.classList.add("lg:flex");
  const lowerInfoDiv = document.createElement("Div");
  const infoDiv = document.createElement("Div");
  infoDiv.classList.add("md:flex", "justify-between");
  const backDiv = document.createElement("Div");
  const backH1 = document.createElement("h1");
  backH1.textContent = "Back";
  const backImg = document.createElement("img");
  backImg.classList.add("w-6");
  backImg.src = "./Assets/back-black.svg";
  backDiv.appendChild(backImg);
  backDiv.appendChild(backH1);
  backDiv.classList.add(
    "px-3",
    "py-2",
    "shadow-md",
    "w-1/3",
    "lg:w-40",
    "text-center",
    "text-lg",
    "flex",
    "justify-around",
    "mt-4",
    "mb-7",
    "bg-white"
  );

  const flagImg = document.createElement("img");
  flagImg.src = flag;
  flagImg.classList.add("h-48", "ml-auto", "mr-auto");
  const nameH1 = document.createElement("h1");
  nameH1.classList.add("text-lg", "font-bold");
  nameH1.textContent = name;
  const natNameH1 = document.createElement("h1");
  natNameH1.innerHTML =
    '<span class="font-medium">Native Name(s):</span> ' + nativeName;
  natNameH1.classList.add("mt-4");
  const popH1 = document.createElement("h1");
  popH1.innerHTML =
    '<span class="font-medium">Population:</span> ' + population;
  const regH1 = document.createElement("h1");
  regH1.innerHTML = '<span class="font-medium">Region:</span> ' + region;
  const subregH1 = document.createElement("h1");
  subregH1.innerHTML =
    '<span class="font-medium">Sub region:</span> ' + subRegion;
  const capH1 = document.createElement("h1");
  capH1.innerHTML = '<span class="font-medium">Capital:</span> ' + capital;
  const TLDH1 = document.createElement("h1");
  TLDH1.innerHTML =
    '<span class="font-medium">Top level Domain:</span> ' + TLDomain;
  const currH1 = document.createElement("h1");
  currH1.innerHTML = '<span class="font-medium">Currencies:</span> ' + curr;
  const langH1 = document.createElement("h1");
  langH1.innerHTML = '<span class="font-medium">Languages:</span> ' + lang;
  flagDiv.appendChild(flagImg);
  upperInfoDiv.classList.add("my-7");
  lowerInfoDiv.classList.add("mb-7");
  upperInfoDiv.appendChild(nameH1);
  upperInfoDiv.appendChild(natNameH1);
  upperInfoDiv.appendChild(popH1);
  upperInfoDiv.appendChild(regH1);
  upperInfoDiv.appendChild(subregH1);
  upperInfoDiv.appendChild(capH1);
  lowerInfoDiv.appendChild(TLDH1);
  lowerInfoDiv.appendChild(currH1);
  lowerInfoDiv.appendChild(langH1);
  infoDiv.appendChild(upperInfoDiv);
  infoDiv.appendChild(lowerInfoDiv);
  totalInfoDiv.appendChild(flagDiv);
  totalInfoDiv.appendChild(infoDiv);
  rendSect.appendChild(backDiv);
  rendSect.appendChild(totalInfoDiv);
}

export function borderCountView(rendDiv, borderVals) {
  const footerDiv = document.createElement("Div");
  const bordH1 = document.createElement("h1");
  bordH1.innerHTML = '<span class="font-medium">Border Countries:</span> ';
  const borderContDiv = document.createElement("Div");
  borderContDiv.classList.add("flex", "justify-center", "items-center", "mt-4");
  borderVals.forEach((bordVal) => {
    const borderDiv = document.createElement("Div");
    borderDiv.textContent = bordVal;
    borderDiv.classList.add("px-4", "py-1", "shadow", "mr-2", "bg-white");
    borderContDiv.appendChild(borderDiv);
  });
  footerDiv.classList.add("md:flex");
  footerDiv.appendChild(bordH1);
  footerDiv.appendChild(borderContDiv);
  rendDiv.appendChild(footerDiv);
}
