import React from 'react'

class Hero extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     scaleAmount: '1',
  //     heroUIOpacity: '0',
  //   }

  //   this.scaleHeroImages = this.scaleHeroImages.bind(this)
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.scaleHeroImages)
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.scaleHeroImages)
  // }

  // scaleHeroImages() {
  //   var transformTarget = document.querySelector('.hero-transform-target')
  //   var maxScaleAmount

  //   let transformTargetHeight = transformTarget.offsetHeight
  //   let scrollPercentage =
  //     document.documentElement.scrollTop / transformTargetHeight

  //   // 1 => 0.55
  //   let scaleAmount = 1 - scrollPercentage
  //   // 0 => 11.5%
  //   let translateXAmount = 11.5 * scrollPercentage * 1.9

  //   if (window.innerWidth >= 1580) {
  //     maxScaleAmount = 0.4
  //   } else {
  //     maxScaleAmount = 0.55
  //   }

  //   if (scaleAmount <= 1) {
  //     if (scaleAmount >= maxScaleAmount) {
  //       transformTarget.style.transform = `scale(${scaleAmount}) translate(${translateXAmount}%, 0)`
  //     } else {
  //       transformTarget.style.transform = `scale(${maxScaleAmount}) translate(11.5%, 0)`
  //     }
  //   }

  //   if (scrollPercentage >= 0 && scrollPercentage <= 1) {
  //     this.setState({ heroUIOpacity: scrollPercentage * 1.7 })
  //   }
  // }

  render() {
    // const heroUIOpacity = this.state.heroUIOpacity

    return (
      <section className="section hero">
        <div className="container-inner">
          <article>
            <h1 className="hero-headline">
              <span className="hero-headline-text">
                <div className="word-container">
                  <div className="word">Any&nbsp;</div>
                </div>
                <div className="word-container">
                  <div className="word">Place</div>
                </div>
                <div className="word-container">
                  <div className="word">,</div>
                </div>
                <br />
                <div className="word-container">
                  <div className="word">Any&nbsp;</div>
                </div>
                <div className="word-container">
                  <div className="word">Time</div>
                </div>
                <div className="word-container">
                  <div className="word">.</div>
                </div>
              </span>
            </h1>

            <h4 className="hero-intro">
              Keep track of all your anytimers.
              <br />
              Wherever you are, whenever you are.
            </h4>
          </article>
        </div>
      </section>
      // <section className="container container-hero">
      //   <article className="container-inner">
      //     <div className="hero-scroll-container">
      //       <div className="hero-transform-target">
      //         <h1 className="hero-intro">
      //           Keep track of all your anytimers.
      //           <br />
      //           Wherever you are, whenever you are.
      //         </h1>

      //     <h2 className="hero-headline">
      //       <span className="hero-headline-text">
      //         <div className="word-container">
      //           <div className="word">Any&nbsp;</div>
      //         </div>
      //         <div className="word-container">
      //           <div className="word">Place</div>
      //         </div>
      //         <div className="word-container">
      //           <div className="word">,</div>
      //         </div>
      //         <br />
      //         <div className="word-container">
      //           <div className="word">Any&nbsp;</div>
      //         </div>
      //         <div className="word-container">
      //           <div className="word">Time</div>
      //         </div>
      //         <div className="word-container">
      //           <div className="word">.</div>
      //         </div>
      //       </span>
      //       <img
      //         alt=""
      //         className="hero-hand"
      //         height="540"
      //         sizes="(min-width: 80em) 100vw, 120vw"
      //         src="https://d33wubrfki0l68.cloudfront.net/be2a9e72f7d2bac82f9cbefd5a51018c261d0dab/7f9c0/images/home/hero-hands.png"
      //         srcSet="
      //         https://d33wubrfki0l68.cloudfront.net/fbe182a13e2e56bcd565095f16711152d6702bbc/999fb/images/home/hero-hands/hero-hands_480w.png   480w,
      //         https://d33wubrfki0l68.cloudfront.net/9d22355f1085ec8eeaab635e9da07b060e9d5534/4c14d/images/home/hero-hands/hero-hands_960w.png   960w,
      //         https://d33wubrfki0l68.cloudfront.net/b3f38af0531dd7d0f8f4e19bf21a7c39f8fc662c/d8213/images/home/hero-hands/hero-hands_1280w.png 1280w,
      //         https://d33wubrfki0l68.cloudfront.net/c7a197fc9b8ec87b6b55e0fab07269c7cabbca71/f2622/images/home/hero-hands/hero-hands_1440w.png 1440w,
      //         https://d33wubrfki0l68.cloudfront.net/f6ddaf6aabc16861cdcbcb46a99d30287cff6850/50220/images/home/hero-hands/hero-hands_1680w.png 1680w,
      //         https://d33wubrfki0l68.cloudfront.net/7dc35251f5ce29958087e97b70209262b1f330e4/b2ee2/images/home/hero-hands/hero-hands_1920w.png 1920w,
      //         https://d33wubrfki0l68.cloudfront.net/f4490df7c91771b71792745a7aaebf98c5342efd/7299c/images/home/hero-hands/hero-hands_2560w.png 2560w,
      //         https://d33wubrfki0l68.cloudfront.net/a047e2f1227f777d005b33fbca5a972a004b8229/dec43/images/home/hero-hands/hero-hands_2880w.png 2880w,
      //         https://d33wubrfki0l68.cloudfront.net/fa0b183ae137a2366bb178f45bc772bad3f9ee27/c30a4/images/home/hero-hands/hero-hands_3360w.png 3360w,
      //         https://d33wubrfki0l68.cloudfront.net/be2a9e72f7d2bac82f9cbefd5a51018c261d0dab/7f9c0/images/home/hero-hands.png                  3840w
      //       "
      //         width="960"
      //       />
      //       <img
      //         alt="Presentation UI"
      //         className="hero-ui"
      //         style={{ opacity: heroUIOpacity }}
      //         height="567"
      //         sizes="(-webkit-min-device-pixel-ratio: 2) 107.25vw,
      //  (-webkit-min-device-pixel-ratio: 2) and (min-width: 80em) 89.375vw,
      //  (min-resolution: 2dppx) 107.25vw,
      //  (min-resolution: 2dppx) and (min-width: 80em) 89.375vw,
      //  (min-width: 80em) 162.5vw,
      //  195vw"
      //         src="https://d33wubrfki0l68.cloudfront.net/79eec0e03f693f79b9a53f1134cba1d3cccb6d45/1a088/images/home/hero-ui.jpg"
      //         srcSet="
      //         https://d33wubrfki0l68.cloudfront.net/34eb8fc86f4241cd468889731ab0938d17b393df/c725a/images/home/hero-ui/hero-ui_468w.jpg   468w,
      //         https://d33wubrfki0l68.cloudfront.net/c0f937351da2d07adcf63b2f177d4af385df268e/d0832/images/home/hero-ui/hero-ui_936w.jpg   936w,
      //         https://d33wubrfki0l68.cloudfront.net/999cfe4fa1759905486bb46ad41e68a381949951/d917f/images/home/hero-ui/hero-ui_1248w.jpg 1248w,
      //         https://d33wubrfki0l68.cloudfront.net/43cf9185e4f1e4e00c138799e1cba7fa80c16fee/43fb7/images/home/hero-ui/hero-ui_1404w.jpg 1404w,
      //         https://d33wubrfki0l68.cloudfront.net/ce7f4a1b58da6c80b4e34280820359a2648eff79/f2423/images/home/hero-ui/hero-ui_1872w.jpg 1872w,
      //         https://d33wubrfki0l68.cloudfront.net/53582dee43ecc24d388ec9f4955b5a84f989e7a2/64cf1/images/home/hero-ui/hero-ui_2496w.jpg 2496w,
      //         https://d33wubrfki0l68.cloudfront.net/d7647791870ff3b6a6f4ebb2fea661b37b7460c2/2517e/images/home/hero-ui/hero-ui_2808w.jpg 2808w,
      //         https://d33wubrfki0l68.cloudfront.net/aaef2156f9e54e410bb4701bb0a415949e78a13d/07111/images/home/hero-ui/hero-ui_3276w.jpg 3276w,
      //         https://d33wubrfki0l68.cloudfront.net/79eec0e03f693f79b9a53f1134cba1d3cccb6d45/1a088/images/home/hero-ui.jpg               3744w
      //       "
      //         width="936"
      //         title=""
      //       />
      //     </h2>
      //       </div>
      //     </div>
      //   </article>
      // </section>
    )
  }
}

export default Hero
