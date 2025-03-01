import textdot from "../assets/textdot.svg";

const PostCard = ({ post, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={post.img} srcSet={`${post.img_2x} 2x`} alt={post.title} />
      <div className="card-content">
        <span className="card-tag">{post.tags}</span>
        <p className="card-title">{post.title}</p>
        <div className="card-details">
          <span className="card-author">{post.autor}</span>
          <img src={textdot} alt="dot" className="separator" />
          <span className="card-date">{post.date}</span>
          <img src={textdot} alt="dot" className="separator" />
          <span className="card-views">{post.views} views</span>
        </div>
        <p className="card-text">{post.text}</p>
      </div>
    </div>
  );
};

export default PostCard;
