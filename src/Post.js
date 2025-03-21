function Post({title,description}) {
  return (
    <div
      style={{
        padding: "10px",
        border: "solid teal 2px",
        margin: "25px", 
      }}
    >
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
    </div>
  );
}
export default Post;
