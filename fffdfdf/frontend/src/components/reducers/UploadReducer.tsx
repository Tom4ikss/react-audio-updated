
import { Provider } from "react-redux/es/exports"
import { applyMiddleware, createStore,  } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import * as UploadTypes from "../types/UploadReducerTypes"


const defaultState = {
    files: {
       audios:[],
       images:[] 
    }
}

const reducer = (state: UploadTypes.IFilesState  = defaultState, action: UploadTypes.UploadActionType): UploadTypes.IFilesState => {
    switch(action.type) {
        case UploadTypes.UploadActions.ADD_FILES:
            console.log(state)
            return {...state, files: {...state.files, audios: [...state.files.audios, action.payload.audio], images: action.payload.image ? [...state.files.images, action.payload.image] : [...state.files.images]}}
        default:
            return state

            
    }
}

export const AddFiles = (files: {}) => ({type: UploadTypes.UploadActions.ADD_FILES, payload: files})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))) //?

export const UploadReducer: React.FC<{children: React.ReactNode}> = ( {children} ):JSX.Element => {

    return <Provider store = {store}>
        { children }
    </Provider>
}