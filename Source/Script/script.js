let $ = document;

/////////////////////////////////

// variables
const body = $.body;
const mainPart = $.querySelector(".mainPart");
const themeContainer = $.querySelector(".themeContainer");
const ball = $.querySelector(".ball");
const statusIcon = $.querySelector(".fa-moon");
let isLight = true;


// fucntions
// to update user screen height 
function domUpdater() {
    let liveUserScreenHeight = visualViewport.height;
    body.style.minHeight = liveUserScreenHeight + "px";
}
  
// local theme check before load
function themeCheckByLocalStorage() {
  let theme = localStorage.getItem("theme");
  if (theme === "light") {
    lightTheme();
  } else if (theme === "dark") {
    darkTheme();
  } else {
    lightTheme();
  }
}
themeCheckByLocalStorage();


// to switch between light or dark theme by clicking on the button //
function themeChange() {
  if (isLight) {
    darkTheme();
  } else {
    lightTheme();
  }
}

// function for setting light theme
function lightTheme() {
  localStorage.setItem("theme", "light");
  body.style.backgroundColor = "white";
  body.style.color = "black";
  mainPart.style.borderColor = "black";
  ball.style.transform = "translateX(0px)";
  ball.style.backgroundColor = "rgb(96, 125, 242)";
  statusIcon.className = "fas fa-moon";
  isLight = true;
}

// function for setting dark theme
function darkTheme() {
  localStorage.setItem("theme", "dark");
  body.style.backgroundColor = "black";
  body.style.color = "white";
  mainPart.style.borderColor = "white";
  ball.style.transform = "translateX(22px)";
  ball.style.backgroundColor = "rgb(0, 0, 0)";
  statusIcon.className = "bi bi-brightness-high";
  isLight = false;
}


// event listeners
// to update user screen height every 0.1s 
setInterval(domUpdater, 100);

// to switch between light or dark theme by clicking on the button //
themeContainer.addEventListener("click", themeChange);