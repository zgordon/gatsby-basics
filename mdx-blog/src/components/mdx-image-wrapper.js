import React from "react"

const MDXImage = ({ float, width, margin, children }) => {
  const style = {
    float: float || "none",
    width: width || "50%",
    margin: margin || "10px",
  }
  return <div style={style}>{children.props.children}</div>
}
export default MDXImage
