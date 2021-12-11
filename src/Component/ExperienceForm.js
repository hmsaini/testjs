import React, { useState } from "react";

const ExperienceForm=(props)=> {
    console.log(`Experience props value: ${JSON.stringify(props.parentCallback)}`)
    const [companyName,setCompanyName]=useState('')
    const [duration,setDuration]=useState('')

    const handleCompanyChange=(e)=>{
        console.log(`company: ${e.target.value}`)
        props.parentCallback['company'] = e.target.value
        setCompanyName(e.target.value)
    }
    const handleDurationChange=(e)=> {
        console.log(`Duration: ${e.target.value}`)
        props.parentCallback['duration'] = e.target.value
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