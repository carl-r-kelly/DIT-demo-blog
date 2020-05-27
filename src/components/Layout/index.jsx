import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet defaultTitle="Blog by John Doe">
          <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        </Helmet>
        
        <>
          {/* D365 Tracking Script */}
          <div id="duhQcLiHaSgXGYXESTMNQJuEPo6mfSa3_J32knyh1C6Y"></div>
          
          
          {/* D365 Forms Tracking Script */}
          <div className="d365-mkt-config" style={{display: "none"}} data-website-id="uhQcLiHaSgXGYXESTMNQJuEPo6mfSa3_J32knyh1C6Y" data-hostname="6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com"> </div>

          {children}
        </>
      </div>
    )
  }
}

export default Layout
