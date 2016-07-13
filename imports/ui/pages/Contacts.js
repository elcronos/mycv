import React from 'react'
import Meteor from 'meteor/meteor'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default class Contacts extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
    var myLatlng = new google.maps.LatLng(-31.94122,115.83555000000001);
    var mapOptions = {
      zoom: 15,
      center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("gmap"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        defaultAnimation: 2,
        title:"15 Keer St, West Leederville, WA, Australia"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
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
                  <div id="gmap" className="map-gic"/>
               </div>
               <div className="dividewhite8"></div>
            </section>

         </div>

      </div>
    )
  }

}
