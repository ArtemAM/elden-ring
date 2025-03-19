import { useState, useRef } from 'react'
import getTransformTilt from '../utils/getTransformTilt'

function ContainerTilt({ children, classContainer, ratioTilt, perspective }) {
  const [transformStyle, setTransformStyle] = useState('')
  const containerRef = useRef(null)

  const handleMouseMove = (event) => {
    if (!containerRef.current) return
    const newTransform = getTransformTilt(
      event,
      containerRef.current,
      ratioTilt,
      perspective,
    )
    setTransformStyle(newTransform)
  }
  const handleMouseLeave = () => {
    setTransformStyle('')
  }
  return (
    <div
      ref={containerRef}
      className={classContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  )
}

export default ContainerTilt
