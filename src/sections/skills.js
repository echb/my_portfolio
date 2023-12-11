import { h2Comp, sectionBlockComp } from '../components/components'
import { dataSkills } from '../data'
import { ce } from '../uiLib'

export const skills = sectionBlockComp.copy({
  child: [
    h2Comp.copy({
      text: 'Skills',
      className: 'ta-ce',
    }),
    ce('ul', {
      className: 'skill',
      style: /* css */ `
        .skill{
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          max-width: 700px;
          list-style: none;
          margin: 0px auto;
          padding: 0;
          grid-gap: 5px;
        }
      `,
      child: dataSkills.map((e) => ce('li', { text: e })),
    }),
  ],
})
