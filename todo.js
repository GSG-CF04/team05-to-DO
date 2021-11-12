let addBtn = document.getElementById('add-item-btn');
const isDarkMode = localStorage.getItem('dark');
if (isDarkMode == 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('checkbox').setAttribute('checked', true);
}
//start dark mode functionality
const checkbox = document.getElementById('checkbox')
if (checkbox) {
    checkbox.addEventListener('click', checkMode)
}


function checkMode() {
    if (checkbox.checked) {
        localStorage.setItem('dark', 'true');
        document.body.classList.add('dark-mode')

    } else {
        localStorage.removeItem('dark')
        document.body.classList.remove('dark-mode')

    }
}