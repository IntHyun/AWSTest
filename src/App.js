import axios from "axios";

function App() {
  const testAxios = async () => {
    try {
      const res = await axios.get("https://www.gscook-back.link/notice/list");

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  testAxios();

  return <button onClick={testAxios}>Click me!</button>;
}

export default App;
