let soundOff = document.querySelector(".sound-off");
let soundOn = document.querySelector(".sound-on");
let video = document.querySelector("video");

soundOff.addEventListener("click", () => {
  soundOn.classList.remove("active");
  soundOff.classList.add("active");
  video.muted = "";
});
soundOn.addEventListener("click", () => {
  soundOff.classList.remove("active");
  soundOn.classList.add("active");
  video.muted = "muted";
});
