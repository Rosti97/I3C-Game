document.getElementById("blaBtn").onclick = function () {
    document.querySelector(".typBefore").classList.add("d-none");
    document.getElementById("blaBtn").classList.add("d-none");
    document.querySelector(".typCity").classList.remove("d-none");
    document.getElementById("cityBtn").classList.remove("d-none");
};

document.getElementById("cityInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        checkCityInput();
    }
});

document.getElementById("cityBtn").addEventListener("click", checkCityInput);

function checkCityInput() {
    if (document.getElementById("cityInput").value.toLowerCase() === "berlin") {
        document.getElementById("cityBtn").classList.add("d-none");
        document.getElementById("bezirkBtn").classList.remove("d-none");
        document.querySelector(".typCity").classList.add("d-none");
        document.querySelector(".typBezirk").classList.remove("d-none");
    } else {
        document.getElementById("alertCityWrong").classList.remove("d-none");
        setTimeout(function () {
            document.getElementById("alertCityWrong").classList.add("d-none");
        }, 2000);
    }
}

document.getElementById("bezirkInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        checkBezirkInput();
    }
});

document.getElementById("bezirkBtn").addEventListener("click", checkBezirkInput);

function checkBezirkInput() {
    if (document.getElementById("bezirkInput").value.toLowerCase() === "spandau" || 
    document.getElementById("bezirkInput").value.toLowerCase() === "rathaus spandau") {
        document.getElementById("bezirkBtn").classList.add("d-none");
        document.querySelector(".typBezirk").classList.add("d-none");
        document.querySelector(".typNext").classList.remove("d-none")
        document.getElementById("typTitel").innerHTML = "Wow!";
    } else {
        document.getElementById("alertBezirkWrong").classList.remove("d-none");
        setTimeout(function () {
            document.getElementById("alertBezirkWrong").classList.add("d-none");
        }, 2000);
    }
}

