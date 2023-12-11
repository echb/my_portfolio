import { a, br, gTxtComp, h2Comp } from '../components/components'
import { social } from '../components/social'
import { CONSTANTS } from '../data'
import { ce } from '../uiLib'

export const footer = ce('footer', {
  className: 'footer',
  style: /* css */ `
    .footer{
      padding-top: 50px;
      margin-bottom: 100px;
    }
  `,
  child: [
    h2Comp.copy({
      className: ['email', 'underline'],
      style: /* css */ `
          .email{
            line-break:anywhere;
          }
        `,
      child: a.copy({
        text: CONSTANTS.EMAIL,
        attributes: {
          href: `mailto:${CONSTANTS.EMAIL}`,
        },
      }),
    }),
    ce('div', {
      className: 'f',
      style: /* css */ `
          .f{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-auto-flow: dense;
            margin: 50px 0px;
            grid-gap: 20px;
          }
        `,
      child: [
        gTxtComp.copy({
          child: [
            ce('span', {
              className: 'up_case',
              style: /* css */ `
                  .up_case{
                    text-transform: capitalize;
                  }
                `,
              text: CONSTANTS.F_NAME,
            }),
            br(),
            ce('span', {
              className: 'up_case',
              style: /* css */ `
                  .up_case{
                    text-transform: capitalize;
                  }
                `,
              text: CONSTANTS.POSITION,
            }),
          ],
        }),
        gTxtComp.copy({
          child: social,
        }),
        gTxtComp.copy({
          child: [
            ce('span', {
              className: 'up_case',
              style: /* css */ `
                  .up_case{
                    text-transform: capitalize;
                  }
                `,
              text: `${CONSTANTS.POSITION} ${CONSTANTS.F_NAME}`,
            }),
            br(),
            a.copy({
              attributes: {
                href: CONSTANTS.INSPIRED_WEB,
                target: 'blank',
              },
              child: ce('span', {
                className: 'up_case',
                style: /* css */ `
                  .up_case{
                    text-transform: capitalize;
                  }
                `,
                text: CONSTANTS.INSPIRED,
              }),
            }),
          ],
        }),
      ],
    }),
  ],
})
