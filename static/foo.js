function doTheMagicThing() {
  document.head.insertAdjacentHTML(
    "afterend",
    '<link rel="stylesheet" href="https://www.webprojekt.link/foo.css" />'
  );

  const i = Array.from(document.getElementsByClassName("title")).find(
    (c) => c.textContent === "Webprojekt – Einstieg in die Webentwicklung"
  );
  
  if (i) {
    i.parentElement.parentElement.classList.add("dom-party");
  }

  const x = document.querySelector('[src*="bb.jpg"]');
  if (x) {
    x.src =
      "https://edu.opencampus.sh/system/users/avatars/000/002/669/thumb/bastibuck.jpg?1638102475";
    x.insertAdjacentHTML(
      "afterend",
      '<img style="margin-left: 5px" class="img-circle" src="https://edu.opencampus.sh/system/users/avatars/000/002/240/thumb/avatar_square.jpg?1631281465">'
    );
  }

  const y = new Date();
  if (y.toISOString().includes("2022-04-01") && y.getHours() >= 18) {
    document.body.style.fontFamily = "Comic Sans MS";
  }
}

document.addEventListener("turbolinks:load", function () {
  doTheMagicThing();
});
