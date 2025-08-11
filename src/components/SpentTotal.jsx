const SpentTotal = ({ spents }) => {
  const total = spents.reduce((acc, item) => acc + Number(item.monto), 0);
  return (
    <div className="mt-4 font-bold text-xl text-dark">
      Total Gastado:{" "}
      {new Intl.NumberFormat("es-CR", {
        style: "currency",
        currency: "CRC",
        minimumFractionDigits: 0,
      }).format(total)}
    </div>
  );
};

export default SpentTotal;
