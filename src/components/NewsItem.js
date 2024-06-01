import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url , date , author} = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">By {author?author:"Unknown"} on {new Date(date).toGMTString().slice(0,16)}</p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
