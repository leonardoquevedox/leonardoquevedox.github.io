import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
  }

  componentDidMount() {
    this.timeoutReference = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', event => {
      this.handleOutsideClick(event)
    })
  }

  componentWillUnmount() {
    if (this.timeoutReference) {
      clearTimeout(this.timeoutReference)
    }
    document.removeEventListener('mousedown', this.handleOutsideClick)
  }

  setWrapperRef(ref) {
    this.wrapperRef = ref
  }

  onOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)
  }

  onCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)
  }

  handleOutsideClick(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.onCloseArticle()
      }
    }
  }

  render() {
    const { location } = this.props
    const { loading, isArticleVisible, timeout, articleTimeout, article } = this.state

    return (
      <Layout location={location}>
        <article className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}>
          <section id="wrapper">
            <Header
              onOpenArticle={selectedArticle => this.onOpenArticle(selectedArticle)}
              timeout={timeout}
            />
            <Main
              isArticleVisible={isArticleVisible}
              timeout={timeout}
              articleTimeout={articleTimeout}
              article={article}
              onCloseArticle={() => this.onCloseArticle()}
              setWrapperRef={ref => this.setWrapperRef(ref)}
            />
            <Footer timeout={timeout} />
          </section>
          <section id="bg" />
        </article>
      </Layout>
    )
  }
}

export default IndexPage
