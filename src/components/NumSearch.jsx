function NumSearch(props) {
  return (
    <input
      id="name"
      type="number"
      placeholder="Your Research"
      onChange={(e) => props.numSearch(Number(e.target.value))}
    />
  );
}

export default NumSearch;
