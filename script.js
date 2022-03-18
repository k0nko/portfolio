projectbutton = document.getElementById("projectsButton");
down = document.getElementsByClassName("down");
text = document.getElementsByClassName("text");
//navigation buttons
projectbutton.onclick = function (){
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
}); }
for (var i = 0; i < down.length; i++) {
    down[i].onclick = function (){
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
    }); 
}

}
//appear animation
window.addEventListener('scroll', function() {
    element = document.getElementsByClassName("section");
    for (var i = 0; i < element.length; i++) {
        var position = element[i].getBoundingClientRect();
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
            element[i].classList.add("appear");      
    }
    }
	
});
