console.log("Script1.js is connected and running ✅");

var tog=document.getElementById("toggle");
var pass=document.getElementById("pwd");

tog.addEventListener("click",function(){
    if(pass.type==="password"){
        pass.type="text";
        tog.textContent="hide";
    }
    else{
        pass.type="password";
        tog.textContent="Show";
    }
});

var tog1=document.getElementById("toggle1");
var pass1=document.getElementById("cpwd");

tog1.addEventListener("click",function(){
    if(pass1.type==="password"){
        pass1.type="text";
        tog1.textContent="hide";
    }
    else{
        pass1.type="password";
        tog1.textContent="Show";
    }
});

var namePattern=/^[a-zA-Z ]+$/;

var fnameflag=true;
var lnameflag=true;
var emailflag=true;
var pwdflag=true;
var cpwdflag=true;
var hobflag=true;
var fileflag=true;
var ageflag=true;
var bioflag=true;




// Firstname
var fn=document.getElementById("fname");
let war=document.createElement("p");
war.style.color="Red";
war.style.paddingLeft="5px";
war.style.marginTop="10px";
document.getElementById("fir").appendChild(war);

fn.addEventListener("input",function(){
    let value=fn.value;
    if(value===""){
        war.textContent="Name should not be Empty !!"
        fnameflag=false;
    }
    else if(!namePattern.test(value)){
        war.textContent="Name should Contain alphabets only !!";
        fnameflag=false;
        
    }
    else{
        war.textContent="";
        fnameflag=true;

    }
})




// LastName
var ln=document.getElementById("lname");
let warLn=document.createElement("p");
warLn.style.color="Red";
warLn.style.paddingLeft="5px";
warLn.style.marginTop="10px";
document.getElementById("las").appendChild(warLn);

ln.addEventListener("input",function(){
    let value=ln.value;
    if(value===""){
        warLn.textContent="Name should not be Empty !!";
        lnameflag=false;
    }
    else if(!namePattern.test(value)){
        warLn.textContent="Name should Contain alphabets only !!";
        lnameflag=false;
        
    }
    else{
        warLn.textContent="";
        lnameflag=true;
    }
})



// Email
var emailPattern =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
var em=document.getElementById("eid");
let warEm=document.createElement("p");
warEm.style.color="Red";
warEm.style.paddingLeft="5px";
warEm.style.marginTop="10px";
document.getElementById("ema").appendChild(warEm);

em.addEventListener("input",function(){
    let value=em.value;
    if(value === ""){
        warEm.textContent="Email should not be Empty !!";
        emailflag=false;
    }
    else if(!emailPattern .test(value)){
        warEm.textContent="Invalid Email Format !!";
        emailflag=false;
        
    }
    else{
        warEm.textContent="";
        emailflag=true;
    }
});



// Password
var pwdPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$&!%?*])[A-Za-z\d@$!%*?&]{8,}$/;
var pa=document.getElementById("pwd");
let warPa=document.createElement("p");
warPa.style.color="Red";
warPa.style.paddingLeft="5px";
warPa.style.marginTop="10px";
document.getElementById("pass").appendChild(warPa);
var passver="";

pa.addEventListener("input",function(){
    let value=pa.value;
    if(value === ""){
        warPa.textContent="Password not be Empty !!";
        pwdflag=false;
    }
    else if(!pwdPattern .test(value)){
        warPa.textContent = "Password should contain ,\n• min 8 characters\n• an uppercase letter\n• a lowercase letter\n• a digit\n• a symbol";
        warPa.style.whiteSpace = "pre-line"; 
        pwdflag=false;
    }
    else if(!(value === "") && (pwdPattern .test(value))){
        passver=value;
        warPa.textContent="";
    }
    else{
        warPa.textContent="";
        pwdflag=true;
    }
});




// Confirm Password
var cpa=document.getElementById("cpwd");
let warCpa=document.createElement("p");
warCpa.style.color="Red";
warCpa.style.paddingLeft="5px";
warCpa.style.marginTop="10px";
document.getElementById("cpass").appendChild(warCpa);

