function getTransformTilt(event, container, ratioTilt, perspective) {
  if (!container) return
  const { left, top, width, height } = container.getBoundingClientRect()
  const relativeX = (event.clientX - left) / width
  const relativeY = (event.clientY - top) / height
  const tiltX = (relativeY - 0.5) * ratioTilt
  const tiltY = (relativeX - 0.5) * -ratioTilt
  const transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`

  return transform
}

export default getTransformTilt
