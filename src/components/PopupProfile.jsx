import { Component , useState, useEffect  } from "react";


 function PopupProfile(props) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1)
    }, 1000);
  }, [count]);
     
  
  
    return (
        <div className='popup'>
          <div className='popup_inner'>
          
            <h1>{ props.profile.firstName }</h1>
            <h1>{ props.profile.lastName }</h1>
            <h1>{ props.profile.EmailaAdress }</h1>
            <h1>{ props.profile.PhoneNumber }</h1>
            <h1>{ props.profile.Profession }</h1>
            <p>{count}</p>
            </div>
        </div>
      );
 
  }
  export default PopupProfile;