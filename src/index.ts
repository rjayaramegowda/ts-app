import NavItemList from "./components/NavItemList";

var navList = document.querySelector("#navlist");
if (navList) {
  navList.innerHTML = new NavItemList().getNavItems();
}
