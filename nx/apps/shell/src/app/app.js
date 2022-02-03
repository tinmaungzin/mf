import React from "react";
import NxWelcome from "./nx-welcome";

const MFE1_Button =
  React.lazy(() =>
    import('kyc/Button')
  );

export function App() {
    return (<>
    <React.Suspense fallback='Loading Button'>
      <MFE1_Button />
    </React.Suspense>

      <NxWelcome title="shell"/>
      <div />
    </>);
}
export default App;
