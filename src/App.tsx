import {
  Box,
  ChakraProvider,
  Heading,
  Link,
  theme,
  Image,
  Text
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { DaoIcon } from "./components/DaoIcon"
import { FoundationIcon } from "./components/FoundationIcon"
import { Footer } from "./components/Footer"
import { useEffect, useState } from "react"




export const App = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 1024;
  
  
  return (
    <ChakraProvider theme={theme} >
      <Box width={"100%"} justifyContent={"end"} display={'flex'} paddingX={5}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
      <Box fontFamily={"monospace"} textAlign="left" fontSize="lg" width={isMobile?"90%":"50%"} margin={'auto'}>
        <Box display={"flex"} flexDirection={isMobile ? 'column-reverse' : 'row'} alignContent={""} alignItems={"center"} mb={"1rem"} w={"100%"} justifyContent={isMobile?"revert":"space-between"}>
          <Box>
            <Heading color={"#ff2d55"} fontFamily={"monospace"} textAlign={'left'}>Decentraland Alternative Explorers</Heading>
            <Text textAlign={'left'}>Expanding Decentraland Explorers: Mobile & VR in Godot and Desktop in Bevy</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} marginLeft={isMobile?'0':'1rem'} marginBottom={isMobile?'1.5rem':'0'} minW={136}>
            <Link
              href="https://decentraland.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FoundationIcon h="60px" aspectRatio={1} />
            </Link>
            <Link
              href="https://dao.decentraland.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DaoIcon h="76px" aspectRatio={1} />
            </Link>
          </Box>
        </Box>
      
        <Box >
          <Image margin={'auto'} my={"3rem"} src='gibbresh.png' fallbackSrc='https://via.placeholder.com/850x350' />
          <Text>After the goals achieved in the Protocol Squad we continue contributing to the Decentraland metaverse through the development of mobile clients with the Godot engine, oriented to Android and iOS platforms, with potential publication in App Store and Play Store and through the continuation of the development of the desktop client of the Bevy engine.</Text>
          <Text>On the other hand, we contributed to the Decentraland documentation by working in collaboration with the Foundation. </Text>
          <Text>For more info, you can see the{' '}
            <Link
            
              href="https://dao.decentraland.org/"
              target="_blank"
              rel="noopener noreferrer"
              color={"#ff2d55"}>
              proposal
            </Link>
            .
          </Text>
        </Box>
      </Box>
      <Box h={'8rem'} w={'100%'} />
      <Footer isMobile={isMobile} />
    </ChakraProvider>
  ) 
}
