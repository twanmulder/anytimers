import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header className="site-header">
        <div className="container">
          <div className="site-header-large-bg">
            <span></span>
          </div>
          <div className="site-header-inner">
            <div className="brand header-brand">
              <h1 className="m-0">
                <a href="#">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>Anyimers.nl</title>
                    <defs>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="logo-b"
                      >
                        <stop stop-color="#ffcc2d" offset="0%" />
                        <stop stop-color="#fffb23" offset="100%" />
                      </linearGradient>
                      <path
                        d="M27.098 7.53l-9.441 9.44a8.084 8.084 0 0 0-.625.702 8 8 0 0 0 12.173 10.377l9.24-9.24A16.02 16.02 0 0 1 39 23c0 8.837-7.163 16-16 16S7 31.837 7 23 14.163 7 23 7c1.416 0 2.79.184 4.098.53z"
                        id="logo-a"
                      />
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="logo-d"
                      >
                        <stop stop-color="#fffb23" offset="0%" />
                        <stop stop-color="#ffcc2d" offset="100%" />
                      </linearGradient>
                      <path
                        d="M27.098 7.53l-9.441 9.44a8.084 8.084 0 0 0-.625.702 8 8 0 0 0 12.173 10.377l9.24-9.24A16.02 16.02 0 0 1 39 23c0 8.837-7.163 16-16 16S7 31.837 7 23 14.163 7 23 7c1.416 0 2.79.184 4.098.53z"
                        id="logo-c"
                      />
                    </defs>
                    <g
                      transform="translate(-7 -7)"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <use
                        fill="url(#logo-b)"
                        transform="rotate(45 23 23)"
                        xlinkHref="#logo-a"
                      />
                      <use
                        fill="url(#logo-d)"
                        transform="scale(-1 1) rotate(45 0 -32.527)"
                        xlinkHref="#logo-c"
                      />
                    </g>
                  </svg>
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
