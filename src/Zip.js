import React from 'react';
const Zip =(props)=>{
    return(
        <div >
            {props.zipcodes.map(zip =>(
                <div key={zip}>
                    <h1>{zip}</h1>
                </div>
            ))}
        </div>
    )
  }
  
  export default Zip;