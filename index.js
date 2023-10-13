const form = document.querySelector("#myform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formdata = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
  };
  localStorage.setItem("data", JSON.stringify(formdata));
});
let res = localStorage.getItem("data");
res = JSON.parse(res);
console.log(typeof res.email);
