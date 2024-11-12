import { SVGProps } from "react"
const IconTimerTick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    {...props}
  >
    <path
      fill="#0086C9"
      d="M16 30.173c6.384 0 11.56-5.175 11.56-11.56 0-6.384-5.176-11.56-11.56-11.56S4.44 12.23 4.44 18.613c0 6.385 5.176 11.56 11.56 11.56Z"
      opacity={0.4}
    />
    <path
      fill="#0086C9"
      d="M16 19.173c-.547 0-1-.453-1-1v-6.667c0-.546.453-1 1-1 .547 0 1 .454 1 1v6.667c0 .547-.453 1-1 1ZM19.853 5.44h-7.706a.956.956 0 0 1-.96-.96c0-.534.426-.974.96-.974h7.706c.534 0 .96.427.96.96a.967.967 0 0 1-.96.974Z"
    />
  </svg>
)

export default IconTimerTick;