const button = document.querySelector(".button");

let buttonOn = false;

button.addEventListener("click", () => {
  if (!buttonOn) {
    buttonOn = true;

    chrome.tabs.executeScript({
      file: "monochrome.js",
    });
  } else {
    buttonOn = false;

    chrome.tabs.executeScript({
      file: "monochrome.js",
    });
  }
});

function changeFilter(fileName) {
  chrome.tabs.executeScript({ file: fileName });
}
