import React from 'react'

const Errorpage = () => {
    return (
        <div style={{with: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h1 style={{fontSize: '200px', color: 'black', fontWeight: '600'}}>404</h1>
            <p style={{fontSize: '30px'}}>Page is not found</p>
        </div>
    )
}

export default Errorpage
