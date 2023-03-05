import { RiArrowDropDownLine, RiTeamFill } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdImportantDevices } from 'react-icons/md'
import { GrCloudSoftware } from 'react-icons/gr'
import { FaProductHunt } from 'react-icons/fa'
import { SiSpeedtest, SiAzuredevops } from 'react-icons/si'

export const Icons = {
  dropDown: <RiArrowDropDownLine size={30}></RiArrowDropDownLine>,
  menu: <AiOutlineMenu size={30} />,
  development: <MdImportantDevices size={30}></MdImportantDevices>,
  software: <GrCloudSoftware size={30}></GrCloudSoftware>,
  product: <FaProductHunt size={30}></FaProductHunt>,
  test: <SiSpeedtest size={30}></SiSpeedtest>,
  devops: <SiAzuredevops size={30}></SiAzuredevops>,
  team: <RiTeamFill size={30}></RiTeamFill>,
}
