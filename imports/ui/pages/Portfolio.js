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
                              <i className="flaticon-photo246"></i>
                           </div>
                           <span className=".integers digit font-accident-two-normal">5</span>

                           <div className="count-text font-accident-one-bold">Websites / SEO</div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6 col-xs-12 count">
                        <div>
                           <div className="count-icon">
                              <i className="fa fa-desktop fa-2x"></i>
                           </div>
                           <span className=".integers digit font-accident-two-normal">1</span>

                           <div className="count-text font-accident-one-bold">Desktop Apps</div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6 col-xs-12 count">
                        <div>
                           <div className="count-icon">
                              <i className="flaticon-stats48"></i>
                           </div>
                           <span className=".integers digit font-accident-two-normal">2</span>

                           <div className="count-text font-accident-one-bold">SEO</div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6 col-xs-12 count">
                        <div>
                           <div className="count-icon">
                              <i className="fa fa-space-shuttle fa-3x"></i>
                           </div>
                           <span className=".integers digit font-accident-two-normal">2</span>

                           <div className="count-text font-accident-one-bold">Web & Mobile Apps</div>
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
                     <li><a href="#cat3" data-filter=".mobile">Mobile Apps</a></li>
                     <li><a href="#cat4" data-filter=".others">Others</a></li>
                  </ul>
               </div>

               <div className="dividewhite3"></div>

               <div className="grid container-fluid text-center">

                  <div id="posts" className="row popup-container">

                     <div className="grid-item web col-sm-12">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="/images/portfolio/00.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/00.jpg" className="img-responsive'" alt="img11"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Music <span>Sounds</span></h3>
                                    <p>#web #seo </p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>

                     <div className="grid-item web mobile col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/01.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/01.jpg" className="img-responsive'" alt="img11"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Music <span>Sounds</span></h3>
                                    <p>#web #seo </p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item grid-sizer mobile col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/02.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/02.jpg" className="img-responsive" alt="img03"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Fire <span>Burns</span></h3>
                                    <p>#web #seo</p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item seo col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/03.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/03.jpg" className="img-responsive" alt="img11"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Ice <span>Cold</span></h3>
                                    <p>#marketing</p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item others col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/04.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/04.jpg" className="img-responsive" alt="img03"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Everybody <span>Lies</span></h3>
                                    <p>#marketing</p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item web others col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/05.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/05.jpg" className="img-responsive" alt="img11"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Music <span>Sounds</span></h3>
                                    <p>#web #seo </p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item others col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/06.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/06.jpg" className="img-responsive" alt="img03"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Fire <span>Burns</span></h3>
                                    <p>#web #seo</p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item web col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/07.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/07.jpg" className="img-responsive" alt="img03"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Fire <span>Burns</span></h3>
                                    <p>#web #seo</p>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div className="grid-item seo col-lg-3 col-md-4 col-sm-6">
                        <div className="item-wrap">
                           <figure className="effect-goliath">
                              <div className="popup-call">
                                 <a href="images/portfolio/08.jpg" className="gallery-item"><i className="flaticon-arrows-4"></i></a>
                              </div>
                              <img src="images/portfolio/thumbs/08.jpg" className="img-responsive" alt="img03"/>
                              <figcaption>
                                 <div className="fig-description">
                                    <h3>Fire <span>Burns</span></h3>
                                    <p>#web #seo</p>
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
