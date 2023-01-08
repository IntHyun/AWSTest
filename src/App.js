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

  return <h1>AWS Test</h1>;
}

export default App;
