import { dataProjects, dataSideProjects } from '../data'
import {
  h2Comp,
  projectBlockComp,
  sectionBlockComp,
  h2TxtComp,
  gridSpaceComp,
  a,
  projectImgComp,
  progressGear,
} from '../components/components'
import { ce } from '../uiLib'

export const projects = sectionBlockComp.copy({
  child: [
    h2Comp.copy({
      text: 'Projects',
      className: 'ta-ce',
    }),
    ...dataProjects.map((e) =>
      projectBlockComp.copy({
        child: [
          h2TxtComp.copy({
            child: a.copy({
              attributes: {
                href: e.web,
                target: 'blank',
              },
              text: e.name,
            }),
          }),
          gridSpaceComp.copy({
            child: a.copy({
              attributes: {
                href: e.web,
                target: 'blank',
              },
              child: projectImgComp(e.img, e.name),
            }),
          }),
        ],
      }),
    ),
  ],
})

export const sideProjects = sectionBlockComp.copy({
  child: [
    h2Comp.copy({
      text: 'side Projects',
      className: 'ta-ce',
    }),
    ...dataSideProjects.map((e) =>
      projectBlockComp.copy({
        child: [
          h2TxtComp.copy({
            text: e.name,
          }),
          gridSpaceComp.copy({
            child: ce('div', {
              child: [progressGear, projectImgComp(e.img, e.name)],
            }),
          }),
        ],
      }),
    ),
  ],
})
