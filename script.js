function check() {
  if(document.getElementById("pass").value === "isak") {

    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";

    document.getElementById("music").play();

  } else {

    document.getElementById("msg").innerText = "Incorrect password";

  }
}