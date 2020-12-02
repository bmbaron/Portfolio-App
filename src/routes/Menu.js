const Menu = [
  {
    id: 1,
    label: 'Home',
    pathname: '/',
    navbar: true,
    homepage: false,
    icon: '',
  },
  {
    id: 2,
    label: 'About',
    pathname: '/about',
    navbar: true,
    homepage: true,
    icon: '',
  },
  {
    id: 3,
    label: 'Resume',
    pathname: '/resume',
    navbar: true,
    homepage: true,
  },
  {
    id: 4,
    label: 'Development',
    pathname: '/dev',
    navbar: true,
    homepage: true,
    icon: 'CodeOutlined',
  },
  {
    id: 5,
    label: 'PhotomoGrapher',
    pathname: '/photo',
    navbar: false,
    homepage: false,
  },
  {
    id: 6,
    label: 'BodyBuilder',
    pathname: '/workout',
    navbar: false,
    homepage: false,
  },
  {
    id: 7,
    label: 'Traveller',
    pathname: '/travel',
    navbar: false,
    homepage: false,
  },
  {
    id: 8,
    label: 'Github',
    pathname: 'https://github.com/wtlau',
    external: true,
    social: true,
  },
]

export default Menu