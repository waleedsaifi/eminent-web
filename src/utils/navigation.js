export const toggleElementsforPopup = (display) => {
  //FIXME
  const elements = document.querySelectorAll(
    ".anime, .animeStatic, .animeCalltoAction, .footer ,.progressBar, #glContainer, .chooseStoryWrapper, .customBlockWrapper, .anime2, .eminent-apps, .services, .about, .projects"
  );

  // show an element
  var show = function (elem) {
    elem.style.opacity = "1";
    elem.style.removeProperty("display");
  };

  // hide an element
  var hide = function (elem) {
    elem.style.opacity = "0";
    elem.style.display = "none";
  };

  var toggle = function (elem) {
    // if the element is visible, hide it
    elem.forEach((item, index) => {
      if (display === "hide") {
        hide(item);
       // console.log(item.className + " Hide: " + index);
        
      } else {
        // otherwise, show it
        show(item);
       // console.log(item.className + " Show: " + index);
      }
      return;
    });
  };

  toggle(elements);

  return;
};
