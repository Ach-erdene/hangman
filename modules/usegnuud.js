import { uiController } from "./uiController.js";
const ui = new uiController();

export function usegnuud() {
    const usegnuud = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function arraydHiih(origUsegnuud, maxNumba, urt, randomUsegnuud, usegnuud){
        if (origUsegnuud.length < maxNumba) {
            urt = maxNumba - origUsegnuud.length;
        }
        for (let i = 0; i < urt; i++) {
            randomUsegnuud.push(usegnuud[Math.floor(Math.random() * usegnuud.length)]);
        }
    
        for (let i = 0; i < origUsegnuud.length; i++) {
            randomUsegnuud.push(origUsegnuud[i]);
        }
    }


    function bantagnuulah(shuffleArray, GGWP){

        // ui.Dom.useg.textContent = shuffle.join(" ");
        ui.Dom.useg.innerHTML = "";

        shuffleArray.forEach((letter) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.classList.add("clickable-letter");
            span.addEventListener("click", () => {
                const index = GGWP.array.indexOf(letter); 
                if (index !== -1) {
                    GGWP.update(letter, index);
                    if (!GGWP.DOM.ug.textContent.includes("_")) {
                        setTimeout(function(){
                            alert("bayr hurgiy ta yallaa");
                            GGWP.res();
                        }, 1000);
                    }
                } else {
                    GGWP.errorCallback();
                }

            });
            ui.Dom.useg.appendChild(span);
        });
    }
    

    return {
        holih : shuffleArray,
        usegnuuud : usegnuud,
        massivdHiih : arraydHiih,
        bantagnuulahGang : bantagnuulah,
    }
}