cpa.addEventListener("input",function(){
    let value=cpa.value;
    if(value === ""){
        warCpa.textContent="Password not be Empty !!";
        cpwdflag=false;
    }
    else if(!pwdPattern .test(value)){
        warCpa.textContent = "Password should contain ,\n• min 8 characters\n• an uppercase letter\n• a lowercase letter\n• a digit\n• a symbol";
        warCpa.style.whiteSpace = "pre-line"; 
        cpwdflag=false;
    }
    else if(passver!==value){
        warCpa.textContent="Password not Matching!!";
        cpwdflag=false;
    }
    else{
        warCpa.textContent="";
        cpwdflag=true;
    }
});


// Hobbies
var ho=document.getElementsByName("hobb");
var hob=document.createElement("p");
hob.style.color="Red";
hob.style.paddingLeft="5px";
hob.style.marginTop="10px";
document.getElementById("hobi").appendChild(hob);
var count=0;
for (let a of ho) {
    a.addEventListener("input", function () {
        count = 0; 
        for (let b of ho) {
            if (b.checked) count++;
        }

        if (count < 2) {
            hob.textContent = "Please select at least 2!";
            hobflag=false;
        } 
        else {
            hob.textContent = "";
            hobflag=true;
        }
    });
}




// file
var fi=document.getElementById("upl");
var fil=document.createElement("p");
fil.style.color="red";
fil.style.paddingLeft="5px";
fil.style.marginTop="10px";
document.getElementById("file").appendChild(fil);
var types=["application/pdf"];
var maxSize=2*1024*1024;
fi.addEventListener("input",function(){
    if(!types.includes(fi.files[0].type)){
        fil.textContent = "Only pdf file is supported";
        fileflag=false;
        fi.value="";
    }
    else if(fi.files[0].size>maxSize){
        fil.textContent = "Maximum size of file is 2MB";
        fileflag=false;
        fi.value="";
    }
    else{
        fil.textContent = "";
        fileflag=true;
    }
});


//age

var ag=document.getElementById("ag");
var age=document.createElement("p");
age.style.color="red";
age.style.paddingLeft="5px";
age.style.marginTop="10px";
document.getElementById("agge").appendChild(age);

ag.addEventListener("input",function(){
    let value=ag.value;
    if(value===""){
        age.textContent = "Please select the age";
        ageflag=false;
    }
    else if(value<18){
        age.textContent = "Age should not be less than 18";
        ageflag=false;
    }
    else{
        age.textContent = "";
        ageflag=true;
    }
});



//bio

var bi=document.getElementById("bio");
var bio=document.createElement("p");
bio.style.color="red";
bio.style.paddingLeft="5px";
bio.style.marginTop="10px";
document.getElementById("bioo").appendChild(bio);

bi.addEventListener("input",function(){
    let value=bi.value;
    if(value==="" || value===" "){
        bio.textContent = "bio can't be empty";
        bioflag=false;
    }
    else{
        bio.textContent = "";
        bioflag=true;
    }
});

var gen=document.getElementsByName("gender");
var genRes=false;

for(var a of gen){
    a.addEventListener("input",function(){
        genRes=false;
        for(var b of gen){
            if(b.checked){
                genRes=true;
                break;
            }
        }
    })
}



// var fnameflag=true;
// var lnameflag=true;
// var emailflag=true;
// var pwdflag=true;
// var cpwdflag=true;
// var hobflag=true;
// var genflag=true;
// var fileflag=true;
// var ageflag=true;
// var bioflag=true;

function validate(){
    if(fn.value==="" || ln.value==="" ||em.value==="" ||pa.value==="" ||cpa.value==="" ||fi.files.length===0 || ag.value==="" || bi.value==="" || !genRes ||count<2 ){
        alert("Please fill all the details");
    }
    else if(!fnameflag || !lnameflag ||!emailflag || !pwdflag || !cpwdflag || !hobflag || !fileflag || !ageflag || !bioflag ){
        alert("Please complete the form according to the input conditions");
    }
    else{
        alert("form submitted successfully");
        // fn.value="";
        // ln.value="";
        // em.value="";
        // pa.value="";
        // cpa.value="";
        // ag.value="";
        // bi.value="";
        // fi.files.length=0;
        // for(let a of gen){
        //     a.checked=false;
        // }
        // for(let a of ho){
        //     a.checked=false;
        // }

    }
}