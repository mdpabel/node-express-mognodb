console.log("Hello");

const form = document.querySelector("form");
const input = document.querySelector("input");
const message_1 = document.querySelector("#message_1");
const message_2 = document.querySelector("#message_2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = input.value;

  message_1.textContent = "Loading...";
  message_2.textContent = "";

  fetch(`http://localhost:3000/weather?location=${location}`).then((res) => {
    res.json().then((data) => {
      console.log(data);
      if (data.Error) {
        message_1.textContent = data.Error;
      } else {
        message_1.textContent = data.address;
        message_2.textContent = data.details;
      }
    });
  });
});
