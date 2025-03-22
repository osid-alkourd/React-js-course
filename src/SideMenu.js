import TagButton from "./TagButton";
function SideMenu() {
  return (
    <div style={{ margin: "25px", border: "solid teal 2px" }}>
      <TagButton title="click1">
        <div>first button</div>
      </TagButton>
      <TagButton title="click2">
       <div>second button</div> 
      </TagButton>
      <TagButton title="">
        <div>third button</div>
      </TagButton>
    </div>
  );
}

export default SideMenu;
