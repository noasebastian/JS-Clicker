var version = 16;
var fengshui = 0;
var totfengshui = 0;
var dispfengshui = 0;
var clickermultiplier = 1;
var fengshuibase = 1;
var pricemultiplier = 1.15;
var incmultiplier = 1;
var buttons = document.getElementById("FengShuiClick");
function FengShuiClicker() {
    fengshui = fengshui + fengshuibase * clickermultiplier;
    totfengshui = totfengshui + fengshuibase * clickermultiplier;
    document.getElementById("fengshuicounter").innerHTML = dispfengshui;
}


document.getElementById("dispversion").innerHTML = version;
 window.onload = function load() {
   if(parseInt(localStorage.getItem("saved")) === version){
   if(localStorage.getItem("saved") !== null){
    
    if(localStorage["saved"] !== undefined){
    
        if(typeof(localStorage.getItem("saved")) === "string"){
        fengshui = parseInt(localStorage.getItem("fengshui"));
        totfengshui = parseInt(localStorage.getItem("totfengshui"));
        dispfengshui = parseInt(localStorage.getItem("dispfengshui"));
        clickermultiplier = parseInt(localStorage.getItem("clickermultiplier"));
        incmultiplier = parseInt(localStorage.getItem("incmultiplier"));
        fengshuibase = parseInt(localStorage.getItem("fengshuibase"));
        dispinctimesbought = parseInt(localStorage.getItem("dispinctimesbought"));
        dispdistimesbought = parseInt(localStorage.getItem("dispdistimesbought"));
        dispfentimesbought = parseInt(localStorage.getItem("dispfentimesbought"));
        dispschtimesbought = parseInt(localStorage.getItem("dispschtimesbought"));
        dispfactimesbought = parseInt(localStorage.getItem("dispfactimesbought"));
        inctimesbought = parseInt(localStorage.getItem("inctimesbought"));
       distimesbought = parseInt(localStorage.getItem("distimesbought"));
       fentimesbought = parseInt(localStorage.getItem("fentimesbought"));
       schtimesbought = parseInt(localStorage.getItem("schtimesbought"));
       factimesbought = parseInt(localStorage.getItem("factimesbought"));
       currincprice = parseInt(localStorage.getItem("currincprice"));
      currdisprice = parseInt(localStorage.getItem("currdisprice"));
      currfenprice = parseInt(localStorage.getItem("currfenprice"));
      currschprice = parseInt(localStorage.getItem("currschprice"));
      currfacprice = parseInt(localStorage.getItem("currfacprice"));
      upg1bought = parseInt(localStorage.getItem("upg1bought"));
      upg2bought = parseInt(localStorage.getItem("upg2bought"));
      incupg1bought = parseInt(localStorage.getItem("incupg1bought"));
      incupg2bought = parseInt(localStorage.getItem("incupg2bought"));
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
    localStorage.setItem("incmultiplier", incmultiplier);
    localStorage.setItem("fengshuibase", fengshuibase);
    localStorage.setItem("dispinctimesbought", dispinctimesbought);
    localStorage.setItem("dispdistimesbought", dispdistimesbought);
    localStorage.setItem("dispfentimesbought", dispfentimesbought);
    localStorage.setItem("dispschtimesbought", dispschtimesbought);
    localStorage.setItem("dispfactimesbought", dispfactimesbought);
    localStorage.setItem("inctimesbought", inctimesbought);
    localStorage.setItem("distimesbought", distimesbought);
    localStorage.setItem("fentimesbought", fentimesbought);
    localStorage.setItem("schtimesbought", schtimesbought);
    localStorage.setItem("factimesbought", factimesbought);
    localStorage.setItem("currincprice", currincprice);
    localStorage.setItem("currdisprice", currdisprice);
    localStorage.setItem("currfenprice", currfenprice);
    localStorage.setItem("currschprice", currschprice);
    localStorage.setItem("currfacprice", currfacprice);
    localStorage.setItem("upg1bought", upg1bought);
    localStorage.setItem("upg2bought", upg2bought);
    localStorage.setItem("incupg1bought", incupg1bought);
    localStorage.setItem("incupg2bought", incupg2bought);

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
    document.getElementById("schbought").innerHTML = dispschtimesbought;
    document.getElementById("schprice").innerHTML = currschprice;
    document.getElementById("facbought").innerHTML = dispfactimesbought;
    document.getElementById("facprice").innerHTML = currfacprice;


    
    
    
    
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
    if (totfengshui >= 100 && incupg1bought == 0) {
        document.getElementById("#incupg1").innerHTML = "#incupg1 { display: block; }";
    } else {
        document.getElementById("#incupg1").innerHTML = "#incupg1 { display: none; }";
    }
    if (totfengshui >= 500 && incupg2bought == 0) {
        document.getElementById("#incupg2").innerHTML = "#incupg2 { display: block; }";
    } else {
        document.getElementById("#incupg2").innerHTML = "#incupg2 { display: none; }";
    }
    
}
var b = setInterval(fengprtick,1000);
function fengprtick() {

    fengshui = fengshui + incgain * dispinctimesbought * incmultiplier;
    fengshui = fengshui + disgain * dispdistimesbought;
    fengshui = fengshui + fengain * dispfentimesbought;
    fengshui = fengshui + schgain * dispschtimesbought;
    fengshui = fengshui + facgain * dispfactimesbought;



    totfengshui = totfengshui + incgain * dispinctimesbought * incmultiplier;
    totfengshui = totfengshui + disgain * dispdistimesbought;
    totfengshui = totfengshui + fengain * dispfentimesbought;
    totfengshui = totfengshui + schgain * dispschtimesbought;
    totfengshui = totfengshui + facgain * dispfactimesbought;
}



var incprice = 15;
var inctimesbought = 1;
var dispinctimesbought =0;
var incgain = 0.1;
var currincprice = 15;
function incense() {
    if (fengshui >= currincprice) {
        fengshui = fengshui - currincprice;
        inctimesbought++;
        dispinctimesbought++;
        currincprice = Math.floor( currincprice *  pricemultiplier);
    }
}




var disprice = 100;
var distimesbought = 1;
var dispdistimesbought =0;
var disgain = 1;
var currdisprice = 100;
function disiple() {
    if (fengshui >= currdisprice) {
        fengshui = fengshui - currdisprice;
        distimesbought++;
        dispdistimesbought++;
        currdisprice = Math.floor( currdisprice *  pricemultiplier);
    }
}

var fenprice = 1100;
var fentimesbought = 1;
var dispfentimesbought =0;
var fengain = 8;
var currfenprice = 1100;
function fengshuimaster() {
    if (fengshui >= currfenprice) {
        fengshui = fengshui - currfenprice;
        fentimesbought++;
        dispfentimesbought++;
        currfenprice = Math.floor( currfenprice *  pricemultiplier);
    }
}

var schprice = 12000;
var schtimesbought = 1;
var dispschtimesbought =0;
var schgain = 47;
var currschprice = 12000;
function fengshuischool() {
    if (fengshui >= currschprice) {
        fengshui = fengshui - currschprice;
        schtimesbought++;
        dispschtimesbought++;
        currschprice = Math.floor( currschprice *  pricemultiplier);
    }
}

var facprice = 130000;
var factimesbought = 1;
var dispfactimesbought =0;
var facgain = 260;
var currfacprice = 130000;
function fengshuifactory() {
    if (fengshui >= currfacprice) {
        fengshui = fengshui - currfacprice;
        factimesbought++;
        dispfactimesbought++;
        currfacprice = Math.floor( currfacprice *  pricemultiplier);
    }
}

var upg1price = 100;
var upg1bought = 0;
function clickupg1() {
    if (fengshui >= upg1price) {
        fengshui = fengshui - upg1price;
        clickermultiplier = clickermultiplier * 2;
        upg1bought = 1;
        
        var audio = document.getElementById("audio");
        audio.play();
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

var incupg1price = 100;
var incupg1bought = 0;
function incupg1() {
    if (fengshui >= incupg1price) {
        fengshui = fengshui - incupg1price;
        incmultiplier = incmultiplier * 2;
        incupg1bought = 1;
    }
}

var incupg2price = 500;
var incupg2bought = 0;
function incupg2() {
    if (fengshui >= incupg2price) {
        fengshui = fengshui - incupg2price;
        incmultiplier = incmultiplier * 2;
        incupg2bought = 1;
    }
}