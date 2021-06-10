const sub = document.querySelector(".sub");
const tag_2 = document.querySelector(".tag_2")

sub.addEventListener("click" , ()=>{
    sub.classList.toggle('clicked');
    tag_2.classList.toggle("clamp");
});