import './App.css';
import Main from './Layout/Main';
import { RouterProvider } from "react-router-dom";
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={routes}>
        <Main></Main>
      </RouterProvider>
    </div>
  );
}

export default App;
