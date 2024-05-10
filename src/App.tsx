import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { HomePage } from "./components/HomePage"


export const App = () => {
  return (
    <ChakraProvider theme={theme} >
      <HomePage />
    </ChakraProvider>
  ) 
}
