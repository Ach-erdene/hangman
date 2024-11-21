
export function uiController() {
    const dom = {
        ug: document.getElementById("ug"),
        uram: document.getElementById("uram"),
        ami: document.getElementById("ami"),
        haraal: document.getElementById("dialog"),
        tovch: document.getElementById("restartBtn"),
        profile: document.getElementById("profile"),
        useg: document.getElementById("usegnuud"),
    };

    const getUseg = (callback) => {
        document.addEventListener("keydown", function (event) {
            const letter = event.key.toLowerCase();
            if (letter.match(/[a-z]/) && letter.length === 1) {
                callback(letter);
            }
        });
    };

    return {
        Dom: dom,
        usegAvah: getUseg,
    };
}
