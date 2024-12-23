import React, { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibility === true && (
        <Alert onClose={() => setAlertVisibility(false)}>
          It's OK to not be OK!
        </Alert>
      )}

      <Button
        onClick={() => setAlertVisibility(true)}
        onClose={() => setAlertVisibility(false)}
      >
        Show Alert
      </Button>
    </div>
  );
}

export default App;
