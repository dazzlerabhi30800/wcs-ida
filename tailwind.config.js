export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "video-img": "url('./images/Random Imgs/img1.jpg')",
        "hero-img": "url('./images/placeholder.png')",
        "error-img": "url('./images/Random Imgs/error-bg.jpg')",
      },
      fontSize: {
        h1: "30px",
        th1: "50px",
        dh1: "64px",

        h2: "25px",
        th2: "40px",
        dh2: "48px",

        h3: "20px",
        th3: "25px",
        dh3: "32px",

        h4: "16px",
        th4: "20px",
        dh4: "24px",

        p1: "12px",
        tp1: "14px",
        dp1: "16px",

        p2: "10px",
        tp2: "12px",
        dp2: "14px",
      },
      padding: {
        18: "72px",
        26: "104px",
      },
      colors: {
        darkBlue: "#0C1632",
        mediumBlue: "#0F1934",
        blue: "#1D2B4F",
        lightBlue: "#798196",
        cream: "#E6E6E6",
        grey: "#CCCCCC",
        green: "#0F9E32",
      },
      gap: {
        14: "56px",
        17: "68px",
        21: "84px",
        30: "120px",
      },
      width: {
        18: "72px",
      },
      height: {
        14: "56px",
        18: "72px",
      },
      backgroundSize: {
        "100%": "100%",
      },
      boxShadow: {
        new: "30px 30px 0 3px #1D2B4F",
        "new-reverse": "-30px 30px 0 3px #1D2B4F",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"],
      },
      screens: {
        sm: "460px",
        md: "760px",
        lg: "1040px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1700px",
        "4xl": "1900px",
      },
      gridTemplateRows: {
        // Simple 16 row grid
        // Complex site-specific row configuration
        // layout: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
