import React, { Component } from "react";
import { connect } from "react-redux";

import { fwRequest } from "../redux/actions";

class Fw extends Component {
  _renderLangDropDown = () => {
    let languages = ["Java", "Javascript", "Python"];
    return (
      <select
        style={{ padding: "10px", fontSize: "20px" }}
        onChange={this._fetchFw}
      >
        <option value="">Select Language</option>
        {languages.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    );
  };

  _fetchFw = (e) => {
    let val = e.target.value;
    if (val === "") {
    } else {
      this.props.fwRequest({
        name: val,
      });
    }
  };

  _renderLoading = () => {
    const { fw } = this.props.fw;
    return <div>{fw.isLoading ? "Loading..." : null}</div>;
  };

  _renderResult = () => {
    const { fw } = this.props.fw;

    if (fw.isFailed) {
      return (
        <div style={{ color: "red" }}>
          Failed with message: {fw.data.message}
        </div>
      );
    } else {
      return (
        <div>
          {fw && fw.data[0] && fw.data[0].id ? "ID: " + fw.data[0].id : null}
          <br />
          {fw && fw.data[0] && fw.data[0].id
            ? "Name: " + fw.data[0].name
            : null}
          <br />

          {fw && fw.data[0] && fw.data[0].frameworks
            ? "Frameworks: " + fw.data[0].frameworks.toString()
            : null}
          <br />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h1> Language Frameworks </h1>
        {this._renderLangDropDown()}
        <br />
        {this._renderLoading()}
        <br />
        {this._renderResult()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fw: state,
});

const mapDisptachToProps = (dispatch) => ({
  fwRequest: (data) => dispatch(fwRequest(data)),
});

export default connect(mapStateToProps, mapDisptachToProps)(Fw);
