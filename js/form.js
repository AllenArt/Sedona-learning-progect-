const form = document.querySelector(".housing-search-form");
const interactionButtom = document.querySelector(".housing-search-button");
const submitButton = form.querySelector(".search-form-button");
const arrivalDate = form.querySelector(".search-form-arrival-date");
const departureDate = form.querySelector(".search-form-departure-date");
const adultQuantity = form.querySelector(".search-form-adults-count");
const childrenQuantity = form.querySelector(".search-form-childrens-count");

form.classList.add("housing-search-form-closed");

let isStorageSupport = true;
let storageAdultCount = "";
let storageCgildrenCount = "";

try {
  storageAdultCount = localStorage.getItem("adultCount");
  storageCgildrenCount = localStorage.getItem("childrenCount");
} catch (err) {
  isStorageSupport = false;
}

interactionButtom.addEventListener("click", function () {
  form.classList.toggle("housing-search-form-opening");
  form.classList.remove("housing-search-form-closed");
  if (!form.classList.contains("housing-search-form-opening")) {
    setTimeout(function () {form.classList.add("housing-search-form-closed")}, 3000);
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    form.classList.toggle("housing-search-form-opening");
    form.classList.remove("housing-search-form-closed");
    if (!form.classList.contains("housing-search-form-opening")) {
      setTimeout(function () {form.classList.add("housing-search-form-closed")}, 3000);
    }
  }
})

if (storageAdultCount || storageCgildrenCount) {
  adultQuantity.value = storageAdultCount;
  childrenQuantity.value = storageCgildrenCount;
}

form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adultQuantity.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      if (adultQuantity.value) {
        localStorage.setItem("adultCount", adultQuantity.value);
      }
      if (childrenQuantity.value) {
        localStorage.setItem("childrenCount", childrenQuantity.value);
      }
    }
  }
})