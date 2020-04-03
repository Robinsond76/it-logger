import React, { useState, useEffect } from 'react';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslin-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs'); //no need for http:localhost:5000 because of proxy in package.json
    const data = await res.json(); // fetch isn't like axios where we can directly refer to res.data. We need to change it to json first

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <ul className='collection-with-header'>
      <li className='collection-header'>
        <h4 className='center'> System Logs </h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map((log) => <li key={log.id}>{log.message}</li>)
      )}
    </ul>
  );
};

export default Logs;
