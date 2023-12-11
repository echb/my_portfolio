import { a } from './components'
import { CONSTANTS } from '../data'

const socialLink = a.copy({
  className: 'social_link',
  style: /* css */ `
    .social_link{
      padding-right: 6px;
    }
  `,
})

export const social = () => [
  socialLink.copy({
    text: 'Email,',
    attributes: {
      href: `mailto: ${CONSTANTS.EMAIL}`,
      target: 'blank',
    },
  }),
  socialLink.copy({
    text: 'Linkedin,',
    attributes: {
      href: `${CONSTANTS.LINKEDIN}`,
      target: 'blank',
    },
  }),
  socialLink.copy({
    text: 'Github',
    attributes: {
      href: `${CONSTANTS.GITHUB}`,
      target: 'blank',
    },
  }),
]
