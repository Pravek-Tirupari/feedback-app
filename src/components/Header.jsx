function Header(props) {
  const title = props.title;
  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

export default Header;
