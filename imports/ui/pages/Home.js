import React from 'react'

export default Home = () => (
  <div>
  <div className="content-wrap">

     <section id="homesection" className="container-fluid nopadding">

        <div className="m-details row nopadding bg-color01">

           <div className="col-md-8 nopadding">
              <div className="padding-50 wow fadeInDown" data-wow-delay="0.2s" data-wow-offset="10">
                 <div className="row nopadding">
                    <div className="col-md-12 nopadding">
                       <h3 className="font-accident-two-normal uppercase">About me</h3>
                       <div className="quote">
                          <h5 className="font-accident-one-bold uppercase subtitle">Hard-working person on the way to the success...</h5>
                          <div className="dividewhite1"></div>
                          <div className="dividewhite2"></div>
                       </div>
                    </div>
                 </div>
                 <div className="divider-dynamic"></div>
                 <div className="row nopadding">
                    <div className="col-md-4 infoblock nopadding">
                       <div className="row">
                          <div className="col-sm-1 col-md-3"><i className="flaticon-photo246"></i><div className="dividewhite1"></div></div>
                          <div className="col-sm-11 col-md-9">
                             <h5 className="font-accident-one-bold uppercase">Creative</h5>
                             <p className="medium">
                                Thinking outside of the box.
                             </p>
                          </div>
                       </div>
                       <div className="divider-dynamic"></div>
                    </div>
                    <div className="col-md-4 infoblock nopadding">
                       <div className="row">
                          <div className="col-sm-1 col-md-3"><i className="flaticon-stats47"></i><div className="dividewhite1"></div></div>
                          <div className="col-sm-11 col-md-9">
                             <h5 className="font-accident-one-bold uppercase">Motivated</h5>
                             <p className="medium">
                                Good demeanor in face of challenges
                             </p>
                          </div>
                       </div>
                       <div className="divider-dynamic"></div>
                    </div>
                    <div className="col-md-4 infoblock nopadding">
                       <div className="row">
                          <div className="col-sm-1 col-md-3"><i className="flaticon-clocks18"></i><div className="dividewhite1"></div></div>
                          <div className="col-sm-11 col-md-9">
                             <h5 className="font-accident-one-bold uppercase">Goal-Oriented</h5>
                             <p className="medium">
                                Good in completing the assigned tasks within time
                            </p>
                          </div>
                       </div>
                       <div className="divider-dynamic"></div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="col-md-4 personal nopadding ui-block-color01">
              <div className="padding-50 wow fadeInRight" data-wow-delay="0.4s" data-wow-offset="10">
                 <h3 className="font-accident-two-normal uppercase">Personal Info</h3>
                 <div className="dividewhite3"></div>
                 <div>
                    <div className="fullwidth box">
                       <div className="one"><p className="medium uppercase">Name:</p></div>
                       <div className="two"><p className="medium">Camilo Pestana</p></div>
                    </div>
                    <div className="fullwidth box">
                       <div className="one"><p className="medium uppercase text-nowrap">Date of Birth:</p></div>
                       <div className="two"><p className="medium">25/04/1991</p></div>
                    </div>
                    <div className="fullwidth box">
                       <div className="one"><p className="medium uppercase">Address:</p></div>
                       <div className="two"><p className="medium">Perth, Australia</p></div>
                    </div>
                    <div className="fullwidth box">
                       <div className="one"><p className="medium uppercase">Phone:</p></div>
                       <div className="two"><p className="medium">+67 451353704</p></div>
                    </div>
                    <div className="fullwidth box">
                       <div className="one"><p className="medium uppercase">Email:</p></div>
                       <div className="two"><p className="medium">capcarde@gmail.com</p></div>
                    </div>
                 </div>
                 <div className="dividewhite1"></div>
              </div>
           </div>

        </div>

        <div className="row nopadding ui-block-color02">

           <div className="col-md-4 pro-experience nopadding">
              <div className="padding-50 wow fadeInRight" data-wow-delay="0.6s" data-wow-offset="5">
                 <h3 className="font-accident-two-normal uppercase">Pro. Experience</h3>
                 <div className="dividewhite4"></div>
                 <div className="experience">
                   <ul className="">
                      <li className="date">09/2012 - 09/2013</li>
                      <li className="company uppercase">
                         <a>
                            Binary Tools
                         </a>
                      </li>
                      <li className="position">System Analyst</li>
                   </ul>
                   <ul className="">
                      <li className="date">01/2013 - 08/2014</li>
                      <li className="company uppercase">
                         <a>
                            Freelance
                         </a>
                      </li>
                      <li className="position">Software Developer</li>
                   </ul>
                   <ul className="">
                      <li className="date">02/2015 - 06/2015</li>
                      <li className="company uppercase">
                         <a>
                            Bank of Bogota
                         </a>
                      </li>
                      <li className="position">Software Developer</li>
                   </ul>
                   <ul className="">
                      <li className="date">06/2015 - 05/2016</li>
                      <li className="company uppercase">
                         <a>
                            Globant
                         </a>
                      </li>
                      <li className="position">Software Developer sSr</li>
                   </ul>
                 </div>
                 <a href="/resume#timeline-vertical" className="btn btn-wh-trans btn-xs">Learn More</a>
                 <div className="dividewhite1"></div>
              </div>
           </div>

           <div className="col-md-8 circle-skills nopadding ui-block-color03">
              <div className="padding-50 wow fadeInLeft" data-wow-delay="0.6s" data-wow-offset="5">
                 <h3 className="font-accident-two-normal uppercase">My Professional skills</h3>
                 <div className="dividewhite1"></div>
                 <div className="row">
                    <div className="col-sm-4 nopadding">
                       <div className="progressbar" data-animate="false">
                         <div className="clearfix">
                         </div>
                          <div className="circle font-accident-one-normal" data-percent="72.5">
                             <div></div>
                             <h4 className="font-accident-one-normal uppercase">Prototyping</h4>
                             <p className="font-regular-normal">
                                A prototype is an early sample, model, or release of a product built to test ...
                             </p>
                             <a href="https://en.wikipedia.org/wiki/Prototype" className="btn btn-wh-trans btn-xs">Learn More</a>
                          </div>
                       </div>
                    </div>
                    <div className="col-sm-4 nopadding">
                       <div className="progressbar" data-animate="false">
                         <div className="clearfix">
                         </div>
                          <div className="circle font-accident-one-normal" data-percent="60">
                             <div></div>
                             <h4 className="font-accident-one-normal uppercase">Design</h4>
                             <p className="font-regular-normal">
                                Design is the creation of a plan or convention for the construction of an object ...
                             </p>
                             <a href="https://en.wikipedia.org/wiki/Software_design" className="btn btn-wh-trans btn-xs">Learn More</a>
                          </div>
                       </div>
                    </div>
                    <div className="col-sm-4 nopadding">
                       <div className="progressbar" data-animate="false">
                         <div className="clearfix">
                         </div>
                          <div className="circle font-accident-one-normal" data-percent="90.5">
                             <div></div>
                             <h4 className="font-accident-one-normal uppercase">Development</h4>
                             <p className="font-regular-normal">
                                Software development is the process of computer programming ...
                             </p>
                             <a href="https://en.wikipedia.org/wiki/Software_development" className="btn btn-wh-trans btn-xs">Learn More</a>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <br/><br/>
           </div>

        </div>

     </section>

  </div>
  </div>
)
