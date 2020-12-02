function Header() {
  const styles = {
    textAlign: "center",
    color: "teal",
    background: "rgba(152, 209, 182, 0.2)",
    padding: "5px 0px",
  };
  return (
    <div style={styles}>
      <h2>Natural Events Tracker [Powered By : NASA]</h2>
    </div>
  );
}

export default Header;
