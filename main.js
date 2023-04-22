// Description: React Core lab01
const title = <h1>React lab01</h1>;

// Component
function App() {
  return (
    <>
      <div className="container">
        <div className="mainCard">
          <div className="card">
            <h1>Example Domain</h1>
          </div>
          <div className="card">
            <p>
              This domain is for use in illustrative examples in documents. You
              may use this domain in literature without prior coordination or
              asking for permission.
            </p>
          </div>
          <div className="card">
            <a href="https://www.google.com">More information...</a>
          </div>
        </div>
      </div>
    </>
  );
}

// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);