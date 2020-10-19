var cakeTry = 0, mainTry = 0;

document.getElementById("raumCodeEingabe").onclick = checkCodeRoom;
document.getElementById("codeRoomInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkCodeRoom();
    if (isCorrectRoom()) {
      document.querySelector("#formRoom").classList.add("d-none");
    }
  }
});

function checkCodeRoom() {
  if (isCorrectRoom()) {
    document.getElementById("alertCorrect").classList.add("show");
    document.getElementById("code-suc").classList.remove("d-none");
    document.getElementById("raumCodeEingabe").classList.add("d-none");
    document.getElementById("raumBtns").classList.remove("d-none");
    document.getElementById("picCake").classList.add("d-none");
  } else {
    if (cakeTry >= 2) {
      document.getElementById("hinweis-pie").classList.remove("d-none");
    } else {
      cakeTry += 1;
    }
    document.getElementById("alertWrong").classList.remove("d-none");
    setTimeout(function () {
      document.getElementById("alertWrong").classList.add("d-none");
    }, 1500);

  }
}

document.getElementById("raumZettel").addEventListener("click", function () { showPic("backZettel", "zettel-pic") });
document.getElementById("raumGraph").addEventListener("click", function () { showPic("backGraph", "graph-pic") });;
document.getElementById("raumScheibe").addEventListener("click", function () { showPic("backScheibe", "scheibe-pic") });
document.getElementById("backZettel").addEventListener("click", function () { showBtns("backZettel", "zettel-pic") });
document.getElementById("backGraph").addEventListener("click", function () { showBtns("backGraph", "graph-pic") });
document.getElementById("backScheibe").addEventListener("click", function () { showBtns("backScheibe", "scheibe-pic") });

function showZettel() {
  document.getElementById("main-pic").classList.add("d-none");
  document.getElementById("zettel-pic").classList.remove("d-none");
  document.getElementById("raumBtns").classList.add("d-none");
  document.getElementById("backZettel").classList.remove("d-none");
}

function showPic(btn, pic) {
  let btnID = btn, picID = pic;
  document.getElementById("main-pic").classList.add("d-none");
  document.getElementById("raumBtns").classList.add("d-none");
  document.getElementById(picID).classList.remove("d-none");
  document.getElementById(btnID).classList.remove("d-none");

}

function showBtns(btnID, picID) {
  let strBtn = btnID, strPic = picID;
  document.getElementById(strBtn).classList.add("d-none");
  document.getElementById(picID).classList.add("d-none");
  document.getElementById("main-pic").classList.remove("d-none");
  document.getElementById("raumBtns").classList.remove("d-none");
}

function isCorrectRoom() {
  return document.getElementById("codeRoomInput").value === "3141";
}

document.getElementById("codeMainEingabe").addEventListener("click", checkMain);
document.getElementById("codeMainInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkMain();

  }
});

function isCorrectMain() {
  return document.getElementById("codeMainInput").value.toLowerCase().includes("meet me at seven pm") ||
    document.getElementById("codeMainInput").value.toLowerCase().includes("meetmeatsevenpm");
}


function checkMain() {

  if (isCorrectMain()) {
    document.getElementById("mainBefore").classList.add("d-none");
    document.getElementById("mainAfter").classList.remove("d-none");
    document.getElementById("mainModalFooter").classList.add("d-none");
  } else {
    if (mainTry >= 2) {
      document.getElementById("dropdownMain").classList.remove("d-none");
    } else {
      mainTry += 1;
    }
    document.getElementById("alertMainWrong").classList.remove("d-none");
    setTimeout(function () {
      document.getElementById("alertMainWrong").classList.add("d-none");
    }, 1500);
  }
}