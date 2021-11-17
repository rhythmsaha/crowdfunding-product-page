const PledgeCard = ({ name, pledge, description, items, id, onSelect }) => {
    const selectHadnler = () => {
        onSelect(id);
    };

    return (
        <div
            className={`border-gray-200 border p-4 lg:p-8 rounded-lg ${
                items > 1 ? "opacity-100" : "opacity-50"
            }`}
        >
            <div className="lg:flex justify-between">
                <h1 className="font-bold text-sm lg:text-base">{name}</h1>
                <h3 className="text-xs lg:text-sm font-extrabold text-indigo-500">
                    Pledge ${pledge} or more
                </h3>
            </div>

            <p className="text-xs lg:text-base text-gray-400 mt-4 mb-8">
                {description}
            </p>

            <div className="lg:flex justify-between space-y-4 lg:space-y-0 lg:items-center">
                <div className="flex space-x-2 items-center">
                    <h1 className="text-2xl lg:text-4xl font-extrabold">
                        {items}
                    </h1>
                    <span className="text-sm text-gray-400 lg:text-lg">
                        left
                    </span>
                </div>

                <button
                    onClick={selectHadnler}
                    className="text-white bg-indigo-500 disabled:bg-gray-500 px-4 py-2 lg:px-4 lg:py-3 rounded-full text-sm lg:text-base lg:font-semibold"
                    disabled={items <= 0}
                >
                    Select Reward
                </button>
            </div>
        </div>
    );
};

export default PledgeCard;
