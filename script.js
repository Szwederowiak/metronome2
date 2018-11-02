        var tempoValue = document.getElementById("tempo-value")
        var tempoSet = document.getElementById("tempo-set")

        var choosenTempo = 1000;

        var playMetronome = document.getElementById("play-metronome")
        var pauseMetronome = document.getElementById("pause-metronome")

        var clickSound = document.getElementById("click-sound")



        showValue();

        /* POKAZYWANIE TEMPA */
        tempoSet.addEventListener("input", showValue);

        function showValue() {
            tempoValue.innerHTML = tempoSet.value + " bpm";
            calculateTempo();
            console.log(choosenTempo)
        }

        /* WŁĄCZANIE METRONOMU */
        playMetronome.addEventListener("click", runMetronome);
        var playCounter = 0;
        var playRecursion;
        

        function runMetronome() {
            playMetronome.classList.add("hide-button")
            pauseMetronome.classList.remove("hide-button")
            clickSound.currentTime = 0;
            clickSound.play();

            if ((playCounter + 4) % 4 == 0) {
                clickSound.volume = 1;
            } else {
                clickSound.volume = 0.4
            }

            playCounter++

            playRecursion = setTimeout(runMetronome, choosenTempo)
        }

        pauseMetronome.addEventListener("click", function() {
            playMetronome.classList.remove("hide-button")
            pauseMetronome.classList.add("hide-button")
            clearTimeout(playRecursion);
            playCounter = 0;
        })

        function calculateTempo() {
            choosenTempo = (60 / tempoSet.value) * 1000;
        }

        /* BUTTONY TEMPA*/
        var buttonPlus = document.getElementById("plus")
        var buttonMinus = document.getElementById("minus")

        buttonPlus.addEventListener("click", plusValue)
        buttonMinus.addEventListener("click", minusValue)

        function minusValue(num) {
            tempoSet.value = parseInt(tempoSet.value) - 4;
            console.log(tempoSet.value);
            showValue()
        }

        function plusValue(num) {
            tempoSet.value = parseInt(tempoSet.value) + 4;
            console.log(tempoSet.value);
            showValue()
        }