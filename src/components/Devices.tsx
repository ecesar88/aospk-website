import React from 'react'

const Devices: React.FC<any> = ({ props }): JSX.Element => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Device {props.device}</h3>
      </div>
    </>
  )
}

export default Devices
