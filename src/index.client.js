import {unstable_createRoot} from 'react-dom';
import App from './App.client';
// import './main.css'

const root = unstable_createRoot(document.getElementById('root'));
root.render(<App/>);