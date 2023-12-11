import { jobs } from '../data'
import { h2Comp, sectionBlockComp, a, gTxtComp } from '../components/components'
import { ce } from '../uiLib'

export const experience = sectionBlockComp.copy({
  child: () => {
    const job = ce('div', {
      className: 'jobs',
      style: /* css */ `
    .jobs{
      position: relative;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 15px;
      margin-bottom: 15px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    .jobs::after{
      content: "";
      width: 100%;
      position: absolute;
      height: 3px;
      background-color: var(--text-color-dark);;
      bottom: 0;
    }
    `,
    })

    return [
      h2Comp.copy({
        text: 'Experience',
        className: 'ta-ce',
      }),
      ...jobs.map((e) =>
        gTxtComp.copy({
          child: a.copy({
            attributes: {
              href: e.web,
              target: 'blank',
            },
            child: job.copy({
              child: [
                ce('span', { text: e.positon }),
                ce('span', { text: e.company }),
                ce('span', { text: e.date }),
              ],
            }),
          }),
        }),
      ),
    ]
  },
})
