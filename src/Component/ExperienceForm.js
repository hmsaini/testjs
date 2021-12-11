import React, { useState } from "react";

const ExperienceForm=(props)=>{
    const [companyName,setCompanyName]=useState('')
    const [duration,setDuration]=useState('')

    const handleCompanyChange=(e)=>{
        setCompanyName(e.target.value)
    }
    const handleDurationChange=(e)=>{
        setDuration(e.target.value)
    }

    return(
        <form>
            <label>company</label>
            <input type="text" onChange={handleCompanyChange} value={companyName}/>
            <br/>
            <label>duration</label>
            <input type="text" onChange={handleDurationChange} value={duration}/>
        </form>
    )
}
export default ExperienceForm