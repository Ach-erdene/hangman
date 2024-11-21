export function zurahController() {
    const canvas = document.getElementById("hangmanCanvas");
    const ctx = canvas.getContext("2d");

    function drawHuman() {
        ctx.beginPath();
        ctx.arc(200, 130, 30, 0, 2 * Math.PI); // Circle for head
        ctx.stroke();
        // biy
        ctx.moveTo(200, 160);
        ctx.lineTo(200, 250);
        ctx.stroke();
        // zuun gar
        ctx.moveTo(200, 180);
        ctx.lineTo(170, 220);
        ctx.stroke();
        // baruun gar
        ctx.moveTo(200, 180);
        ctx.lineTo(230, 220);
        ctx.stroke();
        // zuun hul
        ctx.moveTo(200, 250);
        ctx.lineTo(170, 300);
        ctx.stroke();
        // baruun hul
        ctx.moveTo(200, 250);
        ctx.lineTo(230, 300);
        ctx.stroke();
    }

    function drawDuujluur(part) {
        ctx.beginPath();
        switch (part) {
            case 1:
                ctx.moveTo(50, 350);
                ctx.lineTo(150, 350);
                break;
            case 2:
                ctx.moveTo(100, 350);
                ctx.lineTo(100, 50);
                break;
            case 3:
                ctx.moveTo(100, 50);
                ctx.lineTo(200, 50);
                break;
            case 4:
                ctx.moveTo(200, 50);
                ctx.lineTo(200, 100);
                break;
        }
        ctx.stroke();
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return {
        drawHuman,
        drawDuujluur,
        clearCanvas,
    };
}