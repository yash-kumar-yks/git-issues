import React from 'react'
import { useEffect, useState } from "react"

function Box({data}) {
    const title=data.title;
    const label=data.labels;
    const pic=data.user.avatar_url;
  return (
    <div>
    {
        console.log(title,label,pic)
    }
    
    
    </div>
  )
}

export default Box