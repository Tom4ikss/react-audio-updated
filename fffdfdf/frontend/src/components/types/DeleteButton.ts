import { Button } from "./Button";


export class DeleteButton extends Button<void, void>{
    public readonly onclickFunc: () => void

    constructor(css_class:  string[], value: string = "Upload Button") {
        css_class.push("delete-button")
        super(css_class, value)
        this.onclickFunc = () => {

        }
    }

    
}