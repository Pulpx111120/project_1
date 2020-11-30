function toggleMenu() {
    let navigation = document.querySelector('.header__menu--res');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}