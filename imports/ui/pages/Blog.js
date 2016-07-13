import React from 'react'
import Meteor from 'meteor/meteor'

export default Blog = () => (
<div className="content-wrap">

   <div id="blog" className="inner-content">

      <section id="page-title" className="inner-section">
         <div className="container-fluid nopadding wow fadeInRight" data-wow-delay="0.4s" data-wow-offset="10">
            <h2 className="font-accident-two-normal uppercase">Blog</h2>
            <h5 className="font-accident-one-bold uppercase subtitle">Hard-working person on the way to the success...</h5>
            <p className="small fontcolor-medium">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id metus purus. Ut vulputate, est vel tincidunt mattis, orci neque iaculis lectus, et interdum quam felis vel tortor. Fusce ultrices dui quis nunc dignissim faucibus. Ut ac odio quis nibh viverra fringilla ac id nisi. Suspendisse tincidunt augue quis ligula cursus, non efficitur ligula faucibus. Mauris id neque maximus, tincidunt metus et, sodales nulla.
            </p>
         </div>
      </section>

      <section className="inner-section">

         <div id="isotope-filters" className="port-filter port-filter-light text-center wow fadeInLeft" data-wow-delay="0.6s" data-wow-offset="10">
            <ul>
               <li><a href="#all" data-filter="*">All Categories</a></li>
               <li><a href="#design" data-filter=".design">Design</a></li>
               <li><a href="#branding" data-filter=".branding">Branding</a></li>
            </ul>
         </div>

         <div className="dividewhite3"></div>

         <div className="grid container-fluid text-center wow fadeInDown" data-wow-delay="0.6s" data-wow-offset="10">

            <div id="posts" className="row popup-container">

                  <div className="grid-item branding design col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="">
                           <div className="popup-call">
                              <a href="assets/custom/images/blog/01.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                           </div>
                           <img src="assets/custom/images/blog/thumbs/01.jpg" className="img-responsive" alt="img11"/>
                           <figcaption>
                              <div className="post-meta"><span>by <a href="#!">Sam Anderson</a>,</span> <span>March 16, 2015</span></div>
                              <div className="post-header">
                                 <h5><a href="blogpost.html">My Friends new album design</a></h5>
                              </div>
                              <div className="post-entry">
                                 <p>Aliquam gravida tincidunt congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                              </div>
                              <div className="post-tag pull-left">
                                 <span><a href="#branding" data-filter=".branding">Branding</a>,</span><span><a href="#design" data-filter=".design">Design</a></span>
                              </div>
                              <div className="post-more-link pull-right"><a href="blogpost.html">More<i className="fa fa-long-arrow-right right"></i></a></div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item grid-sizer branding col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="">
                           <div className="popup-call">
                              <a href="assets/custom/images/blog/02.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                           </div>
                           <img src="assets/custom/images/blog/thumbs/02.jpg" className="img-responsive" alt="img03"/>
                           <figcaption>
                              <div className="post-meta"><span>by <a href="#!">Sam Anderson</a>,</span> <span>March 16, 2015</span></div>
                              <div className="post-header">
                                 <h5><a href="blogpost.html">Funny Things done</a></h5>
                              </div>
                              <div className="post-entry">
                                 <p>Aliquam gravida tincidunt congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                              </div>
                              <div className="post-tag pull-left">
                                 <span><a href="#branding" data-filter=".branding">Branding</a></span>
                              </div>
                              <div className="post-more-link pull-right"><a href="blogpost.html">More<i className="fa fa-long-arrow-right right"></i></a></div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item branding col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="">
                           <div className="popup-call">
                              <a href="assets/custom/images/blog/03.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                           </div>
                           <img src="assets/custom/images/blog/thumbs/03.jpg" className="img-responsive" alt="img11"/>
                           <figcaption>
                              <div className="post-meta"><span>by <a href="#!">Sam Anderson</a>,</span> <span>March 16, 2015</span></div>
                              <div className="post-header">
                                 <h5><a href="blogpost.html">Crazy Frod needs help</a></h5>
                              </div>
                              <div className="post-entry">
                                 <p>Aliquam gravida tincidunt congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                              </div>
                              <div className="post-tag pull-left">
                                 <span><a href="#branding" data-filter=".branding">Branding</a></span>
                              </div>
                              <div className="post-more-link pull-right"><a href="blogpost.html">More<i className="fa fa-long-arrow-right right"></i></a></div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item branding design col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="">
                           <div className="popup-call">
                              <a href="assets/custom/images/blog/04.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                           </div>
                           <img src="assets/custom/images/blog/thumbs/04.jpg" className="img-responsive" alt="img03"/>
                           <figcaption>
                              <div className="post-meta"><span>by <a href="#!">Sam Anderson</a>,</span> <span>March 16, 2015</span></div>
                              <div className="post-header">
                                 <h5><a href="blogpost.html">Old man crying</a></h5>
                              </div>
                              <div className="post-entry">
                                 <p>Aliquam gravida tincidunt congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                              </div>
                              <div className="post-tag pull-left">
                                 <span><a href="#branding" data-filter=".branding">Branding</a>,</span><span><a href="#design" data-filter=".design">Design</a></span>
                              </div>
                              <div className="post-more-link pull-right"><a href="blogpost.html">More<i className="fa fa-long-arrow-right right"></i></a></div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item branding col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="">
                           <div className="popup-call">
                              <a href="assets/custom/images/blog/05.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                           </div>
                           <img src="assets/custom/images/blog/thumbs/05.jpg" className="img-responsive" alt="img11"/>
                           <figcaption>
                              <div className="post-meta"><span>by <a href="#!">Sam Anderson</a>,</span> <span>March 16, 2015</span></div>
                              <div className="post-header">
                                 <h5><a href="blogpost.html">The rusted cars bumping</a></h5>
                              </div>
                              <div className="post-entry">
                                 <p>Aliquam gravida tincidunt congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                              </div>
                              <div className="post-tag pull-left">
                                 <span><a href="#branding" data-filter=".branding">Branding</a></span>
                              </div>
                              <div className="post-more-link pull-right"><a href="blogpost.html">More<i className="fa fa-long-arrow-right right"></i></a></div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item design col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="">
                           <div className="popup-call">
                              <a href="assets/custom/images/blog/06.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                           </div>
                           <img src="assets/custom/images/blog/thumbs/06.jpg" className="img-responsive" alt="img03"/>
                           <figcaption>
                              <div className="post-meta"><span>by <a href="#!">Sam Anderson</a>,</span> <span>March 16, 2015</span></div>
                              <div className="post-header">
                                 <h5><a href="blogpost.html">Turn on the equalizer</a></h5>
                              </div>
                              <div className="post-entry">
                                 <p>Aliquam gravida tincidunt congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                              </div>
                              <div className="post-tag pull-left">
                                 <span><a href="#design" data-filter=".design">Design</a></span>
                              </div>
                              <div className="post-more-link pull-right"><a href="blogpost.html">More<i className="fa fa-long-arrow-right right"></i></a></div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item design col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="">
                           <div className="popup-call">
                              <a href="assets/custom/images/blog/07.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                           </div>
                           <img src="assets/custom/images/blog/thumbs/07.jpg" className="img-responsive" alt="img03"/>
                           <figcaption>
                              <div className="post-meta"><span>by <a href="#!">Sam Anderson</a>,</span> <span>March 16, 2015</span></div>
                              <div className="post-header">
                                 <h5><a href="blogpost.html">Commando shoots the boy</a></h5>
                              </div>
                              <div className="post-entry">
                                 <p>Aliquam gravida tincidunt congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                              </div>
                              <div className="post-tag pull-left">
                                 <span><a href="#design" data-filter=".design">Design</a></span>
                              </div>
                              <div className="post-more-link pull-right"><a href="blogpost.html">More<i className="fa fa-long-arrow-right right"></i></a></div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="grid-item branding design col-md-4 col-sm-6">
                     <div className="item-wrap">
                        <figure className="">
                           <div className="popup-call">
                              <a href="assets/custom/images/blog/08.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                           </div>
                           <img src="assets/custom/images/blog/thumbs/08.jpg" className="img-responsive" alt="img03"/>
                           <figcaption>
                              <div className="post-meta"><span>by <a href="#!">Sam Anderson</a>,</span> <span>March 16, 2015</span></div>
                              <div className="post-header">
                                 <h5><a href="blogpost.html">Little girl beats the dog</a></h5>
                              </div>
                              <div className="post-entry">
                                 <p>Aliquam gravida tincidunt congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                              </div>
                              <div className="post-tag pull-left">
                                 <span><a href="#branding" data-filter=".branding">Branding</a>,</span><span><a href="#design" data-filter=".design">Design</a></span>
                              </div>
                              <div className="post-more-link pull-right"><a href="blogpost.html">More<i className="fa fa-long-arrow-right right"></i></a></div>
                           </figcaption>
                        </figure>
                     </div>
                  </div>

               </div>
            </div>

         <div className="dividewhite8"></div>

      </section>

   </div>

</div>
)
