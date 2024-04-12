import React, { useContext } from 'react'
import { exportables } from '../myContext/MyContext'
const MainBody2Top = () => {
    let {oppenheimerImg,abigail2}=useContext(exportables)
  return (
    <div className='flex h-[55vh]'>
      <div className='w-[50%]  border-black h-[54vh]' id='oppenheimer'>
        
             <img src={oppenheimerImg} alt=''/>    
                 
                  </div>
      <main className='w-[50%] border-[1px] border-black h-[54vh] id="mainBody2Topright'>
      <img src={abigail2} alt=''/>  
      </main>
    </div>
  )
}

export default MainBody2Top