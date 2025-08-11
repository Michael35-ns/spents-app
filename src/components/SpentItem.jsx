const SpentItem = ({ spent }) => {
  const { nombre, monto} = spent;
  return (
    <li
      className="flex px-4 py-2 border-b border-gray-200 dark:border-gray-600"
      >
      <p className="w-64 flex-none font-bold text-xl">{nombre}</p>
      <span className="flex-1 text-slate-500 font-bold text-xl">
        {new Intl.NumberFormat("es-CR", {
          style: "currency",
          currency: "CRC",
          minimumFractionDigits: 0,
        }).format(monto)}
      </span>
    </li>
  );
};

export default SpentItem;
