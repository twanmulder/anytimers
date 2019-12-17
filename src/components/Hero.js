import React from 'react'

import peopleSVG from '../img/people.svg'

class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="container-sm">
                <h1 className="hero-title h2-mobile mt-0 is-revealing">
                  Anytimers.nl
                </h1>
                <p className="hero-paragraph is-revealing">
                  THE website to track your anytimers. Add your friends, add
                  your anytimers, and start drinking!
                </p>
                <div className="hero-form newsletter-form field field-grouped is-revealing">
                  <div className="control">
                    <a
                      className="button button-primary button-block button-shadow"
                      href="#"
                    >
                      Get it on the App Store
                    </a>
                  </div>
                  <div>
                    <p className="button-divider">or</p>
                  </div>
                  <div className="control">
                    <a
                      className="button button-primary button-block button-shadow"
                      href="#"
                    >
                      Get it on the Play Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-illustration">
              <div className="hero-squares hero-squares-1 is-revealing">
                <svg
                  width="124"
                  height="64"
                  viewBox="0 0 124 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="50%"
                      x2="114.418%"
                      y2="50%"
                      id="squares-1-a"
                    >
                      <stop stopColor="#FEC105" offset="0%" />
                      <stop stopColor="#FEC105" stopOpacity="0" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 0h4v4H0V0zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zM12 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM24 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM36 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM48 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM60 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM72 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM84 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM96 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4z"
                    fill="url(#squares-1-a)"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="hero-squares hero-squares-2 is-revealing">
                <svg
                  width="64"
                  height="88"
                  viewBox="0 0 64 88"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="50%"
                      x2="114.418%"
                      y2="50%"
                      id="squares-2-a"
                    >
                      <stop stopColor="#FEC105" offset="0%" />
                      <stop stopColor="#FEC105" stopOpacity="0" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M80 574h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4z"
                    transform="rotate(90 359 279)"
                    fill="url(#squares-2-a)"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="hero-ball hero-ball-1 is-revealing">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      cx="56.15%"
                      cy="27.43%"
                      fx="56.15%"
                      fy="27.43%"
                      r="57.526%"
                      gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
                      id="ball-1-a"
                    >
                      <stop stopColor="#F8F7FF" offset="0%" />
                      <stop stopColor="#FEC105" offset="100%" />
                    </radialGradient>
                    <filter
                      x="-500%"
                      y="-500%"
                      width="1000%"
                      height="1000%"
                      filterUnits="objectBoundingBox"
                      id="dropshadow-ball-1"
                    >
                      <feOffset
                        dx="24"
                        dy="24"
                        in="SourceAlpha"
                        result="shadowOffsetOuter"
                      />
                      <feGaussianBlur
                        stdDeviation="24"
                        in="shadowOffsetOuter"
                        result="shadowBlurOuter"
                      />
                      <feColorMatrix
                        values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
                        in="shadowBlurOuter"
                      />
                    </filter>
                  </defs>
                  <circle
                    cx="200"
                    cy="200"
                    r="200"
                    fill="#FFF"
                    fillRule="evenodd"
                    style={{ filter: 'url(#dropshadow-ball-1)' }}
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="200"
                    fill="url(#ball-1-a)"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="hero-ball hero-ball-2 is-revealing">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      cx="56.15%"
                      cy="27.43%"
                      fx="56.15%"
                      fy="27.43%"
                      r="57.526%"
                      gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
                      id="ball-2-a"
                    >
                      <stop stopColor="#F8F7FF" offset="0%" />
                      <stop stopColor="#FEC105" offset="100%" />
                    </radialGradient>
                    <filter
                      x="-500%"
                      y="-500%"
                      width="1000%"
                      height="1000%"
                      filterUnits="objectBoundingBox"
                      id="dropshadow-ball-2"
                    >
                      <feOffset
                        dx="24"
                        dy="24"
                        in="SourceAlpha"
                        result="shadowOffsetOuter"
                      />
                      <feGaussianBlur
                        stdDeviation="24"
                        in="shadowOffsetOuter"
                        result="shadowBlurOuter"
                      />
                      <feColorMatrix
                        values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
                        in="shadowBlurOuter"
                      />
                    </filter>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="100"
                    fill="#FFF"
                    fillRule="evenodd"
                    style={{ filter: 'url(#dropshadow-ball-2)' }}
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="100"
                    fill="url(#ball-2-a)"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="hero-illustration-browser is-revealing">
                <img
                  style={{ width: '800px', height: '450px' }}
                  src={peopleSVG}
                  alt=""
                />
              </div>
              <div className="hero-ball hero-ball-3 is-revealing">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      cx="56.15%"
                      cy="27.43%"
                      fx="56.15%"
                      fy="27.43%"
                      r="57.526%"
                      gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
                      id="ball-3-a"
                    >
                      <stop stopColor="#F8F7FF" offset="0%" />
                      <stop stopColor="#FEC105" offset="100%" />
                    </radialGradient>
                    <filter
                      x="-500%"
                      y="-500%"
                      width="1000%"
                      height="1000%"
                      filterUnits="objectBoundingBox"
                      id="dropshadow-ball-3"
                    >
                      <feOffset
                        dx="24"
                        dy="24"
                        in="SourceAlpha"
                        result="shadowOffsetOuter"
                      />
                      <feGaussianBlur
                        stdDeviation="24"
                        in="shadowOffsetOuter"
                        result="shadowBlurOuter"
                      />
                      <feColorMatrix
                        values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
                        in="shadowBlurOuter"
                      />
                    </filter>
                  </defs>
                  <circle
                    cx="40"
                    cy="40"
                    r="40"
                    fill="#FFF"
                    fillRule="evenodd"
                    style={{ filter: 'url(#dropshadow-ball-3)' }}
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="40"
                    fill="url(#ball-3-a)"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="hero-ball hero-ball-4 is-revealing">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      cx="56.15%"
                      cy="27.43%"
                      fx="56.15%"
                      fy="27.43%"
                      r="57.526%"
                      gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
                      id="ball-4-a"
                    >
                      <stop stopColor="#F8F7FF" offset="0%" />
                      <stop stopColor="#FEC105" offset="100%" />
                    </radialGradient>
                    <filter
                      x="-500%"
                      y="-500%"
                      width="1000%"
                      height="1000%"
                      filterUnits="objectBoundingBox"
                      id="dropshadow-ball-4"
                    >
                      <feOffset
                        dx="24"
                        dy="24"
                        in="SourceAlpha"
                        result="shadowOffsetOuter"
                      />
                      <feGaussianBlur
                        stdDeviation="24"
                        in="shadowOffsetOuter"
                        result="shadowBlurOuter"
                      />
                      <feColorMatrix
                        values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
                        in="shadowBlurOuter"
                      />
                    </filter>
                  </defs>
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFF"
                    fillRule="evenodd"
                    style={{ filter: 'url(#dropshadow-ball-4)' }}
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="url(#ball-4-a)"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="hero-ball hero-ball-5 is-revealing">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      cx="56.15%"
                      cy="27.43%"
                      fx="56.15%"
                      fy="27.43%"
                      r="57.526%"
                      gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
                      id="ball-5-a"
                    >
                      <stop stopColor="#F8F7FF" offset="0%" />
                      <stop stopColor="#FEC105" offset="100%" />
                    </radialGradient>
                    <filter
                      x="-500%"
                      y="-500%"
                      width="1000%"
                      height="1000%"
                      filterUnits="objectBoundingBox"
                      id="dropshadow-ball-5"
                    >
                      <feOffset
                        dx="24"
                        dy="24"
                        in="SourceAlpha"
                        result="shadowOffsetOuter"
                      />
                      <feGaussianBlur
                        stdDeviation="24"
                        in="shadowOffsetOuter"
                        result="shadowBlurOuter"
                      />
                      <feColorMatrix
                        values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
                        in="shadowBlurOuter"
                      />
                    </filter>
                  </defs>
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#FFF"
                    fillRule="evenodd"
                    style={{ filter: 'url(#dropshadow-ball-5)' }}
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="url(#ball-5-a)"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
