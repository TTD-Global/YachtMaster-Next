import { SVGProps } from "react"
const IconStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M19.948 8.339a1.061 1.061 0 0 0-.915-.731l-5.773-.524-2.282-5.343a1.063 1.063 0 0 0-1.955 0L6.74 7.085l-5.773.524a1.063 1.063 0 0 0-.604 1.86l4.364 3.826-1.287 5.668a1.063 1.063 0 0 0 1.58 1.149L10 17.135l4.978 2.976a1.063 1.063 0 0 0 1.582-1.148l-1.287-5.668 4.363-3.826c.321-.281.444-.725.312-1.13Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .667h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default IconStar;