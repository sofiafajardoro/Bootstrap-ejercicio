const btnArriba = document.getElementById("btn-arriba");
btnArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});