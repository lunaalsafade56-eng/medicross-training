import React, { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
interface ButtonProps{
children:ReactNode,
className:string,
variant?:"primary"|"secondary",
disabled?:boolean,
to?:string,
onclick?:()=>void

}
function Button({children,className,variant="primary",disabled,to,onclick}:ButtonProps) {
  const styles={
primary:"border-gray-500 border-1 w-20 h-20 rounded-full flex items-center justify-center bg-opacity-40  bg-gray-800",
secondary:"rounded-[50%] w-26 h-26"
  }
  const base ="px-4 py-2  text-white"
  if(to){
  return(
    <Link className={`${base} ${className} ${styles[variant]}`}  to={to}>
      {children}
    </Link>
  )
  }

  return (
    <div>
      <button onClick={onclick} disabled={disabled} className={`${base} ${className} ${styles[variant]}`}>{children}</button>
    </div>
  )
}

export default Button
