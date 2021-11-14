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