function Table({ data, config }) {
  const rendredRows = data.map((fruit) => {
    return (
      <tr key={fruit.name} className="border-b">
        <td className="p-3">{fruit.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${fruit.color}`}></div>
        </td>
        <td className="p-3">{fruit.score}</td>
      </tr>
    );
  });

  const renderHeader = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b">{renderHeader}</tr>
      </thead>
      <tbody>{rendredRows}</tbody>
    </table>
  );
}
export default Table;
