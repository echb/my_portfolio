import { ce } from '../uiLib.js'

export const a = ce('a', {
  className: 'link',
  style: /* css */ `
    .link{
      text-decoration: none;
      color: inherit;
    }
  `,
})

const baseImg = ce('img', {
  className: 'img',
  style: /* css */ `
  .img{
    width: 100%;
  }
  .proj_im_border{
      border-radius:0.3rem;
    }
  `,
})

export const projectImgComp = (src, alt) => {
  const img = baseImg.copy({
    className: 'proj_im_border',
    attributes: {
      src,
      alt,
    },
  })
  return img
}

export const h2Comp = ce('h2', {
  className: 'sub_title',
  style: /* css */ `
    .sub_title{
      font-size: 3.5rem;
      text-transform: uppercase;
      line-height:1;
    }
    @media (max-width: 728px) {
      .sub_title{
        font-size: 3rem;
      }
    }
    .underline{
      text-decoration: underline;
    }
    .ta-ce{
      text-align:center;
    }
  `,
})

/** Any other text */
export const gTxtComp = ce('div', {
  className: 'text',
  style: /* css */ `
    .text{
      font-size: 20px;
    }
  `,
})

export const br = () => ce('br')

export const rowComp = ce('div', {
  style: /* css */ `
  .row {
    display:flex;
  }
  .jc-sb{
    justify-content: space-between;
  }
  .ali-e{
    align-items:end;
  }
  .jc-se{
    justify-content: space-evenly;
  }
`,
})

export const sectionBlockComp = ce('section', {
  className: 'top',
  style: /* css */ `
    .top{
      padding-top:150px;
    }
  `,
})

export const gridSpaceComp = ce('div', {
  className: 'space',
  style: /* css */ `
  .space{
    grid-column:span 5;
    z-index: 1;
    position: relative;
  }
`,
})

export const projectBlockComp = ce('div', {
  className: 'grid',
  style: /* css */ `
  .grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-flow: dense;
    margin: 50px 0px;
    grid-column-gap: 10px;
  }
`,
})

export const h2TxtComp = h2Comp.copy({
  className: ['sticky', 'underline', 'space'],
  style: /* css */ `
  .space{
    grid-column:span 3;
  }
  .sticky{
    position: sticky;
    height: min-content;
    top: 95px;
  }
`,
})

export const gear = ce('span', {
  text: 'settings',
  className: ['a', 'material-symbols-outlined'],
  style: /* css */ `
    .a{
      font-size: 30px;
    }
  `,
})

export const progressGear = ce('div', {
  className: 'box',
  style: /* css */ `
      .box{
        position: absolute;
        justify-content: center;
        display: inline-flex;
        align-items: center;
        animation: animName 2s linear infinite;
        top: -12px;
        right: -10px;
      }
  
      @keyframes animName {
      0%{
          transform: rotate(0deg);
        }
      100%{
          transform: rotate(360deg);
        }
      }
    `,
})
