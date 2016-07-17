import React from 'react'

export default class Portfolio extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
    this.initIsotope();
    this.initMagnific();
  }

  initIsotope(){
    //Isotope
    var grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer'
        }
    });

    grid.imagesLoaded(function () {
        grid.isotope();
    });

    grid.isotope({filter: '*'});

    // filter items on button click
    $('#isotope-filters').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({filter: filterValue});
    });

    // filter items on tag click
    $('.post-tag').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({filter: filterValue});
        $('#isotope-filters a[data-filter="' + filterValue + '"]').focus();
    });
  }

  initMagnific(){
    /* Magnific Popup */
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
  }

  render(){
    return(
      <div className="content-wrap">

         <div id="portfolio" className="inner-content">

            <section id="page-title" className="inner-section">
               <div className="container-fluid nopadding wow fadeInRight" data-wow-delay="0.2s" data-wow-offset="10">
                  <h2 className="font-accident-two-normal uppercase">Portfolio</h2>
                  <h5 className="font-accident-one-bold uppercase subtitle">Hard-working person on the way to the success...</h5>
                  <p className="medium fontcolor-medium">
                     Solutions-driven programmer with a four-year track record of commended performance in modular and object-oriented programming.
                  </p>
               </div>
            </section>

            <section id="counts-light-bg" className="counts inner-section bg-color02 wow fadeInDown" data-wow-delay="0.2s" data-wow-offset="10">
               <div className="container-fluid nopadding">
                  <div className="count-container row">
                     <div className="col-lg-3 col-sm-6 col-xs-12 count">
                        <div>
                           <div className="count-icon">
                              <i className="fa fa-globe fa-3x"></i>
                           </div>
                           <span className=".integers digit font-accident-two-normal">6</span>

                           <div className="count-text font-accident-one-bold">Web</div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6 col-xs-12 count">
                        <div>
                           <div className="count-icon">
                              <i className="fa fa-mobile fa-2x"></i>
                           </div>
                           <span className=".integers digit font-accident-two-normal">2</span>

                           <div className="count-text font-accident-one-bold">Mobile</div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6 col-xs-12 count">
                        <div>
                           <div className="count-icon">
                              <i className="fa fa-space-shuttle fa-3x"></i>
                           </div>
                           <span className=".integers digit font-accident-two-normal">6</span>

                           <div className="count-text font-accident-one-bold">MeteorJS</div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6 col-xs-12 count">
                        <div>
                           <div className="count-icon">
                              <i className="fa fa-coffee fa-3x"></i>
                           </div>
                           <span className=".integers digit font-accident-two-normal">3</span>

                           <div className="count-text font-accident-one-bold">Java</div>
                        </div>
                     </div>
                  </div>
                  <div className="dividewhite2"></div>
               </div>
            </section>
            <section id="portfolio-block" className="inner-section wow fadeInDown" data-wow-delay="0.4s" data-wow-offset="10">

               <div className="dividewhite6"></div>

               <div id="isotope-filters" className="port-filter port-filter-light text-center">
                  <ul>
                     <li><a href="#cat1" data-filter="*">All</a></li>
                     <li><a href="#cat2" data-filter=".web">Web</a></li>
                     <li><a href="#cat3" data-filter=".mobile">Mobile</a></li>
                     <li><a href="#cat4" data-filter=".meteor">MeteorJS</a></li>
                     <li><a href="#cat5" data-filter=".blaze">Blaze</a></li>
                     <li><a href="#cat6" data-filter=".react">React</a></li>
                     <li><a href="#cat7" data-filter=".java">Java</a></li>
                     <li><a href="#cat8" data-filter=".others">Others</a></li>
                  </ul>
               </div>

               <div className="dividewhite3"></div>

               <div className="grid container-fluid text-center">

                  <div id="posts" className="row popup-container">

                     <div className="grid-item web meteor react col-sm-12">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="/images/portfolio/00.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/00.jpg" className="img-responsive'" alt="img11"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>My Personal<span>CV</span></h3>
                                    <p>This is my personal web page and the most recent work that I have done using MeteorJS, React and more ...</p>
                                    <p>#web #meteorjs #react </p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>

                     <div className="grid-item meteor react mobile col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/01.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/01.jpg" className="img-responsive'"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Langex</h3>
                                    <br/>
                                    <p>iOS App for conversation exchange. This app was built using MeteorJS, React, MongoDB and Cordova. It will be soon on the App Store</p>
                                    <p>#meteorjs #ios #react #mobile</p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item grid-sizer meteor mobile react col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/02.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/02.jpg" className="img-responsive" alt="img03"/>
                              <figcaption>
                                 <div className="fig-description">
                                   <h3>Langex</h3>
                                   <br/>
                                   <p>Android App for conversation exchange. This app was built using MeteorJS, React, MongoDB and Cordova. It will be soon on the Play Store</p>
                                   <p>#meteorjs #android #react #mobile</p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item web meteor react col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/03.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/03.jpg" className="img-responsive" alt="img11"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Langex <span> Web</span></h3>
                                    <p>Web version of Langex(In development stage)</p>
                                    <p>#web #meteorjs #react</p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item others meteor blaze col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/04.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/04.jpg" className="img-responsive" alt="img03"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Julian Converter</h3>
                                    <p>
                                      This app is a Julian/Gregorian calendar converter app for Windows and OS X. Built with MeteorJS, Blaze and Electron.
                                    </p>
                                    <p>#DesktopApp #meteor #blaze</p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item web meteor blaze col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/05.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/05.jpg" className="img-responsive" alt="img11"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Belinda Pinskier Essay Tutoring</h3>
                                    <p>
                                      Personal web site for Belinda Pinskier Gamsat Essay Tutoring
                                    </p>
                                    <p>#web #meteor #blaze </p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item web java col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/06.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/06.jpg" className="img-responsive" alt="img11"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>SGIPVIS Agile Software Management System</h3>
                                    <p>
                                      Design and Implementation of the system SGIPVIS Agile Software Management System for a Catholic University of Colombia. Built with Java and GRAILS
                                    </p>
                                    <p>#web #java #agile </p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item web java col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/07.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/07.jpg" className="img-responsive" alt="img11"/>
                              <figcaption>
                                 <div className="fig-description">
                                   <div className="fig-description">
                                      <h3>SGIPVIS Security Management System</h3>
                                      <p>
                                        Design and Implementation of the system SGIPVIS for a Catholic University of Colombia research. Built with Java and GRAILS
                                      </p>
                                      <p>#web #java #agile </p>
                                   </div>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item web java col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/08.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/08.jpg" className="img-responsive" alt="img11"/>
                              <figcaption>
                                 <div className="fig-description">
                                   <div className="fig-description">
                                      <h3>SGIPVIS Project</h3>
                                      <p>
                                        Design and Implementation of the system SGIPVIS at Catholic University of Colombia. Built with Java and GRAILS
                                      </p>
                                      <p>#web #java #agile </p>
                                   </div>
                                 </div>
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
  }
}
