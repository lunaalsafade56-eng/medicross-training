import React, { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
interface ButtonProps{
children:ReactNode,
className:string,
variant?:"primary"|"secondary",
disabled?:boolean,
to?:string,
onclick?:()=>void
type?:"submit"|"button"|"reset";

}
function Button({children,className,variant="primary",disabled,to,onclick,type}:ButtonProps) {
  const styles={
primary:"border-gray-500 border-1  ",
secondary:"rounded-[50%] w-30 h-30 text-center"
  }
  const base ="px-4 py-2  text-white cursor-pointer"
  if(to){
  return(
    <Link className={`${base} ${className} ${styles[variant]}`}  to={to}>
      {children}
    </Link>
  )
  }

  return (
    <div>
      <button type={type||"button"} onClick={onclick} disabled={disabled} className={`${base} ${className} ${styles[variant]}`}>{children}</button>
    </div>
  )
}

export default Button