function post() {
  const form = document.getElementById("form");
  form.addEventListener("submit", () => {
    e.preventDefault(); // ← この1行を追加！
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
}

window.addEventListener("turbo:load", post);
