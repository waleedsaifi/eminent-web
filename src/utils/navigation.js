export const toggleElementsforPopup = () => {
  const animeElements = document.querySelectorAll(".anime");
  const animeCalltoActionElements =
    document.querySelectorAll(".animeCalltoAction");
  const footerElements = document.querySelectorAll(".footer");
  const progressBarElements = document.querySelectorAll(".progressBar");
  const glElements = document.querySelectorAll("#glContainer");
  // Show an element
  var show = function (elem) {
    elem.style.opacity = "1";
  };

  // Hide an element
  var hide = function (elem) {
    elem.style.opacity = "0";
  };

  var toggle = function (elem) {
    // If the element is visible, hide it
    elem.forEach((item, index) => {
      if (window.getComputedStyle(item).opacity === "1") {
        hide(item);
        console.log(item.className + " Hide: " + index);
        return;
      }

      if (document.querySelectorAll(".popup") === null) {
        // Otherwise, show it
        show(item);
        console.log(item.className + " Show: " + index);
      }
    });
  };

  toggle(animeElements);
  toggle(animeCalltoActionElements);
  toggle(footerElements);
  toggle(progressBarElements);
  toggle(glElements);
  return;
};
