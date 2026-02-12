function Filter(props) {
  return (
    <div>
      {['active', 'quiet', 'dead', 'agent', 'all'].map((status) => (
        <button onClick={() => props.filter(status)}>{status}</button>
      ))}
    </div>
  );
}

export default Filter;
