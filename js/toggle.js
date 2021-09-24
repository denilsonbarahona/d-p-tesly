const $toggles = document.querySelectorAll(".toggle-container")
const $toggle_switches = document.querySelectorAll(".toggle-switch");
const $checkBoxs = document.querySelectorAll("input[type='checkbox']");

$checkBoxs.forEach(($checkBox)=>{
    $checkBox.addEventListener("change",HandelCheckboxChange);
})

$toggles.forEach(($toggle)=>{
    $toggle.addEventListener("click",HandleToggleClick)
})

$toggle_switches.forEach(($switch)=>{
    $switch.addEventListener("click",HandleSwitchClick);
})

function HandleSwitchClick(event) {
    event.stopPropagation()
    const checkBoxToggleId = event.target.parentElement.getAttribute("aria-labelledby");
    MoveSwitch(checkBoxToggleId);
}

function HandleToggleClick(event){
   const checkBoxToggleId = event.target.getAttribute("aria-labelledby");
   MoveSwitch(checkBoxToggleId);
}

function HandelCheckboxChange(event) {
    setToggleAriaProperty(event.target)
}

function setToggleAriaProperty($checkBox){
    const $toggle = $checkBox.parentElement;
    if( $checkBox.checked )
        $toggle.setAttribute("aria-checked", true);
    else 
        $toggle.setAttribute("aria-checked", false);
}

function MoveSwitch(checkBoxToggleId){
    const $checkBox = document.querySelector(`#${checkBoxToggleId}`);
    if($checkBox.checked)
        $checkBox.checked = false;
    else 
        $checkBox.checked = true;
    
    setToggleAriaProperty($checkBox)
}
