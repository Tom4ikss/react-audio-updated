

export abstract class Button<T, R> {
    public readonly classArray: ["button-element"]&string[]
    public readonly className: string
    constructor(css_class: string[], public readonly value: string) {
        this.classArray = ["button-element"]
        this.className = this.classArray.join(' ') + ' ' + css_class.join(' ')
    }

    public abstract readonly onclickFunc: (arg: T) => R
}