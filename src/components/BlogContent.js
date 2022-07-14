import React from "react";

function BlogContent(props) {
  console.log(props);//This helps us to view the datatype of the func as well as showing the contents
  return <div id="blog-content">{props.articleText}</div>;
}

export default BlogContent;
