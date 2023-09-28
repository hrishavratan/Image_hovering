
var list1=document.querySelector("#dept1")
var img1=document.querySelector("#dept1 img");

list1.addEventListener("mousemove",function(dets){
    img1.style.left=dets.x+"px";
    img1.style.top=dets.y+"px";
})

list1.addEventListener("mouseenter",function(dets){
    img1.style.opacity=1;
})
list1.addEventListener("mouseleave",function(dets){
    img1.style.opacity=0;
})
