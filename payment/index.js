const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mcBtn = document.getElementById("mastercardBtn");
const amexBtn = document.getElementById("amexBtn");
const discoverBtn = document.getElementById("discoverBtn");
const mySubmit = document.getElementById("mySubmit");

// preserve these pointers.

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = "You are subscribed.";
  } else {
    // window.alert("You must subscribe to continue.");
    subResult.textContent = "You must subscribe.";
  }

  if (visaBtn.checked) {
    paymentResult.textContent = "You selected Visa.";
  } else if (mcBtn.checked) {
    paymentResult.textContent = "You selected MasterCard.";
  } else if (amexBtn.checked) {
    paymentResult.textContent = "You selected AmEx.";
  } else {
    paymentResult.textContent = "You must select a payment method.";
  }
};
