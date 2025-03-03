import React from 'react'

const SandwitchButton = ({ setOpen }) => {
    return (
        <button onClick={() => setOpen((prev) => !prev)}>
            Button
        </button>
    )
}

export default SandwitchButton;