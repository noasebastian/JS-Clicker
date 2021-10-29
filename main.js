var version = 9;
var fengshui = 0;
var totfengshui = 0;
var dispfengshui = 0;
var clickermultiplier = 1;
var fengshuibase = 1;
var pricemultiplier = 1.15;
var buttons = document.getElementById("FengShuiClick");
buttons.innerHTML = '<img src="Feng_shui.PNG" width="300" height="300" />';
function FengShuiClicker() {
    fengshui = fengshui + fengshuibase * clickermultiplier;
    totfengshui = totfengshui + fengshuibase * clickermultiplier;
    document.getElementById("fengshuicounter").innerHTML = dispfengshui;
}
function moneycheat() {
    fengshui = fengshui + 10000;
    document.getElementById("fengshuicounter").innerHTML = dispfengshui;
}


 window.onload = function load() {
   if(parseInt(localStorage.getItem("saved")) === version){
   if(localStorage.getItem("saved") !== null){
    
    if(localStorage["saved"] !== undefined){
    
        if(typeof(localStorage.getItem("saved")) === "string"){
        fengshui = parseInt(localStorage.getItem("fengshui"));
        totfengshui = parseInt(localStorage.getItem("totfengshui"));
        dispfengshui = parseInt(localStorage.getItem("dispfengshui"));
        clickermultiplier = parseInt(localStorage.getItem("clickermultiplier"));
        fengshuibase = parseInt(localStorage.getItem("fengshuibase"));
        dispinctimesbought = parseInt(localStorage.getItem("dispinctimesbought"));
        dispdistimesbought = parseInt(localStorage.getItem("dispdistimesbought"));
        dispfentimesbought = parseInt(localStorage.getItem("dispfentimesbought"));
        inctimesbought = parseInt(localStorage.getItem("inctimesbought"));
       distimesbought = parseInt(localStorage.getItem("distimesbought"));
       fentimesbought = parseInt(localStorage.getItem("fentimesbought"));
      upg1bought = parseInt(localStorage.getItem("upg1bought"));
      upg2bought = parseInt(localStorage.getItem("upg2bought"));
       console.log("Loaded!");
}
 }
 }
 }
 }


var bb = setInterval(save,10000);
function save() {
    localStorage.setItem("saved", version);
    localStorage.setItem("fengshui", fengshui);
    localStorage.setItem("totfengshui", totfengshui);
    localStorage.setItem("dispfengshui", dispfengshui);
    localStorage.setItem("clickermultiplier", clickermultiplier);
    localStorage.setItem("fengshuibase", fengshuibase);
    localStorage.setItem("dispinctimesbought", dispinctimesbought);
    localStorage.setItem("dispdistimesbought", dispdistimesbought);
    localStorage.setItem("dispfentimesbought", dispfentimesbought);
    localStorage.setItem("inctimesbought", inctimesbought);
    localStorage.setItem("distimesbought", distimesbought);
    localStorage.setItem("fentimesbought", fentimesbought);
    localStorage.setItem("upg1bought", upg1bought);
    localStorage.setItem("upg2bought", upg2bought);

    console.log("Saved");

}

//const vars = ["version","fengshui","totfengshui","dispfengshui","clickermultiplier","fengshuibase","dispinctimesbought","dispdistimesbought","inctimesbought","distimesbought","upg1bought"];
//const vars2 = [version,fengshui,totfengshui,dispfengshui,clickermultiplier,fengshuibase,dispinctimesbought,dispdistimesbought,inctimesbought,distimesbought,upg1bought];



//vars.forEach((item, index) =>{
    //console.log(item);
    //const item2 = vars2[index];
      // var item3 = '"' + item + '"';

            //vars2[index] = parseInt(localStorage.getItem(item3));
            //console.log(item);
            //console.log(item3);
       // if (item == null) {
           // vars2[index] = 0;
            //console.log(vars[index]+" set to 0")
        //}   
//});

var t = setInterval(updater,100);
function updater() {
    
    dispfengshui = Math.floor(dispfengshui = fengshui);
    
    document.getElementById("fengshuicounter").innerHTML = dispfengshui;
    document.getElementById("incbought").innerHTML = dispinctimesbought;
    document.getElementById("incprice").innerHTML = currincprice;
    document.getElementById("disbought").innerHTML = dispdistimesbought;
    document.getElementById("disprice").innerHTML = currdisprice;
    document.getElementById("fenbought").innerHTML = dispfentimesbought;
    document.getElementById("fenprice").innerHTML = currfenprice;

    currincprice = Math.floor( incprice *  pricemultiplier * inctimesbought);
    currdisprice = Math.floor( disprice *  pricemultiplier * distimesbought);
    currfenprice = Math.floor( fenprice *  pricemultiplier * fentimesbought);
    if (totfengshui >= 100 && upg1bought == 0) {
        document.getElementById("#upg1").innerHTML = "#upg1 { display: block; }";
        

    } else {
        document.getElementById("#upg1").innerHTML = "#upg1 { display: none; }";
        
    }
    if (totfengshui >= 500 && upg2bought == 0) {
        document.getElementById("#upg2").innerHTML = "#upg2 { display: block; }";
    } else {
        document.getElementById("#upg2").innerHTML = "#upg2 { display: none; }";
    }
    
}
var b = setInterval(fengprtick,1000);
function fengprtick() {

    fengshui = fengshui + incgain * dispinctimesbought;
    fengshui = fengshui + disgain * dispdistimesbought;
    fengshui = fengshui + fengain * dispfentimesbought;



    totfengshui = totfengshui + incgain * dispinctimesbought;
    totfengshui = totfengshui + disgain * dispdistimesbought;
    totfengshui = totfengshui + fengain * dispfentimesbought;
}



var incprice = 15;
var inctimesbought = 1;
var dispinctimesbought =0;
var incgain = 0.1;
var currincprice = 0;
function incense() {
    if (fengshui >= currincprice) {
        fengshui = fengshui - currincprice;
        inctimesbought++;
        dispinctimesbought++;
    }
}




var disprice = 100;
var distimesbought = 1;
var dispdistimesbought =0;
var disgain = 1;
var currdisprice = 0;
function disiple() {
    if (fengshui >= currdisprice) {
        fengshui = fengshui - currdisprice;
        distimesbought++;
        dispdistimesbought++;
    }
}

var fenprice = 1100;
var fentimesbought = 1;
var dispfentimesbought =0;
var fengain = 8;
var currfenprice = 0;
function fengshuimaster() {
    if (fengshui >= currfenprice) {
        fengshui = fengshui - currfenprice;
        fentimesbought++;
        dispfentimesbought++;
    }
}

var upg1price = 100;
var upg1bought = 0;
function clickupg1() {
    if (fengshui >= upg1price) {
        fengshui = fengshui - upg1price;
        clickermultiplier = clickermultiplier * 2;
        upg1bought = 1;
    }

}

var upg2price = 500;
var upg2bought = 0;
function clickupg2() {
    if (fengshui >= upg2price) {
        fengshui = fengshui - upg2price;
        clickermultiplier = clickermultiplier * 2;
        upg2bought = 1;
    }

}