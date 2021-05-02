import React, { Component, createRef, Fragment } from "react";
import { connect } from "react-redux";
import ListingComponent from "../components/listing/ListingComponent";
import { fetchListingInitialize } from "../store/actions/ListingActions";

class ListingContainer extends Component {
  constructor(props) {
    super(props);
    this.infiniteScrollerRef = createRef();
  }
  componentDidMount() {
    this.createObserverApi();
    this.bindObserverApi();
  }
  createObserverApi = () => {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    this.intersectionObserver = this.createIntersectionObserverApi(
      this.intersectionCallback
    );
  };
  bindObserverApi = () => {
    if (this.infiniteScrollerRef.current) {
      this.intersectionObserver.observe(this.infiniteScrollerRef.current);
    }
  };
  createIntersectionObserverApi = (callback) => {
    return new IntersectionObserver(callback);
  };
  intersectionCallback = (entries) => {
    const { listingItems, currentPageIndex, totalContentItems } = this.props;
    const ratio = entries[0].intersectionRatio;
    // console.log("ratio", ratio);
    if (ratio > 0) {
      if (totalContentItems > 0 && listingItems.length === totalContentItems)
        return;
      this.callApi(currentPageIndex + 1);
    }
  };
  callApi = (pageNumber = 1) => {
    const { fetchListingInitialize } = this.props;
    fetchListingInitialize({
      pageNumber,
    });
  };
  render() {
    const { listingItems } = this.props;
    return (
      <Fragment>
        <ListingComponent listItems={listingItems} />
        <div ref={this.infiniteScrollerRef}></div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPageIndex: state.listing.currentPageIndex,
  totalContentItems: state.listing.totalContentItems,
});

export default connect(mapStateToProps, {
  fetchListingInitialize,
})(ListingContainer);
