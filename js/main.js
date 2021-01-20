let images = {
  img1: "./images/panda.jpg",
  img2: "./images//tort.jpg",
  img3: "./images/snow.jpg",
  img4: "./images/lion.jpg",
};

//on file load
document.addEventListener("DOMContentLoaded", () => {
  // adding images to container
  let imgContainer = document.querySelector(".carousel__images");
  Object.values(images).forEach((img) => {
    let newBox = document.createElement("div");
    newBox.classList.add("box");
    let newImg = document.createElement("img");
    newImg.classList.add("carousel__image");
    newImg.src = img;
    newBox.appendChild(newImg);
    imgContainer.appendChild(newBox);
  });

  //selecting righ, left and all boxes
  let btnLeft = document.querySelector(".btn--left");
  let btnRight = document.querySelector(".btn--right");
  let allBox = document.querySelectorAll(".box");

  //to store current image being displayed
  let currentImageIndex = 1;
  let boxCount = Object.keys(images).length;

  //initially hiding left button
  btnLeft.setAttribute("style", "display: none");

  btnRight.addEventListener("click", () => {
    //checking if right most image is beng displayed
    if (currentImageIndex !== boxCount) {
      //moving next image into scroll view
      allBox[currentImageIndex].scrollIntoView({ behavior: "smooth" });
      currentImageIndex++;
      btnLeft.setAttribute("style", "display: block");
    } else {
      currentImageIndex = 1;
      allBox[0].scrollIntoView({ behavior: "smooth" });
    }
  });

  btnLeft.addEventListener("click", () => {
    //checking if left most image is displayed
    if (currentImageIndex !== 1) {
      currentImageIndex--;
      //moving previous image into scroll view
      allBox[currentImageIndex - 1].scrollIntoView({ behavior: "smooth" });
    }
    //hiding left button
    if (currentImageIndex === 1) {
      btnLeft.setAttribute("style", "display: none");
    }
  });
});
