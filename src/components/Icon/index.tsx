import { ElementType } from 'react';

type IconProps = {
  icon: ElementType
  className?: string
}

export default function Icon({ icon: Icon, className }: IconProps) {
  return <Icon className={`${className} hover:opacity-75 transition-all cursor-pointer`} />
}