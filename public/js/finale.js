var tryCodes = 0;

        function setBg(url) {
            document.body.style.backgroundImage = "url(" + url + ")";
            document.body.style.backgroundSize = "cover";
            document.body.style.height = "100%";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "none";;
        }

        setBg('/assets/img/KH2.jpg');

        document.getElementById("btn-light").addEventListener("click", function () {
            setBg('/assets/img/KH.jpg');
            document.getElementById("btn-light").classList.add("d-none");
            document.getElementById("btn-dark").classList.remove("d-none");
        });
        document.getElementById("btn-dark").addEventListener("click", function () {
            setBg('/assets/img/KH2.jpg');
            document.getElementById("btn-dark").classList.add("d-none");
            document.getElementById("btn-light").classList.remove("d-none");
        });

        document.getElementById("codeDayEingabe").addEventListener("click", checkCode);
        document.getElementById("codeDayInput").addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                checkCode();
            }
        });

        function checkCode() {
            if (document.getElementById("codeDayInput").value.toString().toLowerCase() === "sonntag" ||
            document.getElementById("codeDayInput").value.toString().toLowerCase() === "mittwoch") {
                document.getElementById("lockerAfter").classList.add("d-none");
                document.getElementById("lockerBefore").classList.add("d-none");
                document.getElementById("lockerCorrect").classList.remove("d-none");
                document.getElementById("codeDayEingabe").classList.add("d-none");
            } else {
                if (tryCodes >= 1) {
                    document.getElementById("hinweis2").classList.remove("d-none");
                    tryCodes += 1;
                } if (tryCodes >= 4) {
                    document.getElementById("hinweis3").classList.remove("d-none");
                } else {
                    tryCodes += 1;
                }
                document.getElementById("alertWrong").classList.remove("d-none");
                setTimeout(function () {
                    document.getElementById("alertWrong").classList.add("d-none");
                }, 2000);
            }
        };
