import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetMovieDetail } from "./modules/action";
class MovieDetailComponent extends Component {
  componentDidMount() {
    this.props.actGetMovieDetail(this.props.match.params.id);
  }
  renderMovieDetail = () => {
    let { movieDetail } = this.props;
    if (movieDetail && movieDetail !== null) {
      return (
        <>
          <div className="col-sm-6">
            <img src={this.props.movieDetail.hinhAnh} alt="" />
          </div>
          <div className="col-sm-6"></div>
        </>
      );
    }
  };
  render() {
    let { loading, err } = this.props;
    if (loading) {
      return <h5 className="display-4">loading...!</h5>;
    }
    if (err) {
      return <h5>Something was wrong</h5>;
    }
    return (
      <div className="container">
        <div className="row">{this.renderMovieDetail()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetailReducer.movieDetail,
    loading: state.movieDetailReducer.loading,
    err: state.movieDetailReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actGetMovieDetail: (id) => {
      dispatch(actGetMovieDetail(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailComponent);