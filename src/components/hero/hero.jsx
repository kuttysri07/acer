import React from 'react';
import arrow from "../Assets/arrow_btn.png"
import pause from "../Assets/pause_icon.png"
import play from "../Assets/play_icon.png"
import "./hero.css"

export default function hero({setplayStatus,setheroCount,herotext,palyStatus,heroCount}){
  return (
    <div className='hero'>
        
        {palyStatus === true?null :<div className='herotext'>
            
            <p>{herotext.text1}</p>
            <p>{herotext.text2}</p>
        </div>  }
        
        {palyStatus === true?null :  <div className='explore' >
            <p>explore the Feature</p>
            <img src={ arrow} alt="" />
        </div>
         }
      
        <div className='playstatus'>
            <img onClick={()=>setplayStatus(!palyStatus)} src={palyStatus?pause:play} alt="" />
        </div>

        <div >
            <ul className='dots'>
                <li onClick={()=>setheroCount(0)}  className={heroCount=== 0? "dot orange":"dot"} ></li>
                <li onClick={()=>setheroCount(1)}  className={heroCount=== 1? "dot orange":"dot"} ></li>
                <li onClick={()=>setheroCount(2) } className={heroCount=== 2? "dot orange":"dot"} ></li>
            </ul>
        </div>
    </div>
  )
}
