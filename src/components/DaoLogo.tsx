import {
    ImageProps,
    chakra,
    forwardRef,
} from "@chakra-ui/react"
import daologo from "../assets/images/dao-icon.png"


export const DaoLogo = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={daologo} ref={ref} {...props} />
})