const Recipes = () => {
  const COLUMNS = ["Method"];

  const DATA = [
    {
      id: 1,
      name: "V60",
    },
    {
      id: 2,
      name: "Aeropress",
    },
    {
      id: 3,
      name: "Moka",
    },
    {
      id: 4,
      name: "Syphon",
    },
  ];

  return (
    <div>
      <table className="table-fixed bg-slate-600 w-full rounded  ">
        <thead>
          <tr>
            {COLUMNS.map((m) => (
              <th className="px-4 py-4" key={m}>
                {m}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DATA.map((row) => (
            <tr key={row.id} className="hover:bg-orange-400 cursor-pointer ">
              <td className="px-6 py-4">{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipes;
