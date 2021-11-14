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
//finish dark mode functionality
//check all start and visible buttton 
function check(checked = true) {
    const cbs = document.querySelectorAll('input[name="tasck"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
}
const btn = document.querySelector('#btn-all');
btn.onclick = checkAll;

function checkAll() {
    check();
    document.querySelector('.del').style.visibility = 'visible';

    this.onclick = uncheckAll;
}

function uncheckAll() {
    check(false);
    this.onclick = checkAll;
    document.querySelector('.del').style.visibility = 'hidden';

}
//check all end and visible buttton
