import React from 'react'
import Sidebar from '../Sidebar'
import './style.scss'

class PageTemplateDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        dynamicsReady: false
    };
  }

  loadDynamicsForm = (callback) => {
    const existingScript = document.getElementById('dynamicsScript');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.61.1047.0';
      script.id = 'dynamicsScript';
      document.body.appendChild(script);

      script.onload = () => {
        if (callback) callback();
      };
    }

    if (existingScript && callback) callback();
  };

  renderForm() {
    switch (this.state.title) {
      case "Become a member":
        return  <>
                  {/* dynamics script */}
                  <div data-form-block-id="f47c4eae-969f-ea11-a812-0022480069c4"></div> 
                  <div id="dqIUKb-9xY4WvDKXG6ckhS7MqltNxfUgvO-b1cSLa56w"></div>
                </>
      case "Book an Event": 
        return  <>
                  {/* dynamics script */}
                  <div data-form-block-id="0680ac23-9f9f-ea11-a812-0022480069c4"></div> 
                  <div id="drIFHcfZj1oZhzUfNDKHamFFAgaQ1rwqNAboi3DNy0Yc"></div>
                </>
    }
  }

  componentDidMount() {  
    this.setState({
      title: this.props.data.kontentItemPage.elements.title.value
    });    
  }

  componentWillMount() {
    this.loadDynamicsForm(() => {
      // Work to do after the library loads.
      this.setState({ dynamicsReady: true });
      {(function (id, f, t, ws, ms_tr_il_08, ms_tr_il_w_01) { var tr = function (cb) { var count = 0; var callback = function () { if (count == 0) { count++; if (w) { w.w(id, t, cb); } } }; var ts = document.createElement('script'); ts.src = ws; ts.type = 'text/javascript'; ts.onload = callback; ts.onreadystatechange = function () { if (this.readyState == 'complete' || this.readyState == 'loaded') { callback(); } }; var head = document.getElementsByTagName('head')[0]; head.appendChild(ts); }; if (typeof ms_tr_il_08 === 'function') { if (ms_tr_il_w_01 === null) { tr(function() { ms_tr_il_08(id, f, t); }); } else { ms_tr_il_w_01.w(id, t, function(websiteVisitedParams) { ms_tr_il_08(id, f, t, websiteVisitedParams); }, null); } } else { tr(); }})('qIUKb-9xY4WvDKXG6ckhS7MqltNxfUgvO-b1cSLa56w', 'https://6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com/f', 'https://6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com/t', 'https://6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com/t/w', typeof ms_tr_il_08 === "undefined" ? null : ms_tr_il_08, typeof ms_tr_il_w_01 === "undefined" ? null : ms_tr_il_w_01);}
    });   
  }

  render() {
    const pageTemplateData = this.props.data
    const kontentItemPage = pageTemplateData.kontentItemPage 
   
    return (
      <div>
        <Sidebar />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">{kontentItemPage.elements.title.value}</h1>
              
              {
                this.state.dynamicsReady ? this.renderForm() : ''
              }

              <div
                className="page__body"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={
                  { __html: kontentItemPage.elements.description.value }
                }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageTemplateDetails
