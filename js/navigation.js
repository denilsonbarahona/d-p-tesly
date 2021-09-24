const $setting = document.querySelector("#btn-setting");
const $floatingButton = document.querySelector(".is-floating");
const $navigation = document.querySelector(".autoInfoContainer");
const $carsetting = document.querySelector(".carsetting");
const $carsettingExit = document.querySelector(".carsetting-exit");


/************************************************************************/

const $QuickSettings = document.querySelector("#quick-control");
const $Locks = document.querySelector("#locks");
const $QuickPanel = document.querySelector(".quickControl");
const $LockPanel = document.querySelector(".carsetting-lock");


$setting.addEventListener("click", HandleShowSettings);
$carsettingExit.addEventListener("click",HandleShowSettings)

$QuickSettings.addEventListener("click",HandleQuickSettingClick);
$Locks.addEventListener("click",HandleLockPanelClick);

function HandleQuickSettingClick(){
    $Locks.classList.remove("is-selected");
    $QuickSettings.classList.add("is-selected");
    $QuickPanel.style.display="block";
    $LockPanel.style.display="none";
}


function HandleLockPanelClick(){
    $QuickSettings.classList.remove("is-selected");
    $Locks.classList.add("is-selected");
    $QuickPanel.style.display="none";
    $LockPanel.style.display="flex";
}



function HandleShowSettings() { 
    
    if($carsetting.style.display ==="none" || !$carsetting.style.display) {
        $floatingButton.style.display="none";
        $navigation.style.display="none";
        $carsetting.style.display="grid";
    }else {
        $floatingButton.style.display="block";
        $navigation.style.display="block";
        $carsetting.style.display="none";
    }
    
}


