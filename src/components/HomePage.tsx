import {
  Box,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { ColorModeSwitcher } from "./../ColorModeSwitcher"
import AndroidIcon from "./../components/AndroidIcon"
import { DaoIcon } from "./../components/DaoIcon"
import { DclExplorerImage } from "./../components/DclExplorerImage"
import { Footer } from "./../components/Footer"
import LinuxIcon from "./../components/LinuxIcon"
import MacOSIcon from "./../components/MacOSIcon"
import WindowsIcon from "./../components/WindowsIcon"
import VRIcon from "./VRIcon"
import bevyWindowsSmartScreenGif from "../assets/images/bevy-smart-screen.gif"

type DesktopPlatform = 'windows' | 'linux' | 'macos' 

function getCurrentPlatform(): DesktopPlatform {
  if (navigator?.userAgent) {
    const userAgent = navigator.userAgent.toLowerCase()

    if (userAgent.includes('mac')) {
      return 'macos'
    } else if (userAgent.includes('linux')) {
      return 'linux'
    }
  }
  return 'windows'
}
  
export const HomePage = () => {
    const iconColor = useColorModeValue('#444', '#FFF')
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [selectedPlaftorm, setSelectedPlatform] = useState<DesktopPlatform>(getCurrentPlatform());
  
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
              <Heading color={"#ff2d55"} fontFamily={"monospace"} textAlign={'left'}>DecentralandDAO Explorers</Heading>
              <Text textAlign={'left'}>Building an alternative to play Decentraland on Mobile, VR, and Desktop</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} marginLeft={isMobile?'0':'1rem'} marginBottom={isMobile?'1.5rem':'0'} minW={136/2}>
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
            <Text mt="1rem">If you want to try our Explorers, follow the instructions in the proper section:</Text>
  
            <Box display={'flex'} flexDirection='row' alignItems={'center'}  mt="1rem" mb="1rem">
              <Box mr={'1rem'}>
                <AndroidIcon size={48} color={iconColor} />
              </Box>
              <Box>
                <Text fontSize="3xl">Mobile (Android)</Text>
              </Box>
            </Box>
            <OrderedList>
              <ListItem>You only need to go to <Link
                href="https://play.google.com/store/apps/details?id=org.decentraland.godotexplorer"
                target="_blank"
                rel="noopener noreferrer"
                color={"#ff2d55"}>
                Decentraland - PlayStore
              </Link> and click on Install</ListItem>
            </OrderedList>
  
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
              <ListItem>You only need to go to <Link
                href="https://testflight.apple.com/join/KF4r3jlU"
                target="_blank"
                rel="noopener noreferrer"
                color={"#ff2d55"}>
                DCL Explorer beta - TestFlight
              </Link> and click on Download</ListItem>
              <ListItem>If you don't have <b>TestFlight</b>, first download it and then enter the link again</ListItem>
            </OrderedList>
            <Text mt="1rem">Note: This is a public testing</Text>
  
            <Divider mt="1rem" mb="1rem" />
            <Box display={'flex'} flexDirection='row' alignItems={'center'}  mt="1rem" mb="1rem">
              <Box mr={'1rem'}>
                <Text fontSize="3xl">Desktop: Choose your OS</Text>
              </Box>
            </Box>
            <Box display={'flex'} flexDirection='row' alignItems={'center'} justifyContent={'center'}  mt="1rem" mb="1rem">
              <Box mr={'4rem'} onClick={() => setSelectedPlatform('windows') } opacity={selectedPlaftorm === 'windows' ? 1.0: 0.5} cursor={'pointer'}>
                <WindowsIcon size={48} color={iconColor} />
              </Box>
              <Box mr={'4rem'} onClick={() => setSelectedPlatform('macos') } opacity={selectedPlaftorm === 'macos' ? 1.0: 0.5} cursor={'pointer'}>
                <MacOSIcon size={48} color={iconColor} />
              </Box>
              <Box mr={'4rem'} onClick={() => setSelectedPlatform('linux') } opacity={selectedPlaftorm === 'linux' ? 1.0: 0.5} cursor={'pointer'}>
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
              { 
                selectedPlaftorm === 'linux' && 
                <>
                  <ListItem>Click to download the option with the next format <b>bevy-explorer-202X-MM-DD-HH-mm-SS-linux-x86_64.tar.gz</b></ListItem>
                  <ListItem>Extract the file by right-clicking the file and selecting <b>Extract</b>, or run the command <b>tar –xvzf file_name.tar.gz</b></ListItem>
                  <ListItem>Execute by double-clicking the file <b>decentra-bevy</b> or running the command <b>./decentra-bevy</b></ListItem>
                  <ListItem>Note: you may grant executable permission to the file, run <b>chmod +x decentra-bevy</b>.</ListItem>
                </>
              }
              { 
                selectedPlaftorm === 'windows' && 
                <>
                  <ListItem>Click to download the option with the next format <b>bevy-explorer-202X-MM-DD-HH-mm-SS-windows-x86_64.zip</b></ListItem>
                  <ListItem>Extract the file by right-clicking the file and selecting <b>Extract</b></ListItem>
                  <ListItem>Execute by double-clicking the file <b>decentra-bevy.exe</b></ListItem>
                  <ListItem>For now you may see the smart protect blue dialog.</ListItem>
                  <Box>
                    <Image src={bevyWindowsSmartScreenGif} />
                  </Box>
                </>
              }
              { 
                selectedPlaftorm === 'macos' && 
                <>
                  <ListItem>Click to download the option with the next format <b>bevy-explorer-202X-MM-DD-HH-mm-SS-macos-m1m2.zip</b></ListItem>
                  <ListItem>You'll find the <b>DecentralandBevyExplorer.app</b> file, you can open by double-clicking it</ListItem>
                  <ListItem>Note: (For now) Support is not available for desktop devices older than 2020 running on Apple Intel systems.</ListItem>
                </>
              }
            </OrderedList>
            <Divider mt="1rem" mb="1rem" />
            
            <Box display={'flex'} flexDirection='row' alignItems={'center'}  mt="1rem" mb="1rem">
              <Box mr={'1rem'}>
                <Text fontSize="3xl">VR</Text>
              </Box>
              <Box mr={'1rem'}>
                <VRIcon size={48} color={iconColor} />
              </Box>
            </Box>
            <Text>We plan to have a public link to test it in late August (2024). For now, we have a <Link
                href="https://www.youtube.com/watch?v=WlpDF1z4s9I&list=PLBmhkGNdurqgEZ0JlaDew3Gdk-3xElgu7&index=12"
                target="_blank"
                rel="noopener noreferrer"
                color={"#ff2d55"}>
                demonstration video
              </Link>.
            </Text>


            <Divider mt="1rem" mb="1rem" />
            
            <Text mt="2xl">Do you need any help or have some feedback? Please visit <Link
                href="https://discord.gg/6mGqPnjujT"
                target="_blank"
                rel="noopener noreferrer"
                color={"#ff2d55"}>
                our Discord server
              </Link>; we'd be glad to have you there and talk.
            </Text>
          </Box>
          <Box display={'flex'} justifyContent={'flex-end'} alignItems={'flex-end'} h={'3rem'} w={'100%'}> 
            <Text align={"right"}>
              Powered by DecentralandDAO
            </Text>
          </Box>
          <Box h={'5rem'} w={'100%'} />
        </Box>
        <Footer isMobile={isMobile} />
      </>
    ) 
  }
  