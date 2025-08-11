import { useState } from "react";

const Form = ({ spentCreate }) => {
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState(0);
  const [categoria, setCategoria] = useState("");

  const handleSubmitAddSpent = (e) => {
    e.preventDefault();
    console.log(nombre, monto, categoria);
    if (!nombre.trim() && monto !== null && !categoria.trim()) {
      return setNombre(""), setMonto(""), setCategoria("");
    }
    spentCreate(nombre, monto, categoria);
    return setNombre(""), setMonto(""), setCategoria("");
  };

  return (
    <div className="mt-10 w-full">
      <h2 className="font-bold text-xl px-10">Agregar Gasto</h2>
      <div className="px-10 mt-2">
        <form onSubmit={handleSubmitAddSpent}>
          <div className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
              Nombre
            </label>
            <input
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Ingrese el nombre del gasto"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
              Monto
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Ingrese el monto gastado"
              name="monto"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="categorias"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
              Categoria
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}>
              <option defaultValue={"Elige una categoria"}>
                Elige una categoria
              </option>
              <option value="recreativo">Recreativo</option>
              <option value="universidad">Universidad</option>
              <option value="trabajo">Trabajo</option>
            </select>
          </div>
          <button
            className="btn font-bold bg-green-500 hover:bg-green-700 p-2 rounded text-white mt-6 cursor-pointer"
            type="submit">
            Agregar Producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
