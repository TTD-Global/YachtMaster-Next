import { SVGProps } from "react"
const IconSearchNormal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22.5 22l-2-2"
    />
  </svg>
)

export default IconSearchNormal
