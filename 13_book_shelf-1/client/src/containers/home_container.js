import React, { Component } from "react";
import { connect } from "react-redux";
import { getBooks } from "../actions";
import BookItem from "../widgetsUI/book_item";

class HomeContainer extends Component {
  state = {
    limit: 1
  };
  componentWillMount() {
    this.props.dispatch(getBooks(this.state.limit, 0, "desc"));
  }

  renderItems = books =>
    books.list
      ? books.list.map(item => <BookItem {...item} key={item._id} />)
      : null;

  loadmore = () => {
    let count = this.props.books.list.length;
    this.props.dispatch(
      getBooks(this.state.limit, count, "desc", this.props.books.list)
    );
  };

  render() {
    return (
      <div>
        {this.renderItems(this.props.books)}
        <div className="loadmore" onClick={this.loadmore}>
          Load More
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(HomeContainer);
