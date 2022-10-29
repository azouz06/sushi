// var data=0;
// document.getElementById("root").innerHTML=data;
// function decrement(){
//     data=data-1;
//     document.getElementById("root").innerHTML=data;
// }
// function increment(){
//     data=data+1;
//     document.getElementById("root").innerHTML=data;
// }


// function produit(){
//     let som=3.5;
// document.getElementById("somroot").innerText=data*som;
// }



// window.onclick=function(){
//     document.getElementById("ach").innerHTML=""
// }
 
// function sushiavocat(id,name){
//     document.getElementById("prix-avocat").innerHTML=id;
//     document.getElementById("name-avocat").innerHTML=name;
    
// }

function AA(){
    document.getElementById("menu-tog").style.display="block";
}





var text=[]
var i=0;
var som=0;
function sushi(id,name){
    
    var p = document.createElement("p");
    text[i]=document.createTextNode(name)

    p.appendChild(text[i])
    document.getElementById("name").appendChild(p)

    som+=id;
    document.getElementById("somroot").innerHTML=som
    i++

}



function lwal (){
    document.getElementById("groupe1").style.display = "block";
    document.getElementById("groupe2").style.display = "none";
    document.getElementById("groupe3").style.display = "none";
}
function tani (){
    document.getElementById("groupe1").style.display = "none";
    document.getElementById("groupe2").style.display = "block";
    document.getElementById("groupe3").style.display = "none";
}
function talt (){
    document.getElementById("groupe1").style.display = "none";
    document.getElementById("groupe2").style.display = "none";
    document.getElementById("groupe3").style.display = "block";
}
function kolchi (){
    document.getElementById("groupe1").style.display = "block";
    document.getElementById("groupe2").style.display = "block";
    document.getElementById("groupe3").style.display = "blcok";
}
function sla() {
        document.getElementById("panier").style.display="block";

}
function x() {
    document.getElementById("panier").style.display="none";
}