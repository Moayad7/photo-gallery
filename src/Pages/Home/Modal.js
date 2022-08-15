import React from 'react'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -60%)',
    backgroundColor: 'FFF',
    padding: '50px',
    zIndex: 1000
}

export default function Modal({children,open,onClose}) {
    if (!open) return null
  return (
    <div style={MODAL_STYLES}>
        {children}
    </div>
  )
}
