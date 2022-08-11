import  { React , useState } from "react";
import PopupProfile from "./PopupProfile"
import Block from "./count";
function ButtonMore(props) {
    const [show , setShow] = useState(false);
  
    return (

        <>
      <button onClick={() => setShow(prev => !prev)}>informations</button>
      {show && <PopupProfile 
        profile={props.profile}
    />}
    <Block/>
    </>
    );

    
}
export default ButtonMore ;




