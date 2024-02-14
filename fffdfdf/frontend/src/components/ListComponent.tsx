import {  useEffect, useState} from "react"
import { useSelector } from "react-redux"
import { IFilesState } from "./types/UploadReducerTypes"


export const ListComponent: React.FC = (): JSX.Element => {


    const files = useSelector((state: IFilesState) => state.files)
    const [audioList, setList] = useState<JSX.Element[]>()

    useEffect(() => console.clear())

    useEffect(() => {
        setList(files.audios.map((el, i) => {
            return <li key = {i}><audio controls src={require(`../uploads/audios/${el}`)} ></audio></li>
        })
        )
     }, [files])

    return <ul>{audioList}</ul>
}
