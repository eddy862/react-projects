import React from 'react'

type Props = {
  text: string
}

const NavButton: React.FC<Props> = ({text}: Props) => {
  return (
    <button className='h-full px-8 hover:bg-emerald-800 font-bold'>{text}</button>
  )
}

export default NavButton