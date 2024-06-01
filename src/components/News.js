import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Walk from "./Walk";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a211aecd614d436b99ef8e99399a2ff6&page=1&pageSize=${this.props.pageSize}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          articles: data.articles,
          loading: false,
          page: 1,
          totalResults: data.totalResults,
        });
      })
      .catch((error) => {
        console.error("Error fetching the news:", error);
        this.setState({ loading: false });
      });
  }
  handlePrevBtn = () => {
    this.setState({
      loading: true,
    });
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a211aecd614d436b99ef8e99399a2ff6&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          articles: data.articles,
          loading: false,
          page: this.state.page - 1,
        });
      })
      .catch((error) => {
        console.error("Error fetching the news:", error);
        this.setState({ loading: false });
      });
  };
  handleNextBtn = () => {
    this.setState({
      loading: true,
    });
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a211aecd614d436b99ef8e99399a2ff6&page=${
          this.state.page + 1
        }&pageSize=${this.props.pageSize}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            articles: data.articles,
            loading: false,
            page: this.state.page + 1,
          });
        })
        .catch((error) => {
          console.error("Error fetching the news:", error);
          this.setState({ loading: false });
        });
    };
  render() {
    const { articles} = this.state;
    // console.log("hiiii")
    return (
      <div className="container">
        <h2 className="text-center mx-5 my-5">PenguinNews - Dive into the latest news inshort and online</h2>
        {this.state.loading && <Walk/>}
        <div className="row">
          {!this.state.loading && articles.map((articles, index) => {
            return (
              <div className="col-md-4 my-2" key={index}>
                <NewsItem
                  title={articles.title}
                  description={articles.description}
                  author={articles.author}
                  date={articles.publishedAt}
                  imageUrl={ articles.urlToImage? articles.urlToImage: "https://t4.ftcdn.net/jpg/05/83/34/23/360_F_583342356_OE57DmNMJ1wCzwavInyGYzT6Mdg5lUz3.jpg"}
                  url={articles.url} 
                  />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            onClick={this.handlePrevBtn}
          >
            &#8592; Previous
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}className="btn btn-primary" onClick={this.handleNextBtn}>
            Next&#8594;
          </button>
        </div>
      </div>
    );
  }
}
export default News;
