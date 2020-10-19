var roomTry = 0, batTry = 0;
        setBg("/assets/img/GATES_SCHWERER.jpg")
        document.getElementById("codeRoomEingabe").addEventListener("click", checkRoomCode);
        document.getElementById("codeRoomInput").addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                checkRoomCode();
            }
        });

        function checkRoomCode() {
            if (isCorrectRoom()) {
                document.querySelector("#formRoom").classList.add("d-none")
                document.getElementById("alertCorrect").classList.add("show");
                document.getElementById("code-suc").classList.remove("d-none");
                document.getElementById("codeRoomEingabe").classList.add("d-none");
                document.getElementById("codeNextEingabe").classList.remove("d-none");
                document.getElementById("roomBefore").classList.add("d-none");
                document.getElementById("fledermaus").classList.remove("d-none");
            } else {
                if (roomTry >= 3) {
                    document.getElementById("roomHinweis").classList.remove("d-none");
                } else {
                    roomTry += 1;
                }
                document.getElementById("alertRoomWrong").classList.remove("d-none");
                setTimeout(function () {
                    document.getElementById("alertRoomWrong").classList.add("d-none");
                }, 1100);
            }

            function isCorrectRoom() {
                return document.getElementById("codeRoomInput").value === "AV19";
            }
        }

        document.getElementById("ddHinweis").addEventListener("click", function() {
            setBg("/assets/img/GATES.jpg")
            document.getElementById("hudBefore").classList.add("d-none");
            document.getElementById("hudAfter").classList.remove("d-none");
        });

        document.getElementById("fledermaus").addEventListener("click", function() {
            document.getElementById("fledermausBack").classList.remove("d-none");
            document.getElementById("bat").classList.remove("d-none");
            document.getElementById("batTisch").classList.add("d-none");
            document.getElementById("fledermaus").classList.add("d-none");
        });

        document.getElementById("fledermausBack").addEventListener("click", function(){
            document.getElementById("fledermausBack").classList.add("d-none");
            document.getElementById("bat").classList.add("d-none");
            document.getElementById("batTisch").classList.remove("d-none");
            document.getElementById("fledermaus").classList.remove("d-none");
        });

        document.getElementById("codeNextEingabe").addEventListener("click", checkNextCode);
        document.getElementById("codeNextInput").addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                checkNextCode();
            }
        });

        function checkNextCode() {
            console.log("nextCode");
            if (isNextCorrect()) {
                document.querySelector("#formNext").classList.add("d-none");

                document.getElementById("alertCorrect").classList.add("d-none");
                document.getElementById("code-suc").classList.add("d-none");
                document.getElementById("batAfter").classList.remove("d-none");
                document.getElementById("footerModalRoom").classList.add("d-none");
            } else {
                if (batTry >= 1) {
                    document.getElementById("sleepHinweis").classList.remove("d-none");
                } else {
                    batTry +=1;
                }
                document.getElementById("alertBatWrong").classList.remove("d-none");
                setTimeout(function () {
                    document.getElementById("alertBatWrong").classList.add("d-none");
                }, 1100);
            }
        }

        function isNextCorrect() {
            return document.getElementById("codeNextInput").value === "8199891"
        }

        function setBg(url) {
            document.body.style.backgroundImage = "url(" + url + ")";
            document.body.style.backgroundSize = "cover";
            document.body.style.height = "100%";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "none";
        }
