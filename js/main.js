const $modalWindow = document.querySelector('.modal');
const $modalButton = document.querySelectorAll('.card_button');
const $formButton = document.querySelector('.btn_send');

console.log($modalButton);

$modalButton.forEach((i) => {
    i.addEventListener('click', () => {
        $modalWindow.style.display = "flex";
    })
});

$formButton.addEventListener('click', () => {
    alert("Форма отправлена на почту");
    $modalWindow.style.display = "none";

})

window.onclick = function (event) {
    if (event.target == $modalWindow) {
        $modalWindow.style.display = "none";
    }
}