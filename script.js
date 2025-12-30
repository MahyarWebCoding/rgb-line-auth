const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const panels = document.querySelectorAll(".panel");
const switchers = document.querySelectorAll("[data-switch]");
const toast = document.getElementById("toast");

function setActive(name){
  tabs.forEach(t=>{
    const on = t.dataset.tab === name;
    t.classList.toggle("is-active", on);
    t.setAttribute("aria-selected", on ? "true" : "false");
  });

  panels.forEach(p => p.classList.toggle("is-active", p.dataset.form === name));
  indicator.style.transform = name === "signup" ? "translateX(calc(100% + 6px))" : "translateX(0)";
}

tabs.forEach(t => t.addEventListener("click", () => setActive(t.dataset.tab)));
switchers.forEach(b => b.addEventListener("click", () => setActive(b.dataset.switch)));

document.querySelectorAll("[data-eye]").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const input = btn.closest(".pass").querySelector("input");
    const isPass = input.type === "password";
    input.type = isPass ? "text" : "password";
    btn.textContent = isPass ? "🙈" : "👁";
  });
});

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(()=> toast.classList.remove("show"), 1800);
}

document.getElementById("loginForm")?.addEventListener("submit", (e)=>{
  e.preventDefault();
  showToast("Logged in (demo).");
});

document.getElementById("signupForm")?.addEventListener("submit", (e)=>{
  e.preventDefault();
  showToast("Account created (demo).");
});

setActive("login");