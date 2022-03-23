function onC() {
  let x = document.getElementById("Changed").value;
  if (x == "Jordan") {
    document.getElementById("image").src = "../Images/jo.png";
  } else if (x == "Norway") {
    document.getElementById("image").src = "../Images/no.png";
  } else {
    document.getElementById("image").src = "../Images/gb-eng.png";
  }
}
