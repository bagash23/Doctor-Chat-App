import React from 'react'
import IsMe from './IsMe'
import Other from './Other'

const Chatitem = ({isME, text, date, photo}) => {
    if (isME) {
        return <IsMe text={text} date = {date} />
    }
    return <Other text={text} date = {date} photo={photo}  />
    
}

export default Chatitem
