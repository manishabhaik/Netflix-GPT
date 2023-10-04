import './App.css';
import Body from './components/Body';
import { Provider} from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './components/Browse';
import store from './utils/store';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <Provider store={store}>
      <div className="">
      <RouterProvider router={appRouter} />
    </div>
    </Provider>

  );
}

export default App;
