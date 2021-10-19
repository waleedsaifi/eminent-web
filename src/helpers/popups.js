// import SchedulePopup from "../Components/SchedulePopup/SchedulePopup";
// import EminentApps from "../Components/Services/EminentApps";
// import ServicesPopup from "../Components/Services/ServicesPopup";
// import ContractsPopup from "../Components/Contracts/ContractsPopup";
// import AboutPopup from "../Components/About/AboutPopup";
// import { toggleElementsforPopup } from "utils/navigation";


// const PopupHandler = (mainContainer,setPopupOpen, setActivePopup ) => {


// //FIXME
// //  const closeSchedulePopup = () => {
// //   mainContainer.current.style.overflowY = "auto";
// //   const menu = document.querySelector(".menu");
// //   menu.removeAttribute("style");
// //   setPopupOpen(false);
// //   setActivePopup(null);
// //   toggleElementsforPopup("show");
// // };

//  const closeContentPopup = () => {
//   mainContainer.current.style.overflowY = "auto";
//   const menu = document.querySelector(".menu");
//   menu.removeAttribute("style");
//   setPopupOpen(false);
//   setActivePopup(null);
//   toggleElementsforPopup("show");
// };
// }

// export const popupManager = (activePopup) => {
//   switch (activePopup) {
//     case "schedule":
//       return <SchedulePopup closeHandler={PopupHandler.closeSchedulePopup} />;
//     case "services":
//       return <ServicesPopup closeHandler={PopupHandler.closeContentPopup} />;
//     case "contracts":
//       return <ContractsPopup closeHandler={PopupHandler.closeContentPopup} />;
//     case "about":
//       return <AboutPopup closeHandler={PopupHandler.closeContentPopup} />;
//     case "eminentApps":
//       return <EminentApps closeHandler={PopupHandler.closeContentPopup} />;
//     default:
//       break;
//   }
// };
