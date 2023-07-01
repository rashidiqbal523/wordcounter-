import React from 'react'
export default function Navbar(props) {
    return (
      <>   
         <div className='container text-center '>
              <div className= {`form-check form-switch ${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input d-flex text-center justify-content-center " onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            </div>
         </div>
      </>
           
    )
}



