import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    darkGray: "#353535",
    midGray: "#898989",
    lightGray: "#e0e0e0",
    accBlue: "#00A3E4",
    mainWhite: "#F9F8F8",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}> {children} </ThemeProvider>
)

export default Theme