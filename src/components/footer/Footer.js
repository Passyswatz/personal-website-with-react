import React from 'react'

export default function Footer() {
    return (
<footer>
        <div class="container">
        <div class="footerContainer">
          <div class="footerLogo">
            <img src="/image/logo2.png" alt="Logo" />
          </div>
          <div class="footerNav">
            <p><a href="#about">About me</a></p>
            <p><a href="#services">services</a></p>
            <p><a href="#">blogs</a></p>
            <p><a href="./template/portifolio.html">Portifolio</a></p>
            <p><a href="#contact">contact me</a></p>
          </div>
          <div class="footerMedias">
            <div class="footerMedia">
              <a href="https://www.linkedin.com/in/Paschal Og"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
            <div class="footerMedia">
              <a href="https://www.facebook.com/passyswatz"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </div>
            <div class="footerMedia">
              <a href="https://www.instagram.com/kingswatz/"
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
            
            <div class="footerMedia">
              <a href="https://github.com/passyswatz"
                ><i class="fab fa-github-alt"></i
              ></a>
            </div>
          </div>
          <span>Copyright ©2022 all rights reserved </span>
        </div>
      </div>
      </footer>
    )
}