import React, { useEffect, useState } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import Router from 'router';
import { readConfig } from 'config';

const App = (): JSX.Element => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      await readConfig();
      setIsReady(true);
    })();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
