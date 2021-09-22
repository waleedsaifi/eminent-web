export const toggleElementsforPopup = (display) => {
  //FIXME
  const elements = document.querySelectorAll(
    ".anime, .animeCalltoAction, .footer ,.progressBar, #glContainer, .chooseStoryWrapper, .customBlockWrapper, .anime2"
  );

  // show an element
  var show = function (elem) {
    elem.style.opacity = "1";
  };

  // hide an element
  var hide = function (elem) {
    elem.style.opacity = "0";
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
