

const Items = () => {

    const items = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" },
        { id: 5, name: "Item 5" },
    ];


  return (
    <div className="bg-slate-800 h-screen">
        <div className="flex justify-center items-center h-full">
            <ul className="text-white">
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
            </ul>
        </div>
    </div>
  );
};

export default Items;
