import React from 'react'
import Meteor from 'meteor/meteor'

export default Header = () => (
<header>
   <section id="top-navigation" className="container-fluid nopadding">
      <div className="row nopadding ident ui-bg-color01">
         <a href="#!">
            <div className="col-md-5 col-lg-4 vc-photo">&nbsp;</div>
         </a>
         <div className="col-md-7 col-lg-8 vc-name nopadding">
            <div className="row nopadding name">
               <div className="col-md-10 name-title"><h2 className="font-accident-two-light uppercase">Camilo Pestana</h2></div>
               <div className="col-md-2 nopadding name-pdf">
                  <a href="#" className="hvr-sweep-to-right"><i className="flaticon-download149" title="Download CV.pdf"></i></a>
               </div>
            </div>
            <div className="row nopadding position">
               <div className="col-md-10 position-title">

                 <section className="cd-intro">
                    <h4 className="cd-headline clip is-full-width font-accident-two-normal uppercase">
                       <span>Web App Developer</span>
                    </h4>
                 </section>

               </div>
               <div className="col-md-2 nopadding pdf">
                  <a href="https://github.com/elcronos" className="hvr-sweep-to-right"><i className="fa fa-github fa-5x" title="My Github Portfolio" aria-hidden="true"></i></a>
               </div>
            </div>

            <ul id="nav" className="row nopadding cd-side-navigation">
               <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color01">
                  <a href="/" className="hvr-sweep-to-bottom"><i className="flaticon-insignia"></i><span>home</span></a>
               </li>
               <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color02">
                  <a href="/resume" className="hvr-sweep-to-bottom"><i className="flaticon-graduation61"></i><span>resume</span></a>
               </li>
               <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color03">
                  <a href="/portfolio" className="hvr-sweep-to-bottom"><i className="flaticon-book-bag2"></i><span>portfolio</span></a>
               </li>
               <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color04">
                  <a href="/contacts" className="hvr-sweep-to-bottom"><i className="flaticon-placeholders4"></i><span>contacts</span></a>
               </li>
               <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color05">
                  <a href="/feedback" className="hvr-sweep-to-bottom"><i className="flaticon-earphones18"></i><span>feedback</span></a>
               </li>
               <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color06">
                  <a href="/blog" className="hvr-sweep-to-bottom"><i className="flaticon-pens15"></i><span>blog</span></a>
               </li>
            </ul>

         </div>
      </div>
   </section>
</header>
)
