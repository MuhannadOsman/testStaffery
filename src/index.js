import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import { createRoot } from 'react-dom/client';
import  Routes from './Routes';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Routes tab="home" />);



