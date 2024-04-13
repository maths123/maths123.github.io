function go() {
  var game = window.open(
    "",
    "Math",
    "width=" +
      screen.width +
      ",height=" +
      screen.height +
      ",resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no,top=0,left=0"
  );
  // fetch html for game and display it in the new window
  fetch(
    "https://raw.githubusercontent.com/vidio-boy/Eaglercraft1.8.8/main/eaglercraft.1.8.8.html"
  )
    .then((response) => response.text())
    .then((html) => {
      game.document.write(html);
      game.document.title = "Math";
    });
}

document.querySelector("#secret").onclick = (e) => {
  e.preventDefault();
  if (e.detail === 3) {
    document.querySelector("div").classList.remove("hidden");
  }
};

fetch(
  "https://raw.githubusercontent.com/vidio-boy/Eaglercraft1.8.8/main/eaglercraft.1.8.8.html",
  {
    method: "GET",
    headers: new Headers({}),
  }
)
  .then((response) => response.blob())
  .then((blob) => {
    var url = window.URL.createObjectURL(blob);
    var a = document.querySelector("a");
    a.href = url;
    a.download = "math.html";
  });
