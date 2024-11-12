import { SVGProps } from "react"
const IconDot = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={4}
      height={4}
      viewBox="0 0 4 4"
      fill="none"
      {...props}
    >
      <circle cx={2} cy={2} r={2} fill="#667085" />
    </svg>
  )

export default IconDot;
