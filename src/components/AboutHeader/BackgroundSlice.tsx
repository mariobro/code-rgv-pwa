/**
 * Header Component
 */
import * as React from "react";
import { v4 } from "uuid";

const backgroundSlice = {
  backgroundColor: "#00b3b3",
  height: "200px",
  marginBottom: "30px",
  paddingTop: "70px"
};

export class BackgroundSlice extends React.PureComponent {
  public render() {
    return (
      <div style={backgroundSlice}>
        {this.props.children}
      </div>
    );
  }
}
