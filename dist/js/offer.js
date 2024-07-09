const tabs = document.querySelectorAll(".offer__img");
// to put an active in all images
const contents = document.querySelectorAll(".offer__details");
// to put an active in all details

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab(); //this is just a variable
    tab.classList.add("active");
    const activeContent = document.querySelector(`#${tab.id}-content`);
    //$ it is used as its alias and use it to know the string that needs to be imported in JS, it is shorthand for the getElementById method
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
