const TableRender = ({ rows, schema, title }) => {

  return (
    <div>
      <h4>{title}</h4>
      <div className="table-list">
        <div className="table-list__header">
          <div className="table-list__row">
            {schema && schema.map(col => (
                <div className="table-list__cell" key={col?.key}>{col?.label || ''}</div>
            ))}
          </div>
        </div>
        <div className="table-list__body">
          {rows && rows.map((row, index)  => (
            <div className="table-list__row" key={index}>
              {schema.map((col) => (
                <div className="table-list__cell" key={col?.key} data-label={col?.label || ''}>
                  {row[col?.key] || '-' }
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableRender;