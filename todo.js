const checkbox = document.getElementById('checkbox')
if (checkbox) {
    checkbox.addEventListener('click', checkMode)
}


function checkMode() {
    if (checkbox.checked) {
        darkModeOn()
    } else {
        darkModeOff()
    }
}

function darkModeOn() {
    document.body.classList.add('dark-mode')
}

function darkModeOff() {
    document.body.classList.remove('dark-mode')
}