import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CardQuote from "./components/CardQuote";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: [
        {
          id: 1,
          text: `“Be yourself; everyone else is already taken.”`,
          author: "Oscar Wilde",
        },
        {
          id: 2,
          text: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
          author: "Marilyn Monroe",
        },
        {
          id: 3,
          text: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
          author: "Albert Einstein",
        },
        {
          id: 4,
          text: `“So many books, so little time.”`,
          author: "Frank Zappa",
        },
        {
          id: 5,
          text: `“A room without books is like a body without a soul.”`,
          author: "Marcus Tullius Cicero",
        },
      ],
      text: "",
      author: "",
      newQuote: {
        id: 0,
        text: "",
        author: "",
      },
    };
  }
  handleChange = (event) => {
    let getLastId = this.state.quotes.length + 1;
    this.setState({
      [event.target.name]: event.target.value,
      newQuote: {
        id: getLastId,
        text: this.state.text,
        author: this.state.author,
      },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.text === "" || this.state.author === "") return alert("Please fill before submit!")
    this.setState({
      quotes: [...this.state.quotes, this.state.newQuote],
    });
    this.setState({
      text: "",
      author: "",
    });
    alert("Add new Quote successfully!")
  };
  render() {
    return (
      <>
        <Nav />
        <main>
          <div className="container">
            <div className="w-full md:w-3/4 mx-auto pt-8 md:pt-12 lg:pt-14 pb-14 md:pb-16 lg:pb-20 px-5">
              <div className="w-full mb-10">
                <form className="w-full" onSubmit={this.handleSubmit}>
                  <div className="mb-2">
                    <label className="block font-medium text-base text-gray-200 mb-1">
                      Quote
                    </label>
                    <textarea
                      id="quote"
                      className="w-full bg-gray-800 text-base text-gray-400 focus:text-gray-200p py-2 px-4 rounded-md"
                      rows="6"
                      value={this.state.text}
                      onChange={this.handleChange}
                      name="text"
                      placeholder="Add New Quote"
                    ></textarea>
                  </div>
                  <div className="mb-7">
                    <label className="block font-medium text-base text-gray-200 mb-1">
                      Author
                    </label>
                    <input
                      id="author"
                      value={this.state.author}
                      name="author"
                      onChange={this.handleChange}
                      className="w-full bg-gray-800 text-base text-gray-400 focus:text-gray-200p py-3 md:py-4 px-4 rounded-md"
                      type="text"
                      placeholder="Author"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-700 font-medium text-base text-gray-200 py-3 md:py-4 rounded-md"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
              {/* LIST QUOTE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {this.state.quotes.map((quote) => (
                  <CardQuote
                    key={quote.id}
                    setQuote={quote.text}
                    setAuthor={quote.author}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
