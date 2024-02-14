
import { Dispatch } from "redux"
import { fetchFiles } from "../asyncActions/files"
import { Button,  } from "./Button"



export class UploadButton extends Button<void, void> {

    static uniqueID = (nameA:string, nameI?: string):string[] => {
        const i_A: number = nameA.lastIndexOf(".")
        const ID: string = String(Math.trunc(Math.random() * ((Math.clz32(Math.LOG10E * i_A * 2580234.3432)) - (Math.E * i_A * 23454534537457.5673)) + (Math.cbrt(i_A*23454534537457.5673) * Math.LN2))).slice(1)
        if(nameI) {
            const i_I: number = nameI.lastIndexOf(".")
            return [ID + nameA.slice(i_A), ID + nameI.slice(i_I)]
        }

        return [ID+ nameA.slice(i_A)]

    }

    
    public readonly onclickFunc: () => void

    constructor(css_class:  string[],  value: string = "Upload Button", files: {audioFile?: File, imageFile?: File}, dispatch: Dispatch) {
        css_class.push("upload-button-element")
        super(css_class, value,)

            this.onclickFunc = async () => {
            if(!files.audioFile) {
                alert("Choose audio file")
                console.error('No audio file')
                return;
            } else {}

            if(!files.imageFile) {
                console.warn('No image file')
            }

            const ID = UploadButton.uniqueID(files.audioFile.name, files.imageFile?.name)
            
            dispatch<any>(fetchFiles(files, ID))

            
        }
    }
}
















