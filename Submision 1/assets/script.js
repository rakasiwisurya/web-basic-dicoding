const menuIcon = document.querySelector('.menu-icon');
const headerList = document.querySelectorAll('.header-list ul li');

menuIcon.addEventListener('click', () => {
    headerList.style.display = 'inline-block';
    headerList.style.backgroundColor = 'red';
    // headerList.style.zIndex = '11';
    // headerList.style.position = 'relative';
    // headerList.style.top = '50px';
});