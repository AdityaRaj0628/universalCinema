// import React, { useContext } from 'react'
// import { exportables } from '../myContext/MyContext';
// const MainBottomBody2 = () => {
//     let {Trolls,Apples}=useContext(exportables)
//   return (
//     <div className='flex h-[54vh]'>
//       <div className='w-[50%]  border-black h-[54vh]' id='ted'>
//        <img src={Trolls} alt='TROLLS'/>
//       </div>
//       <main className='w-[50%] border-[1px] border-black h-[54vh] id="voice'></main>
//       <img src={Apples} alt='aPPLES'/>
//     </div>
//   )
// }

// export default MainBottomBody2

import React, { useContext } from 'react'
 import { exportables } from '../myContext/MyContext';
function MainBottomBody2() {
    let {Trolls,Apples}=useContext(exportables)
  return (
    <div className=' flex w-[50%]'>
        <img src={Trolls} alt='TROLLS'/>
        <img src={Apples} alt='aPPLES'/>
    </div>
  )
}

export default MainBottomBody2

  

