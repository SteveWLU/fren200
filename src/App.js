import React, { useReducer } from "react";
import "./style.css";

function Test() {
  const [checked, toggle] = useReducer(checked => !checked, false);

  return (
    <>
      <>
        <input type="checkbox" value={checked} onChange={toggle} />
      </>
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
      <img
        src="https://stevewlu.github.io/fren283/assets/images/rue-médiévale.png"
        class="img-fluid"
      />
      <h2>FREN 283 | Hiver 2021</h2>
      <p>
        Prof. Stephen P. McCormick | Heures de bureau de 13h30 à 14h30;
        rendez-vous
      </p>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>
        This course retraces the evolution of thought in France across centuries
        through the examination of intellectual, cultural and artistic
        movements. In readings and discussions, we explore how ideas like
        language, national identity, gender, human rights, and scientific
        advancement have developed to form the framework of modern francophone
        societies. A primary objective through the study of the history of ideas
        is to provide ample opportunity to continue building proficiency in
        French. For this reason, all readings, discussions and assignments are
        in French (HU). Prerequisites: FREN 162, 164, or equivalency. FREN 261
        recommended.
      </p>
      <ul>
        {props.assignments.map(assign => (
          <li key={assign.id}>{assign.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>{props.year}</p>
    </footer>
  );
}

const assignments = [
  "Réflection 1",
  "Réflection 2",
  "Présentation 1",
  "Présentation 2"
];

const assignObjects = assignments.map((assign, i) => ({
  id: i,
  title: assign
}));

function App() {
  return (
    <div className="App">
      <Test />
      <Header name="L'Histoire des idées" />
      <Main assignments={assignObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
