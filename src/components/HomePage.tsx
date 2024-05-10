import {
    Box,
    Divider,
    Heading,
    Link,
    ListItem,
    OrderedList,
    Text,
    useColorModeValue
  } from "@chakra-ui/react"
  import { useEffect, useState } from "react"
  import { ColorModeSwitcher } from "./../ColorModeSwitcher"
  import { DaoIcon } from "./../components/DaoIcon"
  import { DclExplorerImage } from "./../components/DclExplorerImage"
  import { Footer } from "./../components/Footer"
  import { FoundationIcon } from "./../components/FoundationIcon"
  import AndroidIcon from "./../components/AndroidIcon"
  import MacOSIcon from "./../components/MacOSIcon"
  import WindowsIcon from "./../components/WindowsIcon"
  import LinuxIcon from "./../components/LinuxIcon"
  
  
  export const HomePage = () => {
    const iconColor = useColorModeValue('#444', '#FFF')
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
      <>
        <Box width={"100%"} justifyContent={"end"} display={'flex'} paddingX={5}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
        <Box fontFamily={"monospace"} textAlign="left" fontSize="lg" width={isMobile?"90%":"50%"} margin={'auto'}>
          <Box display={"flex"} flexDirection={isMobile ? 'column-reverse' : 'row'} alignContent={""} alignItems={"center"} mb={"1rem"} w={"100%"} justifyContent={isMobile?"revert":"space-between"}>
            <Box>
              <Heading color={"#ff2d55"} fontFamily={"monospace"} textAlign={'left'}>Decentraland DAO Explorers</Heading>
              <Text textAlign={'left'}>Building an alternative to play Decentraland in Mobile, VR and Desktop</Text>
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
        
          <Box>
            <Box mb="1rem" display={'flex'} alignItems={'center'}>
              <DclExplorerImage aspectRatio={1.6466} w="100%"/>
            </Box>
            <Text mt="1rem">If you want to try our Explorers, follow the instruction in section:</Text>
  
            <Box display={'flex'} flexDirection='row' alignItems={'center'}  mt="1rem" mb="1rem">
              <Box mr={'1rem'}>
                <AndroidIcon size={48} color={iconColor} />
              </Box>
              <Box>
                <Text fontSize="3xl">Mobile (Android)</Text>
              </Box>
            </Box>
            <OrderedList>
              <ListItem>Only need to go to <Link
                href="https://play.google.com/store/apps/details?id=org.decentraland.godotexplorer"
                target="_blank"
                rel="noopener noreferrer"
                color={"#ff2d55"}>
                Decentraland - PlayStore
              </Link> and click on Install</ListItem>
            </OrderedList>
            <Text mt="1rem">Note: This is a public testing</Text>
  
            <Divider mt="1rem" mb="1rem" />
            <Box display={'flex'} flexDirection='row' alignItems={'center'}  mt="1rem" mb="1rem">
              <Box mr={'1rem'}>
                <MacOSIcon size={48} color={iconColor} />
              </Box>
              <Box>
                <Text fontSize="3xl">Mobile (iOS)</Text>
              </Box>
            </Box>
            
            <OrderedList>
              <ListItem>Only need to go to <Link
                href="https://testflight.apple.com/join/KF4r3jlU"
                target="_blank"
                rel="noopener noreferrer"
                color={"#ff2d55"}>
                DCL Explorer beta - TestFlight
              </Link> and click on Download!</ListItem>
              <ListItem>If you don't have TestFlight, first download <b>TestFlight</b> and then enter the link again</ListItem>
            </OrderedList>
            <Text mt="1rem">Note: This is a public testing</Text>
  
            <Divider mt="1rem" mb="1rem" />
            <Box display={'flex'} flexDirection='row' alignItems={'center'}  mt="1rem" mb="1rem">
              <Box mr={'1rem'}>
                <Text fontSize="3xl">Desktop</Text>
              </Box>
              <Box mr={'1rem'}>
                <WindowsIcon size={48} color={iconColor} />
              </Box>
              <Box mr={'1rem'}>
                <MacOSIcon size={48} color={iconColor} />
              </Box>
              <Box mr={'1rem'}>
                <LinuxIcon size={48} color={iconColor} />
              </Box>
            </Box>
            <OrderedList>
              <ListItem>Go to <Link
                href="https://github.com/decentraland/bevy-explorer/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                color={"#ff2d55"}>
                Bevy - Releases page
              </Link></ListItem>
              <ListItem>Select the option which fits with your current platform (Windows, MacOS, or Linux). Note: if you're using Macs newer than 2019, M1M2 is your option.</ListItem>
              <ListItem>Download the option selected and extract the package wherever you want</ListItem>
              <ListItem>Execute by double-clicking the file `decentra-bevy` or `decentra-bevy.exe`</ListItem>
              <ListItem>(Windows) For now, when appearing a dialog of security risk, you need to click "More info" and then "Run anyway"</ListItem>
              <ListItem>(MacOS) For now, you need to make an exception of executing this binary. To do that, make sure you have opened Securiy&Privacy settings, then try to run the executable. A message will apear with a button "Allow anyway", click it and then try to open the executable again.</ListItem>
            </OrderedList>
  
            <Divider mt="1rem" mb="1rem" />
            
            <Text mt="2xl">Do you have any trouble or feedback? Please visit <Link
                href="https://discord.gg/6mGqPnjujT"
                target="_blank"
                rel="noopener noreferrer"
                color={"#ff2d55"}>
                Discord server
              </Link>, we'd glad to have you there and talk.</Text>

          </Box>
          <Box display={'flex'} justifyContent={'flex-end'} alignItems={'flex-end'} h={'3rem'} w={'100%'}> 
            <Text align={"right"}>
              Powered by Decentraland DAO
            </Text>
          </Box>
          <Box h={'5rem'} w={'100%'} />
        </Box>
        <Footer isMobile={isMobile} />
      </>
    ) 
  }
  