import React from 'react'
import './Icon.css'

interface IconProps {
  icon: 'check' | 'user'
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  const ref = React.useRef(null);

  if (!icon) {
    return null;
  }

  const onClick = () => {
    console.log(ref);

    // if (ref.current) {
    //   ref.current.contentDocument.documentElement.style.stroke = 'yellow'
    // }

  }

  return (
    <>
    <button onClick={onClick}>oko</button>
    <object
      type="image/svg+xml"
      height="25"
      width="25"
      ref={ref}
      className='icon'
      data={`/src/icons/${icon}.svg`}
      />
      </>
  )
}

export default Icon