import { useRef } from "react";

const ModalPledgeCard = ({
    name,
    pledge,
    description,
    items,
    id,
    selected,
    setSelected,
    onPayment,
}) => {
    const amountRef = useRef(null);

    const selectHadnler = () => {
        if (items < 1) return;
        setSelected(id);
    };

    const paymentHandler = () => {
        if (items < 1) return;
        onPayment(+amountRef.current.value);
    };

    return (
        <div
            onClick={selectHadnler}
            className={`border  rounded-lg transition-all duration-150 cursor-pointer select-none
            ${selected === id ? "border-indigo-500" : "border-gray-200"}
            ${items < 1 ? "opacity-50" : "opacity-100"} `}
        >
            <div className="p-4 lg:p-8">
                <div>
                    <div className="flex items-start lg:items-center  space-x-4">
                        {!(selected === id) && (
                            <span className="h-5 w-5 border rounded-full mt-1 lg:mt-0" />
                        )}

                        {selected === id && (
                            <span className="inline-block h-5 w-5 mt-1 lg:mt-0">
                                <img
                                    src="/images/icon-check.svg"
                                    alt=""
                                    className="object-contain h-full w-full"
                                />
                            </span>
                        )}

                        <div className="lg:flex lg:justify-between lg:items-center lg:space-x-4">
                            <h1 className="font-bold text-sm lg:text-base">
                                {name}
                            </h1>
                            {pledge > 0 && (
                                <h3 className="lg:flex-1 text-xs lg:text-sm font-bold text-indigo-500">
                                    Pledge ${pledge} or more
                                </h3>
                            )}

                            {items !== undefined && (
                                <div className="hidden lg:flex items-center space-x-2">
                                    <h1 className="font-extrabold lg:text-xl">
                                        {items}
                                    </h1>
                                    <span className="text-sm lg:text-base text-gray-400 ">
                                        left
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    <p className="text-xs lg:text-base text-gray-400 lg:pl-9 mt-4">
                        {description}
                    </p>

                    {items !== undefined && (
                        <div className="flex lg:hidden mt-4 items-center space-x-1">
                            <h1 className="font-extrabold lg:text-xl">
                                {items}
                            </h1>
                            <span className="text-sm lg:text-base text-gray-400 ">
                                left
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {selected === id && (
                <div className="flex flex-col lg:flex-row items-center lg:justify-between px-8 py-4 border-t space-y-4 lg:space-y-0 mt-8">
                    <h2 className="text-sm lg:text-base text-gray-400">
                        Enter your pledge
                    </h2>
                    <div className="flex items-center space-x-2 lg:space-x-4 text-sm lg:text-base">
                        <div className="relative">
                            <span className="absolute left-0 pl-4 font-bold text-gray-400 -translate-y-2/4 top-2/4">
                                $
                            </span>
                            <input
                                ref={amountRef}
                                type="text"
                                defaultValue={pledge}
                                className="pl-8 pr-4 py-2 outline-none border rounded-full w-24 font-bold"
                                disabled={items < 1}
                            />
                        </div>
                        <button
                            onClick={paymentHandler}
                            className="bg-indigo-500 px-4 py-2 text-white rounded-full"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalPledgeCard;
