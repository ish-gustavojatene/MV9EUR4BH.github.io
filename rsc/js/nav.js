//MENU NAVEGAÇÃO
function openNav() {
    const sideNav = document.getElementById("mySidenav");
    const main = document.getElementById("main");
    

    sideNav.style.width = "220px";
    main.style.marginLeft = "220px";
}
function closeNav() {
    const sideNav = document.getElementById("mySidenav");
    const main = document.getElementById("main");
    sideNav.style.width = "0";
    main.style.marginLeft = "0";
}
//MENU NAVEGAÇÃO