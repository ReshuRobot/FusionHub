import "./App.css";
import BodyContainer from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { Provider } from "react-redux";
import AppStore from "./redux/AppStore";
const App = () => {
  //useOnlineStatus is a custom hook that returns true/false
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection</h1>;
  
  return (
    // Provider is a component that is used to provide the store to its child compenents 
    // AppStore is the store that is created using the configureStore method from the redux toolkit
    //AppStore is passed as a prop to the Provider Component
    
<Provider store={AppStore}>
<div className="App">
      <Header />
      <Outlet />

      {/* <BodyContainer /> */}
      {/* <Footer/> */}
    </div>
</Provider>
    
  );
};

export default App;
