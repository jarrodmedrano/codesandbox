import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const [data] = useFetch("https://randomuser.me/api/?results=5");

  return (
    <div className="App">
      <h1>Axios async useFetch example</h1>
      <p>Custom useFetch hook, with async await</p>
      <ul>
        {data &&
          data.results.map((item, index) => {
            return (
              <li key={index}>
                {item.name.first} {item.name.last}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
