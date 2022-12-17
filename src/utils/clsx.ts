import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function (...args: any) {
  return twMerge(clsx(...args));
}