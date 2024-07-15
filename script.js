'use strict';

const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function (e) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
