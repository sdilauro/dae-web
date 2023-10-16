import {
    Stack,
    Link,
    Text
} from "@chakra-ui/react"
import { FaDiscord, FaYoutube } from "react-icons/fa"
import { BevyIcon } from "./BevyIcon"
import { GodotIcon } from "./GodotIcon"
  
type FooterProps = {isMobile: boolean}
  export const Footer = (props:FooterProps) => (
    <Stack direction={"row"} display={'flex'} spacing={props.isMobile?'0':'5rem'} justifyContent={'center'} align={'center'} bottom={0} position={'fixed'} w={'100%'} bgColor={'Background'}>
          <Link m={"1rem"} display={'flex'} alignItems={'center'} href="https://www.youtube.com/playlist?list=PLBmhkGNdurqgEZ0JlaDew3Gdk-3xElgu7" target='_blank'>
              {props.isMobile ? '' : <Text mr={'1rem'}>YouTube Playlist</Text>}
              <FaYoutube size={'1.5rem'} />
          </Link>
          <Link m={"1rem"} display={'flex'} alignItems={'center'} href="https://github.com/decentraland/bevy-explorer" target='_blank'>
              {props.isMobile ? '' : <Text mr={'1rem'}>Bevy Explorer</Text>}
              <BevyIcon h={'1.5rem'} />
          </Link>
          <Link m={"1rem"} display={'flex'} alignItems={'center'} href="https://github.com/decentraland/godot-explorer" target='_blank'>
              {props.isMobile ? '' : <Text mr={'1rem'}>Godot Explorer</Text>}
              <GodotIcon h={'1.5rem'} />
          </Link>
          <Link m={"1rem"} display={'flex'} alignItems={'center'} href="https://discord.com/channels/894658869391933540/1058482438445215774" target='_blank'>
              {props.isMobile ? '' : <Text mr={'1rem'}>DAO Discord Channel</Text>}
              <FaDiscord size={'1.5rem'} />
          </Link>
    </Stack>
  )
  