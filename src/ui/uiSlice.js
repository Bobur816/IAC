import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "eng",
  aboutInfo: [
    {
      id: "about-001",
      title:
        "In 1996, Abdulmecit Kurshun (founder) explored the Central Asian market for trading food and agricultural products.",
      subtitle:
        "After the collapse of the soviet union, there was a deficit of various food products in the region.",
      imgUrl: "/aboutBg1.svg",
    },
    {
      id: "about-002",
      title:
        "In 1996, Abdulmecit Kurshun (founder) explored the Central Asian market for trading food and agricultural products.",
      subtitle:
        "After the collapse of the soviet union, there was a deficit of various food products in the region.",
      imgUrl: "/aboutBg2.svg",
    },
  ],
  projects: [
    {
      id: "project-001",
      projectName: "Uzmarkazsanoatexport",
      projectWork: "Sun dried apricot processing line",
      projectInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      projectImgUrl: "/aboutBg1.svg",
    },
    {
      id: "project-002",
      projectName: "Berad agro",
      projectWork: "Various processing lines for pre-dehydration processing",
      projectInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      projectImgUrl: "/aboutBg1.svg",
    },
    {
      id: "project-003",
      projectName: "Agrofresh",
      projectWork: "Fresh cherry processing line",
      projectInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      projectImgUrl: "/aboutBg1.svg",
    },
    {
      id: "project-004",
      projectName: "Spectrum trans",
      projectWork: "Raisin and sun dried apricot processing line",
      projectInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      projectImgUrl: "/aboutBg1.svg",
    },
    {
      id: "project-005",
      projectName: "Gold dried fruit",
      projectWork: "Dried herbs aspiration and calibration line",
      projectInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      projectImgUrl: "/aboutBg1.svg",
    },
    {
      id: "project-006",
      projectName: "Flora garden",
      projectWork: "Raisin processing line, capers processing line",
      projectInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      projectImgUrl: "/aboutBg1.svg",
    },
    {
      id: "project-007",
      projectName: "Uzmarkazsanoatexport",
      projectWork: "Various processing lines for pre-dehydration processing",
      projectInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      projectImgUrl: "/aboutBg1.svg",
    },
  ],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = uiSlice.actions;
export default uiSlice.reducer;
