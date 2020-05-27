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

          <script>
            {`(function (id, f, t, ws, ms_tr_il_08, ms_tr_il_w_01) { var tr = function (cb) { var count = 0; var callback = function () { if (count == 0) { count++; if (w) { w.w(id, t, cb); } } }; var ts = document.createElement('script'); ts.src = ws; ts.type = 'text/javascript'; ts.onload = callback; ts.onreadystatechange = function () { if (this.readyState == 'complete' || this.readyState == 'loaded') { callback(); } }; var head = document.getElementsByTagName('head')[0]; head.appendChild(ts); }; if (typeof ms_tr_il_08 === 'function') { if (ms_tr_il_w_01 === null) { tr(function() { ms_tr_il_08(id, f, t); }); } else { ms_tr_il_w_01.w(id, t, function(websiteVisitedParams) { ms_tr_il_08(id, f, t, websiteVisitedParams); }, null); } } else { tr(); }})('uhQcLiHaSgXGYXESTMNQJuEPo6mfSa3_J32knyh1C6Y', 'https://6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com/f', 'https://6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com/t', 'https://6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com/t/w', typeof ms_tr_il_08 === "undefined" ? null : ms_tr_il_08, typeof ms_tr_il_w_01 === "undefined" ? null : ms_tr_il_w_01);`}
          </script>

          <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.61.1047.0"></script> 
        </Helmet>
        
        <>
          {/* D365 Tracking Script */}
          <div id="duhQcLiHaSgXGYXESTMNQJuEPo6mfSa3_J32knyh1C6Y"></div>
          
          
          {/* D365 Forms Tracking Script */}
          <div class="d365-mkt-config" style={{display: "none"}} data-website-id="uhQcLiHaSgXGYXESTMNQJuEPo6mfSa3_J32knyh1C6Y" data-hostname="6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com"> </div>

          {children}
        </>
      </div>
    )
  }
}

export default Layout
