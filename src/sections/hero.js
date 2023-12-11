import { CONSTANTS } from '../data.js'
import { br, h2Comp, sectionBlockComp } from '../components/components.js'
import { ce } from '../uiLib'

export const hero = sectionBlockComp.copy({
  child: [
    h2Comp.copy({
      child: [
        ce('span', { text: 'Frontend' }),
        br(),
        ce('span', { text: 'Developer' }),
      ],
    }),
    ce('div', {
      className: 'a',
      style: /* css */ `
        .a{
          display: flex;
          align-items: end;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `,
      child: [
        ce('span', {
          text: 'arrow_downward',
          className: ['a', 'material-symbols-outlined'],
          style: /* css */ `
            .a{
              font-size:4.5rem;
            }
          `,
        }),
        ce('span', {
          className: 'a',
          style: /* css */ `
            .a{
              text-transform:capitalize;
              font-size: 1.5rem;
              max-width: 300px;
            }
          `,
          text: 'I support designers and agencies with creative development',
        }),
        h2Comp.copy({
          className: 'custom_right',
          style: /* css */ `
            .custom_right{
              text-align: right;
              margin-bottom:0;
            }
          `,
          child: [
            ce('span', { text: CONSTANTS.Fi_NAME + ' ' }),
            br(),
            ce('span', { text: CONSTANTS.L_NAME }),
          ],
        }),
      ],
    }),
  ],
})
