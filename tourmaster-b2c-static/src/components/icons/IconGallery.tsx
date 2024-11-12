import { SVGProps } from "react"
const IconGallery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 18.333h5c4.167 0 5.833-1.666 5.833-5.833v-5c0-4.167-1.666-5.833-5.833-5.833H8c-4.167 0-5.833 1.666-5.833 5.833v5c0 4.167 1.666 5.833 5.833 5.833Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 8.333A1.667 1.667 0 1 0 8 5a1.667 1.667 0 0 0 0 3.333ZM2.725 15.792l4.108-2.759c.659-.441 1.609-.391 2.2.117l.275.242c.65.558 1.7.558 2.35 0l3.467-2.975c.65-.559 1.7-.559 2.35 0l1.358 1.166"
    />
  </svg>
)

export default IconGallery;