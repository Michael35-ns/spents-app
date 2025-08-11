import { useEffect, useState } from "react";
import Form from "./components/Form";
import SpentList from "./components/SpentList";
import SpentTotal from "./components/SpentTotal";
import ClearButton from "./components/ClearButton";

let initialStateSpents = [];

try {
  const storedSpents = localStorage.getItem("spents");
  if (storedSpents) {
    initialStateSpents = JSON.parse(storedSpents);
    if (!Array.isArray(initialStateSpents)) {
      initialStateSpents = [];
    }
  }
} catch (e) {
  console.warn("Failed to parse localStorage spents: ", e);
  localStorage.removeItem("spents");
}

const App = () => {
  const [spents, setSpents] = useState(initialStateSpents);

  useEffect(() => {
    localStorage.setItem("spents", JSON.stringify(spents));
  }, [spents]);

  const spentCreate = (nombre, monto, categoria) => {
    const newSpent = {
      id: spents.length + 1,
      nombre: nombre.trim(),
      monto,
      categoria,
    };
    setSpents([...spents, newSpent]);
  };

  const handleClearSpents = () => {
    setSpents([]);
    localStorage.removeItem("spents");
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="container w-[400px] shadow-2xl p-6 rounded-2xl">
        <h1 className="text-center font-bold text-3xl">
          Calculadora de Gastos Diarios
        </h1>
        <Form spentCreate={spentCreate} />
        <SpentList spents={spents} />
        <SpentTotal spents={spents} />
        <ClearButton handleClearSpents={handleClearSpents} />
      </div>
    </div>
  );
};

export default App;
