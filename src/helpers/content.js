import { lightTheme, darkTheme, BREAKPOINTS } from "../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import Contentful from "../helpers/contentful";
import {
  setMenuData,
  setStepsTextData,
  setScheduleData,
  setLightThemeData,
  setDarkThemeData,
  setHomeSection,
} from "../store/actions/actionCreator";

const useFetchThemeContent = () => {
  useEffect(() => {
    const _instance = Contentful.getInstance();
    
    //Get Menu
    _instance.client.getEntries({ content_type: "menu" }).then((res) => {
      const menu = res.items.reduce((acc, prev) => {
        acc = {
          ...acc,
          [prev.fields.title]: prev.fields,
        };

        return acc;
      }, {});

      if (menu) {
        dispatch(setMenuData(menu));
      }
    });
  
    //console.log(menuData);

    //Get Schedule Form
    _instance.client
      .getEntries({ content_type: "scheduleForm" })
      .then((res) => {
        const scheduleForm = res.items.reduce((acc1, prev1) => {
          acc1 = {
            ...acc1,
            [prev1.fields.title]: prev1.fields,
          };

          return acc1;
        }, {});
        if (scheduleForm) {
          dispatch(setScheduleData(scheduleForm));
        }
      });

  
    //Set themes
    dispatch(setDarkThemeData(darkTheme));
    dispatch(setLightThemeData(lightTheme));
  }, []);
};


export default useFetchThemeContent;
