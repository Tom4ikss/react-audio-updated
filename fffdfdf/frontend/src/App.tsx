
import './App.css';
import { ListComponent } from './components/ListComponent';
import {  UploadReducer } from './components/reducers/UploadReducer';
import { UploadFormComponent } from './components/UploadFormComponent';


const App: React.FC = (): JSX.Element => {
  
  return <UploadReducer>
    <ListComponent />
    <UploadFormComponent />
  </UploadReducer>

}

export default App