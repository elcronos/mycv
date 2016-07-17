import React from 'react'

export default Footer = () => (
<footer className="padding-50 ui-bg-color02">
   <div className="container-fluid nopadding">
      <div className="row wow fadeInDown" data-wow-delay=".2s" data-wow-offset="10">
         <div className="col-md-4">
            <h4 className="font-accident-two-normal uppercase">Camilo Pestana</h4>
            <p className="inline-block">
               Eficient web development available anytime
            </p>
            <div className="divider-dynamic"></div>
         </div>
         <div className="col-md-4 cv-link">
            <h4 className="font-accident-two-normal uppercase">Download cv</h4>
            <div className="dividewhite1"></div>
            <a href="files/CamiloPestana-Resume.pdf" download><i className="fa fa-long-arrow-down" aria-hidden="true"></i>English</a>
            <div className="divider-dynamic"></div>
         </div>
         <div className="col-md-4">
            <h4 className="font-accident-two-normal uppercase">Follow me</h4>
            <div className="follow">
               <ul className="list-inline social">
                  <li><a target="_blank" href="https://www.facebook.com/camilo.pestana" className="rst-icon-facebook"><i className="fa fa-facebook"></i></a></li>
                  <li><a target="_blank" href="https://github.com/elcronos" className="rst-icon-github"><i className="fa fa-github"></i></a></li>
                  <li><a target="_blank" href="https://co.linkedin.com/in/camilo-pestana-75116343" className="rst-icon-linkedin"><i className="fa fa-linkedin"></i></a></li>
                  <li><a target="_blank" href="https://www.instagram.com/pestanacamilo/" className="rst-icon-instagram"><i className="fa fa-instagram"></i></a></li>
                  <li><a target="_blank" href="https://twitter.com/capcarde" className="rst-icon-twitter"><i className="fa fa-twitter"></i></a></li>
               </ul>
            </div>
            <div className="divider-dynamic"></div>
         </div>
      </div>
      <div className="dividewhite1"></div>
      <div className="row wow fadeInDown" data-wow-delay=".4s" data-wow-offset="10">
         <div className="col-md-12 copyrights">
            <p>© 2016 Camilo Pestana.</p>
         </div>
      </div>
   </div>
</footer>
)
