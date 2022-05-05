import React from "react";

class CardQuote extends React.Component {
  render() {
    return (
      <article className="relative transform hover:scale-105 transition-all duration-200 bg-gray-700 py-6 px-8 rounded-md">
        <p className="text-lg text-gray-300 mb-3">{this.props.setQuote}</p>
        <h3 className="font-medium text-lg text-gray-200">
          <span className="font-normal text-lg text-gray-300 pr-2">―</span>
          {this.props.setAuthor}
        </h3>
      </article>
    );
  }
}

export default CardQuote;
