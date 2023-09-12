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
  const flagImg = document.createElement("img");
  const nameH1 = document.createElement("h1");
  const populationH1 = document.createElement("h1");
  const regionH1 = document.createElement("h1");
  const capitalH1 = document.createElement("h1");
  countryDiv.classList.add(
    "rounded-md",
    "overflow-hidden",
    "shadow-md",
    "mb-8",
    "justify-center",
    "md:mx-4",
    "lg:text-xl",
    "bg-white"
  );
  flagImg.classList.add("h-48", "w-full", "object-cover");
  countryDiv.setAttribute("dataName", name);
  countryDiv.addEventListener("click", functionClick);
  infoDiv.classList.add("p-8");
  flagImg.src = flag;
  nameH1.textContent = name;
  nameH1.classList.add("font-bold", "pb-4", "text-xl");
  populationH1.innerHTML =
    '<span class="font-bold">Population:</span> ' + population;
  regionH1.innerHTML = '<span class="font-bold">Region:</span> ' + region;
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
  border,
  bordEvent
) {
  const flagDiv = document.createElement("Div");
  const upperInfoDiv = document.createElement("Div");
  const totalInfoDiv = document.createElement("Div");
  const lowerInfoDiv = document.createElement("Div");
  const infoDiv = document.createElement("Div");
  const insideInfoDiv = document.createElement("Div");

  const bordDiv = document.createElement("Div");
  const bordH1 = document.createElement("h1");
  const backImg = document.createElement("img");
  const flagImg = document.createElement("img");
  const nameH1 = document.createElement("h1");
  const natNameH1 = document.createElement("h1");
  const popH1 = document.createElement("h1");
  const regH1 = document.createElement("h1");
  const subregH1 = document.createElement("h1");
  const capH1 = document.createElement("h1");
  const TLDH1 = document.createElement("h1");
  const currH1 = document.createElement("h1");
  const langH1 = document.createElement("h1");
  const borderContDiv = document.createElement("Div");

  totalInfoDiv.classList.add("lg:flex", "lg:justify-around");
  insideInfoDiv.classList.add(
    "md:flex",
    "md:justify-around",
    "md:items-center",
    "lg:justify-between"
  );
  infoDiv.classList.add("lg:w-2/5");

  // BorderSect
  // console.log(border);
  bordDiv.classList.add(
    "lg:w-max",
    "md:flex",
    "md:items-center",
    "md:justify-center"
  );
  bordH1.innerHTML =
    '<span class="font-medium lg:text-xl lg:font-semibold">Border Countries: </span> ';
  borderContDiv.classList.add("flex", "items-center", "justify-center");

  if (Array.isArray(border) && border.length > 4) {
    borderContDiv.classList.add("grid", "grid-cols-3", "lg:grid-cols-4");
  }

  if (Array.isArray(border)) {
    border.forEach((bord) => {
      const bordEachDiv = document.createElement("div");
      const bordH1 = document.createElement("h1");
      bordH1.textContent = bord;
      bordEachDiv.appendChild(bordH1);
      bordEachDiv.classList.add(
        "px-4",
        "py-1",
        "shadow",
        "mx-2",
        "bg-white",
        "lg:text-lg",
        "lg:font-semibold"
      );
      if (border.length > 4) {
        bordEachDiv.classList.add("mt-2");
      }
      bordEachDiv.addEventListener("click", (e) => {
        e.preventDefault();
        bordEvent(e);
      });
      borderContDiv.appendChild(bordEachDiv);
    });
  }

  bordDiv.appendChild(bordH1);
  bordDiv.appendChild(borderContDiv);
  //
  flagImg.src = flag;
  flagImg.classList.add("ml-auto", "mr-auto", "h-52", "lg:h-96");
  flagDiv.classList.add("lg:w-2/5");
  nameH1.classList.add("text-lg", "lg:text-2xl", "lg:mb-12", "font-bold");
  nameH1.textContent = name;
  natNameH1.innerHTML =
    '<span class="font-medium lg:text-lg">Native Name(s):</span> ' + nativeName;
  natNameH1.classList.add("mt-4", "md:mt-2");
  popH1.innerHTML =
    '<span class="font-medium lg:text-lg">Population:</span> ' + population;
  regH1.innerHTML =
    '<span class="font-medium lg:text-lg">Region:</span> ' + region;

  subregH1.innerHTML =
    '<span class="font-medium lg:text-lg">Sub region:</span> ' + subRegion;

  capH1.innerHTML =
    '<span class="font-medium lg:text-lg">Capital:</span> ' + capital;

  TLDH1.innerHTML =
    '<span class="font-medium lg:text-lg">Top level Domain:</span> ' + TLDomain;

  currH1.innerHTML =
    '<span class="font-medium lg:text-lg">Currencies:</span> ' + curr;

  langH1.innerHTML =
    '<span class="font-medium lg:text-lg">Language(s):</span> ' + lang;
  flagDiv.appendChild(flagImg);
  upperInfoDiv.classList.add("my-7");

  lowerInfoDiv.classList.add("mb-7");
  upperInfoDiv.appendChild(natNameH1);
  upperInfoDiv.appendChild(popH1);
  upperInfoDiv.appendChild(regH1);
  upperInfoDiv.appendChild(subregH1);
  upperInfoDiv.appendChild(capH1);
  lowerInfoDiv.appendChild(TLDH1);
  lowerInfoDiv.appendChild(currH1);
  lowerInfoDiv.appendChild(langH1);
  insideInfoDiv.appendChild(upperInfoDiv);
  insideInfoDiv.appendChild(lowerInfoDiv);
  infoDiv.appendChild(nameH1);
  infoDiv.appendChild(insideInfoDiv);
  infoDiv.appendChild(bordDiv);
  totalInfoDiv.appendChild(flagDiv);
  totalInfoDiv.appendChild(infoDiv);

  rendSect.appendChild(totalInfoDiv);
}

export function errDisplay(dispSect, errMess) {
  clearInit(dispSect);
  const errH1 = document.createElement("H1");
  errH1.classList.add("lg:text-xl", "lg:mt-32", "mt-16");
  errH1.textContent = errMess;
  dispSect.appendChild(errH1);
}
