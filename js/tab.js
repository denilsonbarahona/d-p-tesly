const $tabs = document.querySelectorAll(".tab");
const $tab_content = document.querySelectorAll(".tab-content");

$tabs.forEach(($tab)=>{
    $tab.addEventListener("click",HandleTabClick);
})

$tab_content.forEach(($content)=>{
    $content.addEventListener("click", HandleTabContentClick)
})


function HandleTabContentClick(event){
    event.stopPropagation();
    setSelectedTab(event.target.parentElement);
}


function HandleTabClick(event){
    setSelectedTab(event.target);
}

function setSelectedTab($tab) {   
    const ParentTab = $tab.getAttribute("parent"); 
    const $tabPrevSelected = document.querySelector(`#${ParentTab} .is-selected`);
    
    if($tabPrevSelected)
        $tabPrevSelected.classList.remove("is-selected")
    
    $tab.classList.add("is-selected")
}