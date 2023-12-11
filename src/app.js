import { DApp, ce } from './uiLib.js'
import { sideProjects, projects } from './sections/projects.js'
import { hero } from './sections/hero.js'
import { experience } from './sections/experience.js'
import { skills } from './sections/skills.js'
import { topNav, fluidTopNav } from './sections/top.js'
import { footer } from './sections/footer.js'

export const appContent = ce('main', {
  child: [topNav, hero, experience, skills, projects, sideProjects, footer],
})

const app = () =>
  DApp(
    document.querySelector('body'),
    ce('div', {
      className: 'app',
      style: /* css */ `
        .app{
          max-width: 1080px;
          padding-left: 45px;
          padding-right: 45px;
          margin-left:auto;
          margin-right:auto;
        }
      `,
      child: appContent,
    }),
  )

fluidTopNav()

export default app
