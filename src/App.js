import { Main } from './Components/Main';
import './App.css';
import Hotels from './Components/Hotels';
import { RouterProvider, createBrowserRouter} from "react-router-dom";

function App() {

  const router = createBrowserRouter([{
    path:"/",
    element:<Main />
  }, {
    path:"/Hotels",
    element:<Hotels />
  }])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
