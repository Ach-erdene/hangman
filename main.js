import { uiController } from "./modules/uiController.js";
import { zurahController } from "./modules/zurag.js";
import { ugShalgah } from "./modules/ugShalgah.js";
import { haraal } from "./modules/uramHaraal.js";
import { uram } from "./modules/uramHaraal.js";
import { profileBad } from "./modules/profile.js";
import { profileNice } from "./modules/profile.js";
import { dieProfile } from "./modules/profile.js";
import { ehlelProfile } from "./modules/profile.js";
import { usegnuud } from "./modules/usegnuud.js";
import { uhel } from "./modules/uramHaraal.js";

const dieWord = new uhel();
const uiCtrl = new uiController();  
const zurahCtrl = new zurahController();  
const ugCtrl = new ugShalgah();
const badWord = new haraal();
const goodWord = new uram();
const useg = usegnuud();

const nice =  profileNice;
const bad =  profileBad;
const ready = ehlelProfile;
const die = dieProfile;

export function remote(uiCtrl, zurahCtrl, ugCtrl, badWord, goodWord, nice, bad, ready, useg, die, dieWord) {
    this.ugnuud = ["banana", "bold", "bat"];
    this.array = [];
    this.aldaaniiToo = 0;
    this.DOM = uiCtrl.Dom;
    this.odoogiinUg = "";
    this.currentPlaceholder = [];

    this.placeHolder = () => {
        this.currentPlaceholder = "_ ".repeat(this.array.length);
        this.DOM.ug.textContent = this.currentPlaceholder;
    };

    this.update = (letter, index) => {
        this.urmiinUg(false);
        console.log(this.aldaaniiToo);
        nice();
        let currentText = this.DOM.ug.textContent.split(" ");
        currentText[index] = letter;
        this.DOM.ug.textContent = currentText.join(" ");
        this.array[index] = "";
        console.log(this.currentPlaceholder);
        this.hint();
    };
    this.hint = () => {
        let maxNumba = 20;
        let urt = 0;
        let randomUseg = [];
        let shuffle = [];
        useg.massivdHiih(this.array, maxNumba, urt, randomUseg, useg.usegnuuud);
        shuffle = useg.holih(randomUseg);
        useg.bantagnuulahGang(shuffle, this);
    }

    this.urmiinUg = (utga) =>{
        if(utga === true){
            this.DOM.haraal.textContent = badWord.badword[Math.floor(Math.random() * badWord.badword.length)]
        }else if(utga === false){
            this.DOM.haraal.textContent = goodWord.goodword[Math.floor(Math.random() * goodWord.goodword.length)]
        }
    }

    this.errorCallback = () => {
        bad();
        this.aldaaniiToo++;
        this.urmiinUg(true);
        zurahCtrl.drawDuujluur(this.aldaaniiToo);
        if (this.aldaaniiToo >= 4) {
            this.DOM.haraal.textContent = dieWord.dies[Math.floor(Math.random() * dieWord.dies.length)]
            die();
            setTimeout(function(){
                alert("togloom duuslaa ta yalagdlaa!"); 
                this.res();
            }, 500)
            
        }

    };

    this.init = () => {  
        ready();
        this.DOM.haraal.textContent = "READY !!!";
        this.array = [];
        this.aldaaniiToo = 0;
        this.currentPlaceholder = [];
        zurahCtrl.clearCanvas();
        zurahCtrl.drawHuman();
        this.odoogiinUg = this.ugnuud[Math.floor(Math.random() * this.ugnuud.length)];
        ugCtrl.arraydNemeh(this.odoogiinUg, this.array);
        this.placeHolder();
        this.hint();
        uiCtrl.usegAvah((useg) => {
            console.log(useg);
            ugCtrl.shalgah2(this.array, useg, this.update.bind(this), this.errorCallback.bind(this), this.DOM, this);
        });
    };

    this.res = () =>{

        ready();
        this.DOM.haraal.textContent = "READY !!!";
        this.array = [];
        this.aldaaniiToo = 0;
        this.currentPlaceholder = [];
        zurahCtrl.clearCanvas();
        zurahCtrl.drawHuman();
        this.odoogiinUg = this.ugnuud[Math.floor(Math.random() * this.ugnuud.length)];
        ugCtrl.arraydNemeh(this.odoogiinUg, this.array);
        this.placeHolder();
        this.hint();
    }
    this.DOM.tovch.addEventListener("click", () => {
        this.res();
    });
}

const remoteInstance = new remote(uiCtrl, zurahCtrl, ugCtrl, badWord, goodWord, nice, bad, ready, useg, die, dieWord); 
remoteInstance.init();
