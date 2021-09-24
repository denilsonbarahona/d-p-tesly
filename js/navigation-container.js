const $navigatorContainer = document.querySelector(".navigation-container");
const $tracker = document.querySelector(".navigation-tracker");

$navigatorContainer.addEventListener("click",HandleNavigatorClick);

function HandleNavigatorClick(){
    
    if($tracker.style.display)
        $tracker.style.display="";
    else 
        $tracker.style.display="block";
}