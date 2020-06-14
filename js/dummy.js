const dummy = document.querySelector("#dummy");
const error = document.querySelector("#error");
const timeline = document.querySelector("#timeline-holder");

dummy.onsubmit = (evt) => {
  evt.preventDefault();

  const pass = evt.target.children[0].value;

  if (pass === "serdiferente") {
    timeline.style.display = "block";
    dummy.style.display = "none";
  } else {
    error.style.display = "block";
    error.style.color = "#f00";
  }
};
