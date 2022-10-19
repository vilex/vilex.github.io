import { NavOptions } from "../components/Nav"
import HomeSvgUrl from './../assets/home.svg'
import CourseSvgUrl from './../assets/course.svg'
import ContributionSvgUrl from './../assets/contribution.svg'
import GithubSvgUrl from './../assets/github.svg'

const list = [
  {
    name: '首页',
    link: '/home',
    icon: HomeSvgUrl
  },
  {
    name: '教程',
    link: '/course/quick-start',
    icon: CourseSvgUrl
  },
  {
    name: '贡献',
    link: '/about-us',
    icon: ContributionSvgUrl
  },
  {
    name: 'Github',
    link: 'https://github.com/vilex/vilex',
    icon: GithubSvgUrl
  },
]

const hash = window.location.hash.slice(1)
let active = list.findIndex(item => item.link == hash)

if (active < 0) active = 0

export default {
  active,
  list
} as NavOptions