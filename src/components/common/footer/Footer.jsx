import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='footer'>
       <div className="max-width" >
            <div className="footer-sec1" >
                <img className="footer-logoBox" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomto" />
                <div className="footer-filters">
                    <div className="footer-filterBox"> <span>
                        <img className="footer-icon abs-center" src="https://tse1.mm.bing.net/th?id=OIP.YHufaYYtdq8EtHQRPAx_9QHaE8&pid=Api&P=0&h=180" alt="india flag" />
                    </span>
                        <span>India</span>
                        <span className= "footer-arrow" >&#709;</span></div>
                    <div className="footer-filterBox" ><span>🌐<span></span> English</span> <span className="footer-arrow" >&#709;</span></div>
                </div>
            </div>
            <div className="footer-sec2">
                <div className="footer-box">
                    <div className="boxTtl">ABOUT ZOMATO</div>
                    <p className="footer-boxOpt">Who We Are</p>
                    <p className="footer-boxOpt">Blog</p>
                    <p className="footer-boxOpt">Work With Us</p>
                    <p className="footer-boxOpt">Investor Relations</p>
                    <p className="footer-boxOpt">Report Fraud</p>
                </div>
                <div className="footer-box">
                    <div className="boxTtl">ZOMAVERSE</div>
                    <p className="footer-boxOpt">Zomato</p>
                    <p className="footer-boxOpt">Feeding India</p>
                    <p className="footer-boxOpt">Hyperpure</p>
                    <p className="footer-boxOpt">Zomaland</p>
                </div>
                <div className="footer-box">
                    <div className="boxTtl">FOR RESTAURANTS</div>
                    <p className="footer-boxOpt">Partner With Us</p>
                    <p className="footer-boxOpt">Apps For You</p>

                    <div className="boxTtl">FOR ENTERPRISES</div>
                    <p className="footer-boxOpt">Zomato For Work</p>
                </div>
                <div className="footer-box">
                    <div className="footer-boxTtl">LEARN MORE</div>
                    <p className="footer-boxOpt">Privacy</p>
                    <p className="footer-boxOpt">Security</p>
                    <p className="footer-boxOpt">Terms</p>
                    <p className="footer-boxOpt">Sitemap</p>
                </div>
                <div className="footer-box">
                    <div className="footer-boxTtl">SOCIAL LINKS</div>
                    <div className="footer-socialImgs">
                        <a href='' className="footer-socialImg-sec" >
                            <img className="footer-socialImg" src="https://tse4.mm.bing.net/th?id=OIP.VGx4qqzjJn11vAOydYwjVAHaHa&pid=Api&P=0&h=180" alt="linkedin" />
                        </a>
                        <a href='' className="footer-socialImg-sec" >
                            <img className="footer-socialImg" src="https://tse2.mm.bing.net/th?id=OIP.HfM6Z8U6mAD9iOJQitp4wAHaHa&pid=Api&P=0&h=180" alt="instagram" />
                        </a>
                        <a href='' className="footer-socialImg-sec" >
                            <img className="footer-socialImg" src="https://tse4.mm.bing.net/th?id=OIP.Ov3ayDymo6745Qfb7kctEQHaHa&pid=Api&P=0&h=180" alt="facebook" />
                        </a>
                        <a href='' className="footer-socialImg-sec" >
                            <img className="footer-socialImg" src="https://tse4.mm.bing.net/th?id=OIP.biG9UdrkNGTbvX1YvOvY4AHaHa&pid=Api&P=0&h=180" alt="twitter" />
                        </a>
                        <a href='' className="footer-socialImg-sec" >
                            <img className="footer-socialImg" src="https://tse3.mm.bing.net/th?id=OIP.9tAkCATSEViGU8f_9uA7VAHaHa&pid=Api&P=0&h=180" alt="youtube" />
                        </a>
                    </div>
                    <a href='' className="footer-app"><img className="footer-appImg" src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="google play store" /></a>
                    <a href='' className="footer-app"><img className="footer-appImg" src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="apple app store" /></a>
                </div>
            </div>
            <hr className="footer-breakLine" />
        </div>
      </div>
  )
}

export default Footer;