import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "eng",
  isMobileNavOpen: false,
  isChoseProductOpen: false,
  isOpenForm: false,
  dashboardRight: "/side_bg.svg",
  // dashboardRight: "/video.mp4",
  aboutInfo: [
    {
      id: "about-001",
      title: "Our Story",
      subtitle:
        "Founded by Abdulmecit Kurshun in 1997, Ibrahim Asia Company emerged as a beacon of hope in the aftermath of the Soviet Union's collapse, addressing the deficit of essential food products in Central Asia. What began as a personal endeavor swiftly evolved into a family-owned group of companies dedicated to facilitating trade and enhancing agricultural development across the region.",
      imgUrl: "/aboutBg1.svg",
    },
    {
      id: "about-002",
      title: "Our Evolution",
      subtitle:
        "In the face of adversity, Khadija Ghaznavi, Abdulmecit's spouse, courageously assumed the reins of the family business upon his untimely passing in 1999. Fueled by a relentless spirit of entrepreneurship, Khadija expanded the company's reach into Afghanistan in 2001, laying the foundation for what would become Ibrahim Asia Ltd.",
      imgUrl: "/aboutBg2.svg",
    },
    {
      id: "about-003",
      title: "Our Expansion",
      subtitle:
        "Over the years, our commitment to innovation and service excellence has led us to establish a robust presence in key markets. From the establishment of Ibrahim Asia Ltd. in Afghanistan in 2003 to the inception of Ibrahim Asia LLC in Uzbekistan in 2009, our journey has been marked by strategic growth and unwavering dedication. In 2015, IAC Group Dis Tic Ltd was established in Istanbul, Turkey, marking a pivotal moment as the headquarters of the company moved to Istanbul.",
      imgUrl: "/aboutBg1.svg",
    },
    {
      id: "about-004",
      title: "Our Turnkey Projects",
      subtitle:
        "At IAC Group, we specialize in delivering comprehensive turnkey solutions for the food processing industry. From conceptualization to execution, we handle every aspect of your project with precision and expertise. Our team of experienced professionals works tirelessly to design, implement, and optimize food processing facilities tailored to your unique needs and specifications.",
      imgUrl: "/aboutBg2.svg",
    },
    {
      id: "about-005",
      title: "Our Achievements",
      subtitle:
        "At IAC Group, we take pride in our role as pioneers of progress. From successfully exporting fresh cherries to South Korea and Norway in 2012 to spearheading the establishment of Uzbekistan's first cherry processing center in 2014, our legacy of innovation continues to shape the industry landscape. We have successfully delivered millions of dollars of projects to more than six countries to date. In 2017, IAC Group established its first service center in Tashkent, Uzbekistan, where our team can handle technical tasks of various difficulties, including complete installations, repairs, and after-sales servicing.",
      imgUrl: "/aboutBg1.svg",
    },
    {
      id: "about-006",
      title: "Our Partnerships",
      subtitle:
        "In 2014, IAC Group forged a landmark partnership with Bigtem Makine A.S., solidifying our position as the exclusive representative of Bigtem in Uzbekistan and Central Asia. This strategic alliance underscores our commitment to delivering cutting-edge solutions and driving industry advancement. In 2017, IAC Group became the exclusive representative of Urschel Laboratories in Central Asia. With a focus on turnkey agriculture and food processing projects, we continue to innovate, inspire, and empower communities across Central Asia and beyond.",
      imgUrl: "/aboutBg2.svg",
    },
    {
      id: "about-007",
      title: "Meet Our Leadership",
      subtitle:
        "Retired Honorary President: Khadija Ghaznavi\nVice President: Murat Kurshun \nAfter Sales Director: Ibrahim Kurshun \nJoin Us in Shaping the Future of Food \n \nIAC Group is not just a business; it's a legacy of resilience, innovation, and service excellence. With a team of dedicated professionals spanning the globe, we invite you to join us on our journey towards a brighter, more sustainable future for the food industry in Central Asia and beyond.",
      imgUrl: "/aboutBg1.svg",
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
      projectImgUrl: "/aboutBg2.svg",
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
      projectImgUrl: "/aboutBg2.svg",
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
      projectImgUrl: "/aboutBg2.svg",
    },
    {
      id: "project-007",
      projectName: "Flora garden",
      projectWork: "Various processing lines for pre-dehydration processing",
      projectInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      projectImgUrl: "/aboutBg1.svg",
    },
  ],
  products: [
    {
      id: "product-001",
      type: "single-machines",
      title: "Product title 01",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/productImg-1.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-002",
      type: "single-machines",
      title: "Product title 02",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/productImg-1.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-003",
      type: "single-machines",
      title: "Product title 03",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/productImg-1.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-004",
      type: "single-machines",
      title: "Product title 04",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/productImg-1.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-005",
      type: "single-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/productImg-1.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-006",
      type: "processing-lines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg1.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-007",
      type: "processing-lines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg1.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-008",
      type: "processing-lines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg1.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-009",
      type: "processing-lines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg1.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-010",
      type: "processing-lines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg1.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-011",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-012",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-013",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-014",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-015",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-021",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-022",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-023",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-024",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-025",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-031",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-032",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-033",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-034",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
    {
      id: "product-035",
      type: "cutting-machines",
      title: "Product title 05",
      description: "product description",
      infoText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      imgUrl: "/aboutBg2.svg",
      imgCollection: [
        "/aboutBg2.svg",
        "/productImg-1.svg",
        "/aboutBg1.svg",
        "/productImg-1.svg",
      ],
    },
  ],

  partners: [
    {
      id: "partner-001",
      name: "Bigtem Makine A.S.",
      description:
        "Bigtem is a specialized process engineering, design and manufacturing, company for food processing equipment located in Istanbul, Turkey since 1973. IAC Group is official exclusive representative of Bigtem in Uzbekistan, Central Asia.",
      imgUrl: "/partnerImg-1.svg",
      siteLink: "www.bigtem.com",
    },
    {
      id: "partner-002",
      name: "Urschel Laboratories Inc.",
      description:
        "Since 1910, Urschel has been designing and manufacturing precision industrial cutting machinery. From the invention of the Gooseberry Snipper to the development of the Comitrol®, TranSlicer®, and DiversaCut® series of machines, the focus has always been on finding innovative and efficient ways to improve customer productivity. IAC Group is official exclusive representative of Bigtem in Uzbekistan, Central Asia.",
      imgUrl: "/partnerImg-2.svg",
      siteLink: "www.urschel.com",
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
    toggleMobileNav(state) {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
    openChoseProduct(state) {
      state.isChoseProductOpen = true;
    },
    closeChoseProduct(state) {
      state.isChoseProductOpen = false;
    },
    closeMobileNav(state) {
      state.isMobileNavOpen = false;
    },
    toggleFormOpen(state) {
      state.isOpenForm = !state.isOpenForm;
    },
  },
});

export const {
  changeLanguage,
  toggleMobileNav,
  closeMobileNav,
  toggleFormOpen,
  openChoseProduct,
  closeChoseProduct,
} = uiSlice.actions;
export default uiSlice.reducer;
