import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Article from '../components/Article'
import Sidebar from '../components/Sidebar'

class IndexRoute extends React.Component {
  render() {
    const routeData = this.props
    const items = []
    const title = routeData.data.kontentItemSiteMetadata.elements.title.value
    const subtitle = routeData.data.kontentItemSiteMetadata.elements.subtitle.value
    const articles = routeData.data.allKontentItemArticle.nodes

    articles.forEach(article => {
      items.push(<Article data={article} key={article.elements.slug.value} />)
    })

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
            
            <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.61.1047.0"></script>
            <script>
              {`(function (id, f, t, ws, ms_tr_il_08, ms_tr_il_w_01) { var tr = function (cb) { var count = 0; var callback = function () { if (count == 0) { count++; if (w) { w.w(id, t, cb); } } }; var ts = document.createElement('script'); ts.src = ws; ts.type = 'text/javascript'; ts.onload = callback; ts.onreadystatechange = function () { if (this.readyState == 'complete' || this.readyState == 'loaded') { callback(); } }; var head = document.getElementsByTagName('head')[0]; head.appendChild(ts); }; if (typeof ms_tr_il_08 === 'function') { if (ms_tr_il_w_01 === null) { tr(function() { ms_tr_il_08(id, f, t); }); } else { ms_tr_il_w_01.w(id, t, function(websiteVisitedParams) { ms_tr_il_08(id, f, t, websiteVisitedParams); }, null); } } else { tr(); }})('qIUKb-9xY4WvDKXG6ckhS7MqltNxfUgvO-b1cSLa56w', 'https://6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com/f', 'https://6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com/t', 'https://6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com/t/w', typeof ms_tr_il_08 === "undefined" ? null : ms_tr_il_08, typeof ms_tr_il_w_01 === "undefined" ? null : ms_tr_il_w_01);`}
            </script>
            
            <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.61.1047.0"></script> 
            <script>
              {`(function (id, f, t, ws, ms_tr_il_08, ms_tr_il_w_01) { var tr = function (cb) { var count = 0; var callback = function () { if (count == 0) { count++; if (w) { w.w(id, t, cb); } } }; var ts = document.createElement('script'); ts.src = ws; ts.type = 'text/javascript'; ts.onload = callback; ts.onreadystatechange = function () { if (this.readyState == 'complete' || this.readyState == 'loaded') { callback(); } }; var head = document.getElementsByTagName('head')[0]; head.appendChild(ts); }; if (typeof ms_tr_il_08 === 'function') { if (ms_tr_il_w_01 === null) { tr(function() { ms_tr_il_08(id, f, t); }); } else { ms_tr_il_w_01.w(id, t, function(websiteVisitedParams) { ms_tr_il_08(id, f, t, websiteVisitedParams); }, null); } } else { tr(); }})('rIFHcfZj1oZhzUfNDKHamFFAgaQ1rwqNAboi3DNy0Yc', 'https://6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com/f', 'https://6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com/t', 'https://6df2c45e32504bb4a2266c6c3459edc6.svc.dynamics.com/t/w', typeof ms_tr_il_08 === "undefined" ? null : ms_tr_il_08, typeof ms_tr_il_w_01 === "undefined" ? null : ms_tr_il_w_01);`}
            </script>
          </Helmet>
          <Sidebar />
          <div className="content">
            <div className="content__inner">
              {/* members reg */}
              <h1>Members form</h1>
              <div data-form-block-id="f47c4eae-969f-ea11-a812-0022480069c4"></div> 
              <div id="dqIUKb-9xY4WvDKXG6ckhS7MqltNxfUgvO-b1cSLa56w"></div>

              {/* event reg */}
              <h1>Event form</h1>
              <div data-form-block-id="0680ac23-9f9f-ea11-a812-0022480069c4"></div> 
              <div id="drIFHcfZj1oZhzUfNDKHamFFAgaQ1rwqNAboi3DNy0Yc"></div>

              {items}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    kontentItemSiteMetadata(system: {codename: {eq: "site_metadata"}}) {
      elements {
        subtitle {
          value
        }
        title {
          value
        }
      }
    }
    allKontentItemArticle(filter: {preferred_language: {eq: "en-US"}}) {
      nodes {
        elements {
          category {
            value {
              ... on kontent_item_category {
                elements {
                  title {
                    value
                  }
                  slug {
                    value
                  }
                }
              }
            }
          }
          date {
            value
          }
          description {
            value
          }
          content {
            value
          }
          slug {
            value
          }
          tags {
            value {
              ... on kontent_item_tag {
                elements {
                  title {
                    value
                  }
                  slug {
                    value
                  }
                }
              }
            }
          }
          image {
            value {
              url
            }
          }
          title {
            value
          }
        }
      }
    }
  }
`
