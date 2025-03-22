import  "./TagButtonStyle.css";
function TagButton({children, title}) {
  //  if(title)
  //       return <button className="tagButton"> {title} {children}</button>;
  //  else 
  //     return <div></div>;
  return title ? <button className="tagButton"> {title} {children}</button> : <div></div>;
}



export default TagButton;