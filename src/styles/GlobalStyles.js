import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

  // green
  --color-green-700: #009035;


  // black
  --color-black-900: #0A0A0A;
  --color-black-1000-50: rgba(0, 0, 0, 0.50);

  /* Grey */
  --color-grey-100: #eef6ee;
  --color-grey-600: #808080;
  
  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;

  @media (max-width: 1024px) {
    font-size: 50%;
  }
}

body {
  position: relative;
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}



/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

/* p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
} */

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

.slide {
  background-color: pink;
  display: none;
}

.active-slide {
  display: block;
  background-color: red;

}

.dot-white {
  cursor: pointer;
  transition: all 0.3s;
  background-color: #fff;
  opacity: 50%;
  height: 6px;
  width: 6px;
  border-radius: 10px
}

.active-dot__white {
  opacity: 100%;
  height: 33px;
}

.dot-green {
  cursor: pointer;
  transition: all 0.3s;
  background-color: #009035;
  opacity: 50%;
  height: 6px;
  width: 6px;
  border-radius: 10px
}

.active-dot__green {
  opacity: 100%;
  height: 33px;
}

.active-slide {
  background-color: green;
}

.right-animate{
  animation: fadein 3s;

  
}

@keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }
`;

export default GlobalStyles;
