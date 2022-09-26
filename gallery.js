const bigImg = document.querySelector(".remove-on-mobile img");
// const caption = document.querySelector("figcaption");
const thumbs = document.querySelector(".row");

thumbs.addEventListener("click", skiftFoto);

function skiftFoto(e) {
  if (e.target.getAttribute("src") != null) {
    let newSrc =
      "images/desktop/stor/" + e.target.getAttribute("src").slice(21);
    bigImg.setAttribute("src", newSrc);
    // caption.textContent = e.target.getAttribute("alt");
  }
}

// pile

const imgElement = document.querySelector(".remove-on-mobile img");
let index = 0;

// Array med filnavne (uden ".jpg") NIX PILLE :-)
const fotoList = ["1", "2", "3", "4", "5", "6"];

document.querySelector("#next").addEventListener("click", frem);
document.querySelector("#prev").addEventListener("click", tilbage);

// function til frem
function frem() {
  if (index < fotoList.length - 1) {
    index++;
  } else {
    index = 0;
  }
  let newSrc = "images/desktop/stor/" + fotoList[index] + ".jpg";
  console.log(newSrc);
  imgElement.setAttribute("src", newSrc);
}
// function til tilbage
function tilbage() {
  {
    if (index >= 1) {
      index--;
    } else {
      index = fotoList.length - 1;
    }
    let newSrc = "images/desktop/stor/" + fotoList[index] + ".jpg";
    console.log(newSrc);
    imgElement.setAttribute("src", newSrc);
  }
}

//arrow keys left and right

let newSrc = "images/desktop/stor/" + fotoList[index] + ".jpg";
console.log(newSrc);
imgElement.setAttribute("src", newSrc);

document.onkeydown = function (event) {
  if (event.code === "ArrowLeft") {
    tilbage();
  } else if (event.code === "ArrowRight") {
    frem();
  }
};
