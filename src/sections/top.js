import { appContent } from '../app'
import { gTxtComp, rowComp } from '../components/components'
import { social } from '../components/social'
import { CONSTANTS } from '../data'
import { ce } from '../uiLib'

export const topNav = gTxtComp.copy({
  className: 'a',
  style: /* css */ `
    .a{
      position: fixed;
      height: min-content;
      top: 70px;
      mix-blend-mode: difference;
      z-index: 2;
      color:blanchedalmond;
    }
    @media (max-width: 728px) {
      .a{
        top: 30px;
      }
    }
  `,
  child: rowComp.copy({
    className: ['row', 'jc-sb'],
    child: [
      ce('span', {
        className: 'a',
        style: /* css */ `
          .a{
            text-transform:capitalize;
          }
        `,
        text: CONSTANTS.F_NAME,
      }),
      ce('span', {
        child: social,
      }),
    ],
  }),
})

function outputsize() {
  topNav.style.width = `${appContent.clientWidth}px`
}

export const fluidTopNav = () =>
  new ResizeObserver(outputsize).observe(appContent)
