import {
  FaHome,
  FaEnvelope,
  FaRegAddressBook,
  FaClipboardList,
  FaProductHunt,

  // FaSignInAlt,
} from 'react-icons/fa'
import { icons } from './Icons'

// ========logo =========== //
export const logo =
  'https://res.cloudinary.com/inam6530/image/upload/v1667486202/inamwebsolutions/Inam_n9s4i4.svg'
// ========Nav Bar=========== //

export const navbar = [
  { id: 1, path: '/', title: 'Home', icon: <FaHome /> },
  { id: 2, path: '/about', title: 'About Us', icon: <FaEnvelope /> },
  { id: 4, path: '/portfolios', title: 'Portfolios', icon: <FaProductHunt /> },
  { id: 5, path: '/services', title: 'Services', icon: <FaClipboardList /> },
  {
    id: 7,
    path: '/contactus',
    title: 'Contact Us',
    icon: <FaRegAddressBook />,
  },
  { id: 7, path: '/dashboard', title: 'Dashboard', icon: <FaRegAddressBook /> },
]

export const featureDropDown = [
  {
    id: 1,
    title: 'Autoscaling',
    description:
      'INAMWEBSOLUTIONS scales apps to meet user demand, automagically, based on load.',
    icon: icons.scale,
  },
  {
    id: 2,
    title: 'usage_metrics',
    description:
      'Real-time metrics to debug issues. Slow query added? We’ll show you exactly where..',
    icon: icons.activity,
  },
  {
    id: 3,
    title: 'production_ready',
    description: 'All websites components are tested and production ready.',
    icon: icons.flash,
  },
  {
    id: 4,
    title: '+99% Uptime',
    description:
      'Applications stay on the grid with high availability and high uptime guarantees.',
    icon: icons.server,
  },
  {
    id: 5,
    title: 'supreme_support',
    description:
      'Overcome any challenge with a supporting team ready to respond.',
    icon: icons.user,
  },
]
