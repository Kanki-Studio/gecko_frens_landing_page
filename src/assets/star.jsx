import * as React from "react";
const Star = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M9.908 1.844c.632-1.77 3.136-1.77 3.767 0l1.803 5.051a2 2 0 0 0 1.167 1.195l5.072 1.947c1.712.657 1.712 3.078 0 3.734l-5.072 1.947a2 2 0 0 0-1.167 1.195l-1.803 5.052c-.632 1.77-3.135 1.77-3.767 0l-1.803-5.052a2 2 0 0 0-1.167-1.195L1.866 13.77c-1.711-.656-1.711-3.077 0-3.734L6.938 8.09a2 2 0 0 0 1.167-1.195l1.803-5.051Z"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 15.3394 -14.7916 0 11.792 11.904)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#03B9BB" />
        <stop offset={1} stopColor="#fff" />
      </radialGradient>
    </defs>
  </svg>
);
export default Star;
