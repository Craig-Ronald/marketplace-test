import * as React from "react"
const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <symbol id="external-link" viewBox="0 0 32 32">
      <path d="M25.042 5H19.5a1.5 1.5 0 0 1 0-3h9l.059.001a1.381 1.381 0 0 1 1.439 1.439l.001.059v9a1.5 1.5 0 0 1-3 0V6.957L14.363 19.593a1.384 1.384 0 1 1-1.958-1.958L25.041 4.999zm-1.866 12.294a1.412 1.412 0 1 1 2.824 0v8.471A4.235 4.235 0 0 1 21.765 30H6.236a4.235 4.235 0 0 1-4.235-4.235V10.236a4.235 4.235 0 0 1 4.235-4.235h8.471a1.412 1.412 0 1 1 0 2.824H6.236c-.78 0-1.412.632-1.412 1.412v15.529c0 .78.632 1.412 1.412 1.412h15.529c.78 0 1.412-.632 1.412-1.412v-8.471z" />
    </symbol>
    <use href="#external-link" />
  </svg>
)
export default ExternalLinkIcon;
