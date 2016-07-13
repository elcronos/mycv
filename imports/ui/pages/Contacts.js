import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default class Contacts extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
    if (!$('#google-map').length) {
      return false;
    }

    // Create an array of styles.
    var styles = [
      {
        stylers: [
          {saturation: -90}
        ]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {lightness: 100},
          {visibility: "simplified"}
        ]
      }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
          {visibility: "off"}
        ]
      }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var $latlng = new google.maps.LatLng(-31.94122,115.83555000000001),
      $mapOptions = {
        zoom: 13,
        center: $latlng,
        panControl: false,
        zoomControl: true,
        scaleControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
      };
      var map = new google.maps.Map(document.getElementById('google-map'), $mapOptions);

      google.maps.event.trigger(map, 'resize');

      //Associate the styled map with the MapTypeId and set it to display.
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');

      var marker = new google.maps.Marker({
        position: $latlng,
        map: map,
        title: ""
      });
  }
  render(){
    return(
      <div className="content-wrap">

         <div id="contacts" className="inner-content">

            <section id="page-title" className="inner-section">
               <div className="container-fluid nopadding wow fadeInRight" data-wow-delay="0.4s" data-wow-offset="10">
                  <h2 className="font-accident-two-normal uppercase">Contacts</h2>
                  <h5 className="font-accident-one-bold uppercase subtitle">Hard-working person on the way to the success...</h5>
                  <p className="medium fontcolor-medium">
                     If you have any project or idea do not hesitate to contact me. I will transform those ideas into exciting web / mobile apps.
                  </p>
               </div>
               <div className="dividewhite4"></div>
            </section>

            <section id="contacts-data" className="inner-block">
               <div className="container-fluid nopadding">
                  <div className="row">
                     <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.6s" data-wow-offset="10">
                        <div className="row">
                           <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Address:</span></div>
                           <div className="col-sm-10"><p className="medium">15 Kerr St, West Leederville, WA, Australia</p></div>
                        </div>
                        <div className="row">
                           <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Phone:</span></div>
                           <div className="col-sm-10"><p className="medium">1 234 567-64-35</p></div>
                        </div>
                        <div className="row">
                           <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Skype:</span></div>
                           <div className="col-sm-10"><p className="medium">@capcarde</p></div>
                        </div>
                     </div>
                     <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.6s" data-wow-offset="10">
                        <div className="row">
                           <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Twitter:</span></div>
                           <div className="col-sm-10"><p className="medium"><a href="#!">https://twitter.com/capcarde</a></p></div>
                        </div>
                        <div className="row">
                           <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Facbook:</span></div>
                           <div className="col-sm-10"><p className="medium"><a href="#!">https://www.facebook.com/camilo.pestana</a></p></div>
                        </div>
                        <div className="row">
                           <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Linkedin:</span></div>
                           <div className="col-sm-10"><p className="medium"><a href="#!">https://co.linkedin.com/in/camilo-pestana-75116343</a></p></div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section id="contacts-map" className="inner-section">
               <div className="container-fluid nopadding">
                  <div className="wow fadeInDown" data-wow-delay="0.8s" data-wow-offset="10">
                     <div id="gm-panel">
                        <div id="google-map" className="bigmap"></div>
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
