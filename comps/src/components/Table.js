import { element } from 'prop-types';

function Table({ data, config, keyFn }) {
  const rendredRows = data.map((rowData) => {
    const rendredCells = config.map((column) => {
      return (
        <td className="p-3" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {rendredCells}
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
