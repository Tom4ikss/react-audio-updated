import { Dispatch } from "redux"
import { AddFiles } from "../reducers/UploadReducer"

type resData = {
        audio:string,
        image: string
    }

export const fetchFiles = (files: {audioFile?: File, imageFile?: File}, id: string[]) => {
    return async function(dispatch: Dispatch) {
        if (files.audioFile) {
            const formData = new FormData()
            formData.append("audio", files.audioFile, id[0])
            files.imageFile ? formData.append("image", files.imageFile, id[1]) : console.log()
            await fetch(`http://localhost:3011/upload`, {
                method: 'POST',
                body:  formData
                })
                .then(res => res.json())
                .then((Data: resData) => {
                    
                    dispatch(AddFiles(Data))
                })
        } else throw new Error("che blya")

    }


}