
export enum UploadActions {
    ADD_FILES = "ADD_FILES",
    DELETE_FILES = "DELETE_FILES"
}

interface IAdd {
    type: UploadActions.ADD_FILES,
    payload: {
        audio: string,
        image?: string
    }
}

interface IDelete {
    type: UploadActions.DELETE_FILES
}

export interface IFilesState {
    files: {
        audios: string[],
        images: string[]
    }
}

export type UploadActionType = IAdd | IDelete