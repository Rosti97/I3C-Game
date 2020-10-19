setBg('/assets/img/HILDMANN.jpg');
        var firstTry = 1, secondTry = 1; thirdTry = 1;

        document.getElementById("generatorBtn").addEventListener("click", function () {
            document.querySelector(".notes").classList.add("d-none");
            document.getElementById("generatorBtn").classList.add("d-none");
            document.querySelector(".notesFirst").classList.remove("d-none");
            document.getElementById("firstBtn").classList.remove("d-none");
            document.getElementById("alertWrong").classList.add("d-none");
        })

        document.getElementById("firstInput").addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                checkFirstCode();
            }
        });

        document.getElementById("firstBtn").addEventListener("click", checkFirstCode);

        function checkFirstCode() {
            if (document.getElementById("firstInput").value.toLowerCase() === "obelisk" ||
            document.getElementById("firstInput").value.toLowerCase() === "obelisken") {
                document.querySelector(".notesFirst").classList.add("d-none");
                document.getElementById("firstBtn").classList.add("d-none");
                document.querySelector(".notesSecond").classList.remove("d-none");
                document.getElementById("secondBtn").classList.remove("d-none");
            } else {
                document.querySelector(".notes").classList.remove("d-none");
                document.getElementById("generatorBtn").classList.remove("d-none");
                document.querySelector(".notesFirst").classList.add("d-none");
                document.getElementById("firstBtn").classList.add("d-none");
                document.getElementById("alertWrong").classList.remove("d-none");
                if (firstTry >= 2) {
                    document.querySelector(".firstCodeHinweis").classList.remove("d-none");
                } else {
                    firstTry += 1;
                    console.log("first: " + firstTry);
                }
            }
        }

        document.getElementById("secondInput").addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                console.log("Weiter 2 gedrückt");
                checkSecondCode();
            }
        });

        document.getElementById("secondBtn").addEventListener("click", checkSecondCode);

        function checkSecondCode() {
            if (document.getElementById("secondInput").value.toLowerCase() === "karotten" ||
            document.getElementById("secondInput").value.toLowerCase() === "karotte") {
                document.querySelector(".notesSecond").classList.add("d-none");
                document.getElementById("secondBtn").classList.add("d-none");
                document.querySelector(".notesThird").classList.remove("d-none");
                document.getElementById("thirdBtn").classList.remove("d-none");
            } else {
                console.log("nopes")
                document.querySelector(".notes").classList.remove("d-none");
                document.getElementById("generatorBtn").classList.remove("d-none");
                document.querySelector(".notesSecond").classList.add("d-none");
                document.getElementById("secondBtn").classList.add("d-none");
                document.getElementById("alertWrong").classList.remove("d-none");
                if (secondTry >= 2) {
                    document.querySelector(".secondCodeHinweis").classList.remove("d-none");
                } else {
                    secondTry += 1;
                    console.log("first: " + secondTry);
                }
            }
        }

        document.getElementById("thirdInput").addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                checkThirdCode();
            }
        });

        document.getElementById("thirdBtn").addEventListener("click", checkThirdCode);

        function checkThirdCode() {
            if (document.getElementById("thirdInput").value.toLowerCase() === "bleda") {
                document.querySelector(".notesThird").classList.add("d-none");
                document.getElementById("thirdBtn").classList.add("d-none");
                document.querySelector(".notesNext").classList.remove("d-none");
                document.getElementById("nextBtn").classList.remove("d-none");
                setBg('/assets/img/HILDMAN_LASER.jpg');
                document.querySelector(".statueBefore").classList.add("d-none");
                document.querySelector(".statueAfter").classList.remove("d-none");
                document.getElementById("doneBtn").classList.remove("d-none");

            } else {
                document.querySelector(".notes").classList.remove("d-none");
                document.getElementById("generatorBtn").classList.remove("d-none");
                document.querySelector(".notesThird").classList.add("d-none");
                document.getElementById("thirdBtn").classList.add("d-none");
                document.getElementById("alertWrong").classList.remove("d-none");
                if (thirdTry >= 2) {
                    document.querySelector(".thirdCodeHinweis").classList.remove("d-none");
                } else {
                    thirdTry += 1;
                    console.log("first: " + thirdTry);
                }
            }

        }

        document.getElementById("doneBtn").addEventListener("click", function () {
            document.querySelector(".statueAfter").classList.add("d-none");
            document.querySelector(".nextLevel").classList.remove("d-none");
            document.getElementById("footerDonelStatue").classList.add("d-none");
        });

        function setBg(url) {
            document.body.style.backgroundImage = "url(" + url + ")";
            document.body.style.backgroundSize = "cover";
            document.body.style.height = "100%";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "none";
        }