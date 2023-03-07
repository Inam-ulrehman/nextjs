import {
  RiArrowDropDownLine,
  RiInstagramFill,
  RiTeamFill,
} from 'react-icons/ri'
import { AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { MdImportantDevices } from 'react-icons/md'
import { GrCloudSoftware } from 'react-icons/gr'
import { FaProductHunt, FaTwitterSquare } from 'react-icons/fa'
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
} from 'react-icons/bs'
import { SiSpeedtest, SiAzuredevops, SiJirasoftware } from 'react-icons/si'

export const Icons = {
  dropDown: <RiArrowDropDownLine size={30}></RiArrowDropDownLine>,
  menu: <AiOutlineMenu size={30} />,
  development: <MdImportantDevices size={30}></MdImportantDevices>,
  software: <SiJirasoftware size={30}></SiJirasoftware>,
  product: <FaProductHunt size={30}></FaProductHunt>,
  test: <SiSpeedtest size={30}></SiSpeedtest>,
  devops: <SiAzuredevops size={30}></SiAzuredevops>,
  team: <RiTeamFill size={30}></RiTeamFill>,
  email: <AiOutlineMail size={18}></AiOutlineMail>,
  mobile: <BsTelephone size={18}></BsTelephone>,
  instagram: <RiInstagramFill size={25}></RiInstagramFill>,
  facebook: <BsFacebook size={25}></BsFacebook>,
  linkedin: <BsLinkedin size={25}></BsLinkedin>,
  twitter: <FaTwitterSquare size={25}></FaTwitterSquare>,
}
