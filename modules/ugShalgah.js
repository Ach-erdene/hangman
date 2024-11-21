
export function ugShalgah() {
    const arrayDuurgeh = (word, array) => {
        for (let letter of word) {
            array.push(letter);
        }
    };

    const shalgalt = (letter, useg) => {
        return letter === useg;
    };

    const shalgalt2 = (array, useg, update, errorCallback, dom, GGWP) => {
        let found = false;
        for (let index = 0; index < array.length; index++) {
            if (shalgalt(array[index], useg) ) { 
                update(array[index], index);
                found = true;
                console.log(found);
                break; 
        }
    }
        if (!dom.ug.textContent.includes("_")) {
            setTimeout(function(){
                alert("bayr hurgiy ta yallaa")
                GGWP.res();
            }, 1000);
    
        }
        console.log(found)
        if(found === false){
            console.log("error");
            errorCallback();
        }
    };

    return {
        arraydNemeh: arrayDuurgeh,
        shalgah1: shalgalt,
        shalgah2: shalgalt2
    };
}