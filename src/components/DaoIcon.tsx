import {
    ImageProps,
    chakra,
    forwardRef,
} from "@chakra-ui/react"
import daoIcon from "../assets/images/dao-icon.png"


export const DaoIcon = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={daoIcon} ref={ref} {...props} />
})