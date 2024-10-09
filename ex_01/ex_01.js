document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide("#latest-creations-carousel", {
    type: "loop",
    perPage: 3,
    focus: "center",
    autoplay: true,
    interval: 5000,
    arrows: false,
  }).mount();
});