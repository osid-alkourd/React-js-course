import  "./TagButtonStyle.css";
function TagButton({children, title}) {
  return <button className="tagButton"> {title} {children}</button>;
  
}

export default TagButton;