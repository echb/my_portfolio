const head = document.querySelector('head')
export function DApp(element, child) {
  element.appendChild(child)
  return element
}

/**
 * @typedef {Object} Param
 * @property {string} text - Indicates whether the Courage component is present.
 * @property {string|Array<string>} className - Indicates whether the Courage component is present.
 * @property {Object.<string, string>} attributes - Indicates whether the Courage component is present.
 * @property {string} style - Indicates whether the Courage component is present.
 * @property {(context:HTMLElement)=>CustomElement|Array<CustomElement>|HTMLElement|Array<HTMLElement>} child - Indicates whether the Power component is present.
 */

class CustomElement {
  #id
  #style
  #className
  #nodeChild

  get style() {
    return this.#style
  }

  get id() {
    return this.#id
  }

  get className() {
    return this.#className
  }

  get nodeChild() {
    return this.#nodeChild
  }

  setId(id) {
    this.#id = id ?? String(Math.floor(Math.random() * 1e8))
  }

  setChilds = (param, el) => {
    if (param?.child !== undefined) {
      if (typeof param?.child === 'function') {
        this.#nodeChild = param?.child(el)
      } else {
        this.#nodeChild = param?.child
      }

      if (Array.isArray(this.#nodeChild)) {
        el.append(...this.#nodeChild)
      } else {
        el.append(this.#nodeChild)
      }
    }
  }

  setData(el) {
    el.dataset[this.#id] = ''
  }

  setCssClasses = (param, el) => {
    if (param?.className !== undefined) {
      this.#className = param?.className
      if (typeof param?.className === 'string') {
        el.classList.add(param.className)
      } else {
        el.classList.add(...param?.className)
      }
    }
  }

  removeOldCss(id) {
    const y = document.querySelector(`style[data-${id}]`)
    if (y !== null) {
      y.remove()
    }
  }

  setCssStyle = (param) => {
    if (param?.style !== undefined) {
      this.#style = param.style
      const styles = document.createElement('style')
      styles.dataset[this.#id] = ''
      styles.innerHTML = param?.style
      head.append(styles)
      let tempNewRules = ''
      const tempSelectors = []

      for (let i = 0; i < styles.sheet.cssRules.length; i++) {
        const oldRule = styles.sheet.cssRules[i]
        let newRule

        if (oldRule?.selectorText) {
          tempSelectors.push(oldRule?.selectorText)
        }

        if (oldRule?.conditionText) {
          newRule = oldRule.cssText

          tempSelectors.forEach((e) => {
            if (!newRule.includes(e)) return
            const newRuleName = `[data-${this.#id}]${e}`

            newRule = newRule.replaceAll(e, `[data-${this.#id}]${newRuleName}`)
          })

          tempNewRules += newRule
        } else {
          const newRuleName = `[data-${this.#id}]${oldRule.selectorText}`
          newRule = oldRule.cssText.replace(oldRule.selectorText, newRuleName)
          tempNewRules += newRule
        }
      }
      styles.innerHTML = tempNewRules
    }
  }
}

/**
 * Class representing a dot.
 * @extends HTMLElement
 */
class AnyTag extends CustomElement {
  #el
  rawValue
  #tag

  /**
   * @param {keyof HTMLElementTagNameMap} tag
   * @param {Param} param
   */
  constructor(tag, param, isNew = true, id) {
    super()
    this.#tag = tag
    this.#el = document.createElement(tag)
    this.rawValue = param?.text ?? ''
    this.#el.textContent = this.rawValue
    this.#el.rawValue = this.rawValue
    this.setId(id)

    this.setData(this.#el)
    this.setCssStyle(param)
    this.setCssClasses(param, this.#el)

    if (param?.attributes) {
      const temp = Object.entries(param?.attributes)
      for (let i = 0; i < temp.length; i++) {
        this.#el.setAttribute(temp[i][0], temp[i][1])
      }
    }

    this.#el.copy = this.copy
    this.setChilds(param, this.#el)
    return this.#el
  }

  /**
   * @param {Param} param
   * @returns {PTag}
   */
  copy = (param) => {
    return new AnyTag(
      this.#tag,
      {
        text: param?.text,
        child: param?.child ?? this.nodeChild,
        attributes: param?.attributes,
        className: param?.className
          ? [this.className, param.className]
              .flat()
              .filter((e) => e !== undefined)
          : this.className,
        style: param?.style,
      },
      false,
      this.id,
    )
  }
}

/**
 *
 * @param {Param} param
 * @param {keyof HTMLElementTagNameMap} tag
 *
 */
export const ce = (tag, param) => new AnyTag(tag, param)
