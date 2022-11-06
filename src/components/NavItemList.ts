export default class NavItemList {
  getNavItems() {
    var navItems = "";
    ["Home", "Dashboard", "Contact"].forEach((element, i) => {
      let navLink = i === 0 ? "nav-link active" : "nav-link link-dark";
      navItems += `<li class="nav-item">
      <a href="#" class="${navLink}" aria-current="page">
        ${element}
      </a>
    </li>`;
    });

    return navItems;
  }
}
