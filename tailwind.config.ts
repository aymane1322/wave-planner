import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        myBlack:'#303030',
        myGray:'#C4C4C4',
        myWhite:'#EBF2FC',
        myBlue:'#3774FF',
        myGreen:'#1BE781',
        myRed:'#D53A3A',
      },
      fontFamily:{
        myFont:["Ubuntu","Times New Roman"],
      }
    },
  },
  plugins: [],
};
export default config;
