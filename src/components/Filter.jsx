import { useState } from 'react';

function Filter(props) {
  const [data, setDate] = useState(props.data);
  return (
    <div>
      <div>
        {['quiet', 'dead', 'active', 'agent', 'all'].map((state) => (
          <button
            onClick={useState(() => {
              props.data.filter((ter) => ter.status == 'all' || [state]);
            })}
          >
            {state}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
