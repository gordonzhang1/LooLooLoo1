import "./App.css";

function App() {
  return (
    <>
      <div>Hello World</div>

      <iframe 
            href="https://www.mappedin.com/" 
            title="Mappedin Map" 
            name="Mappedin Map" 
            allow="clipboard-write; web-share" 
            width="100%" 
            height="650" 
            frameBorder="0" 
            // style="border:0"
            src="https://app.mappedin.com/map/66ce20fdf42a3e000b1b0545?embedded=true">
      </iframe>
    </>
  );
}

export default App;
