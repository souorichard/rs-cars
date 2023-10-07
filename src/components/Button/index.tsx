import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

const textClass = 'text-lg font-semibold text-white uppercase'

export default function Button({ children }: ButtonProps) {
  return (
    <button className={`w-fit h-12 px-5 flex justify-center items-center gap-2 bg-red-600 hover:opacity-75 rounded transition-all ${textClass}`}>{children}</button>
  )
}