import TagButton from "./TagButton";
const buttonsData = [
  { id: 1, title: "click1", content: "first button" },
  { id: 2, title: "click2", content: "second button" },
  { id: 3, title: "", content: "" },
];
const buttonsComponentList = buttonsData.map((button) => {
  return (
    <TagButton key={button.id} title={button.title}>
      <div>{button.content}</div>
    </TagButton>
  );
});
function SideMenu() {
  return (
    <div style={{ margin: "25px", border: "solid teal 2px" }}>
      {buttonsComponentList}
    </div>
  );
}

export default SideMenu;
