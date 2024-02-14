
import { UploadButton } from "./types/UploadButton"




export const UploadButtonComponent: React.FC<{BUTTON: UploadButton}> = ({BUTTON}): JSX.Element => {

    console.log("Button render...")

   return (<button className = {BUTTON.className} onClick = {BUTTON.onclickFunc}>{BUTTON.value}</button>)
}

