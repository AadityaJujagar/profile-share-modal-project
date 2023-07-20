const modal = document.querySelector(".modal-section");
const overlay = document.querySelector(".overlay");

const modalOpen = () => {
  console.log("modal is opened");
  modal.classList.add("activate");
  overlay.classList.add("overlayActivate");
};

const modalClose = () => {
  modal.classList.remove("activate");
  overlay.classList.remove("overlayActivate");
};
