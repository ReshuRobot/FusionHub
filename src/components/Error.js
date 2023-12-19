import {useRouteError} from "react-router-dom";

const Error =() =>{
    const err= useRouteError();
  
    return (
        <>
        <div>Oops!</div>
        <div> Something went Wrong</div>
        <div>{err.status} : {err.statusText}</div>
        

        </>

    )
}
export default Error;