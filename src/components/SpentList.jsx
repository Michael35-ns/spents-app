import SpentItem from "./SpentItem";

const SpentList = ({ spents }) => {
  return (
    <div className="mt-4">
      <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
        {spents.map((spent) => (
          <SpentItem key={spent.id} spent={spent} />
        ))}
      </ul>
    </div>
  );
};

export default SpentList;
