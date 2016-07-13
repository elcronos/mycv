import React from 'react'
import { mount } from 'react-mounter'
import Home from '/imports/ui/pages/Home'
import Blog from '/imports/ui/pages/Blog'
import Resume from '/imports/ui/pages/Resume'
import Header from '/imports/ui/components/Header'
import Footer from '/imports/ui/components/Footer'
import Contacts from '/imports/ui/pages/Contacts'
import Feedback from '/imports/ui/pages/Feedback'
import Portfolio from '/imports/ui/pages/Portfolio'
import NotFound from '/imports/ui/components/NotFound'
import MainLayout from '/imports/ui/layouts/MainLayout'

//Public Routes
FlowRouter.notFound = {
    action: function() {
      mount(MainLayout,{
        nav: () => (<Header />),
        content: () => (<NotFound />),
        footer: () => (<Footer />)
      })
    }
}
//Home
FlowRouter.route('/',{
  action(){
    mount(MainLayout,{
      nav: () => (<Header />),
      content: () => (<Home />),
      footer: () => (<Footer />)
    })
  }
})

//Portfolio
FlowRouter.route('/portfolio',{
  action(){
    mount(MainLayout,{
      nav: () => (<Header />),
      content: () => (<Portfolio />),
      footer: () => (<Footer />)
    })
  }
})

//Resume
FlowRouter.route('/resume',{
  action(){
    mount(MainLayout,{
      nav: () => (<Header />),
      content: () => (<Resume />),
      footer: () => (<Footer />)
    })
  }
})

//Contacts
FlowRouter.route('/contacts',{
  action(){
    mount(MainLayout,{
      nav: () => (<Header />),
      content: () => (<Contacts />),
      footer: () => (<Footer />)
    })
  }
})

//Feedback
FlowRouter.route('/feedback',{
  action(){
    mount(MainLayout,{
      nav: () => (<Header />),
      content: () => (<Feedback />),
      footer: () => (<Footer />)
    })
  }
})

//Blog
FlowRouter.route('/blog',{
  action(){
    mount(MainLayout,{
      nav: () => (<Header />),
      content: () => (<Blog />),
      footer: () => (<Footer />)
    })
  }
})
