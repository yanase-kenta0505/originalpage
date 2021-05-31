"use strict"
{
  const nextBtn = document.querySelector(".nextBtn");
  const gourmetImgClass = [
    "mentaiko",
    "motu"
  ];

  let gourmetImgClassIndex = 0;

  const imagePlace = document.querySelector(".imagePlace");
  const gourmetText1 = document.querySelector(".gourment-text1");
  const gourmetText2 = document.querySelector(".gourment-text2");
  
  imagePlace.classList.add(gourmetImgClass[0]);

  nextBtn.addEventListener("click", () => {
    gourmetText1.classList.toggle("disapper");
    gourmetText2.classList.toggle("disapper");
    console.log(imagePlace.classList);
    if (gourmetImgClassIndex === gourmetImgClass.length - 1) {
      imagePlace.classList.remove(gourmetImgClass[gourmetImgClassIndex]);
      gourmetImgClassIndex = 0;
      imagePlace.classList.add(gourmetImgClass[gourmetImgClassIndex]);
    } else {
      imagePlace.classList.remove(gourmetImgClass[gourmetImgClassIndex]);
      gourmetImgClassIndex++;
      imagePlace.classList.add(gourmetImgClass[gourmetImgClassIndex]);
    }

  })







}