import {
    HStack,
    Link,
    Text
} from "@chakra-ui/react"
import { FaDiscord, FaYoutube } from "react-icons/fa"
import { BevyIcon } from "./BevyIcon"
import { GodotIcon } from "./GodotIcon"
  
  export const Footer = () => (
      <HStack display={'flex'} spacing={'5rem'} justifyContent={'center'} align={'center'} bottom={0} position={'fixed'} w={'100%'} bgColor={'Background'}>
          <Link display={'flex'} alignItems={'center'} href="https://www.youtube.com/playlist?list=PLBmhkGNdurqgEZ0JlaDew3Gdk-3xElgu7" target='_blank'><Text margin={'1rem'}>YouTube Playlist</Text><FaYoutube size={'1.5rem'}/></Link>
          <Link display={'flex'} alignItems={'center'} href="https://github.com/decentraland/bevy-explorer" target='_blank'><Text margin={'1rem'}>Bevy Explorer</Text><BevyIcon h={'1.5rem'} /></Link>
          <Link display={'flex'} alignItems={'center'} href="https://github.com/decentraland/godot-explorer" target='_blank'><Text margin={'1rem'}>Godot Explorer</Text><GodotIcon h={'1.5rem'} /></Link>
          <Link display={'flex'} alignItems={'center'} href="https://discord.com/channels/894658869391933540/1058482438445215774" target='_blank'><Text margin={'1rem'}>DAO Discord Channel</Text><FaDiscord size={'1.5rem'}/></Link>
        </HStack>
  )
  