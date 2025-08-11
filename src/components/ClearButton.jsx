const ClearButton = ({ handleClearSpents }) => {
  return (
    <button
      className="btn bg-red-500 hover:bg-red-700 p-2 rounded text-white font-bold mt-2"
      onClick={handleClearSpents}>
      Limpiar gastos
    </button>
  );
};

export default ClearButton;
