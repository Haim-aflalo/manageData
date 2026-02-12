function NameSearch(props) {
  return (
    <input
      id="name"
      type="text"
      placeholder="Your Research"
      onChange={(e) => props.nameSearch(e.target.value)}
    />
  );
}

export default NameSearch;
