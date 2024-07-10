const tabs = document.querySelectorAll(".menuTab__category");
const menus = document.querySelectorAll(".menuTab__details");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab();
    tab.classList.add("active");
    const activeMenu = document.querySelector(`#${tab.id}-content`);
    removeActiveMenu();
    activeMenu.classList.add("active");
  });
});

function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

function removeActiveMenu() {
  menus.forEach((menu) => {
    menu.classList.remove("active");
  });
}
