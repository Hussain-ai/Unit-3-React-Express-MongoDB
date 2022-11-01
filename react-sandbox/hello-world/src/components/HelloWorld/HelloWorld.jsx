import React from 'react'

function HelloWorld(props) {
  
    console.log('These are the props data from my parent App component ', props)

    console.log(props.activties)
    
    return (
        <div>
            Hello {props.name}
            {props.activities.map(act => 
                <p key={act}>{act}</p>
            )}
        </div>
  )
}
export default HelloWorld;