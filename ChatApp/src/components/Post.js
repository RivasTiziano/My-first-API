import "./Post.css";

const Post = ({title,text}) => {
  return (
  <div className="post">
      <h1>{title}</h1>
      <h4>{text}</h4>
  </div>
  );
};

export default Post;
