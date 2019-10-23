import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.714,
  scaleRatio: 8 / 5,
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["400", "400i", "700"],
    },
  ],
  headerFontFamily: ["Open Sans", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  bodyColor: "hsla(0,0%,0%,0.73)",
  headerWeight: "700",
  bodyWeight: 400,
  boldWeight: 700
})
export default typography
