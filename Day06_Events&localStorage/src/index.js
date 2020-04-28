const select = document.querySelector("select");

const selected = localStorage.getItem("selected");
if (selected) {
  select.value = selected;
}

select.addEventListener("change", (e) => {
  localStorage.setItem("selected", e.target.value);
});
