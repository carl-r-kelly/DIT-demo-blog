import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import * as _ from 'lodash'
import './style.scss'

class Article extends React.Component {
  render() {
    const img = _.get(this.props, 'data.elements.image.value[0].url', '')
    const title = _.get(this.props, 'data.elements.title.value', 'N/A')
    const date = _.get(this.props, 'data.elements.date.value', 'N/A')
    const category = _.get(this.props, 'data.elements.category.value[0].elements.title.value', 'N/A')
    const categorySlug = _.get(this.props, 'data.elements.category.value[0].elements.slug.value', 'N/A')
    const description = _.get(this.props, 'data.elements.description.value', 'N/A')
    const slug = `/articles/${_.get(this.props, 'data.elements.slug.value', 'N/A')}`

    return (
      <div className="article">
        {
          img.length > 0 &&
            <Link className="article__img" to={slug}>
              <img src={img} alt=""/>
            </Link>
        }
        <h2 className="article__title">
          <Link className="article__title-link" to={slug}>
            {title}
          </Link>
        </h2>
        <div className="article__meta">
          <time
            className="article__meta-time"
            dateTime={moment(date).format('MMMM D, YYYY')}
          >
            {moment(date).format('D MMMM YYYY')}
          </time>
          <span className="article__meta-divider" />
          <span className="article__meta-category" key={categorySlug}>
            <Link to={`/categories/${categorySlug}/`} className="article__meta-category-link">
              {category}
            </Link>
          </span>
        </div>
        <p className="article__description">{description}</p>
        <Link className="article__readmore" to={slug}>
          Read
        </Link>
      </div>
    )
  }
}

export default Article
