// Write your JS code here
import './index.css'

const BlogItem = props => (
  <li className="blog-item-container">
    <div className="first-line">
      <h1>{props.blogListDetails.blogtitle}</h1>
      <p>{props.blogListDetails.publishedDate}</p>
    </div>
    <p>{props.blogList.description}</p>
  </li>
)
export default BlogItem
