let thumbImg = document.querySelectorAll("div.thumbnail>img");
let mImg = document.querySelector("div.image>img");
console.log(thumbImg);
thumbImg.forEach((elem) => {
  elem.addEventListener("click", () => {
    mImg.src = `${elem.src}`;
  });
});
thumbImg.addEventListener("click",()=>{
    
})
