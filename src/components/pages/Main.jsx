import React, { useContext, useState } from 'react'
import Report from './Report'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/Context'


const Main = () => {
    const context = useContext(UserContext);
    const [page, setPage] = useState(false)
      const{setInfo,info}=context

    // handling data submission to the state
const handleSmiley=(value)=>{
    const now = new Date();
    const date = now.toLocaleDateString();
    const time= now.toLocaleTimeString();
    
    setInfo({smilie:value,date:date,time:time}) 
}
   
    return (
        <>
            <div className="main-container">
                <div className="btn-container">
                    <button className='btn' onClick={() => setPage(!page)}>Report</button>
                </div>
            <div className="middle-container">
            <div className="smiley-container" >
                    <div className="smiley-face-cont" onClick={()=>handleSmiley("happy")}>
                        <div className="smiley-face happy" >
                            <div className="eye left-eye"></div>
                            <div className="eye right-eye"></div>
                            <div className="mouth happy-mouth"></div>
                        </div>
                    </div>
                    <div className="smiley-face-cont" onClick={()=>handleSmiley("natural")}>
                        <div className="smiley-face neutral">
                            <div className="eye left-eye"></div>
                            <div className="eye right-eye"></div>
                            <div className="mouth neutral-mouth"></div>
                        </div>
                    </div>
                    <div className="smiley-face-cont" onClick={()=>handleSmiley("sad")}>
                        <div className="smiley-face sad">
                            <div className="eye left-eye"></div>
                            <div className="eye right-eye"></div>
                            <div className="mouth sad-mouth"></div>
                        </div>
                    </div>
                </div>
                <div className="submit-container">
                    {
                        info.smilie&&<Link to='/information'><button className='btn'>Submit</button></Link>
                    }
                </div>
            </div>
                {
                    page && <Report />
                }
            </div>
        </>
    )
}

export default Main