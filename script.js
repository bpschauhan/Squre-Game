let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");

s1.addEventListener("mouseenter", function() {
    let randomno = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${randomno}</h1>`;
});
s1.addEventListener("mouseleave", function() {
    s1.innerHTML = "<h1>1</h1>";
});


let clr = "red";
s2.addEventListener("mouseenter", function() {
    if(clr == "red"){
        s2.style.backgroundColor = clr;
        clr = "green";
    }else if(clr == "green"){
        s2.style.backgroundColor = clr;
        clr = "blue";
    }else{
        s2.style.backgroundColor = clr;
        clr = "red";
    }
});
s2.addEventListener("mouseleave", function() {
    s2.style.backgroundColor = "white";
});


s3.addEventListener("mouseenter", function() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    s3.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
});
s3.addEventListener("mouseleave", function() {
    s3.style.backgroundColor = "white";
})


s4.addEventListener("click", function() {

    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    s1.style.backgroundColor = `rgb(${a}, ${225}, ${225})`;
    s2.style.backgroundColor = `rgb(${225}, ${b}, ${225})`;
    s3.style.backgroundColor = `rgb(${225}, ${225}, ${c})`;
});
s4.addEventListener("mouseleave", function() {
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
})