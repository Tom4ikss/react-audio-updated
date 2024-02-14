import React, { useCallback, useEffect, useRef, useState } from "react"
import { UploadButtonComponent } from "./UploadButtonComponent"
import { UploadButton } from "./types/UploadButton"
import { Button } from "./types/Button"
import { useDispatch } from "react-redux/es/hooks/useDispatch"

export const UploadFormComponent: React.FC = (): JSX.Element => {

    console.log("Form render...")
    
    const audioFile = useRef<HTMLInputElement>(null)
    
    const imageFile = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()
    
    const value = "Загрузить файлы"

    const [uploadButton, setButton] = useState<JSX.Element>()

    const getButton = useCallback( () => {
        setButton(<UploadButtonComponent BUTTON={new UploadButton(["upload-form-button"], value, {imageFile: imageFile.current?.files?.[0], audioFile: audioFile.current?.files?.[0]}, dispatch) as Button<void, void>}/>)
    }, [audioFile, imageFile, dispatch])

    useEffect((): void => {
        getButton()
    }, [getButton])

     
    

    return <div className="upload-form">
        <input ref = {audioFile} accept=".mp3" onChange = {getButton} type="file"></input><br/>
        <input ref = {imageFile} accept=".jpg" onChange = {getButton} type="file"></input><br/>
        {uploadButton}
    </div>
}




