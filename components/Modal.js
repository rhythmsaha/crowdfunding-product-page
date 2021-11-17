import { useEffect } from "react";
import ModalPledgeCard from "./ModalPledgeCard";

const Modal = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black  bg-opacity-60 z-50 flex justify-center items-start overflow-auto">
            <div className="mt-24 bg-white p-8 mb-20 w-11/12 max-w-3xl">
                <div className="flex justify-between">
                    <h1 className="font-bold text-black">Back this project</h1>
                    <span>
                        <svg
                            width="15"
                            height="15"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                                fill="#000"
                                fillRule="evenodd"
                                opacity=".4"
                            />
                        </svg>
                    </span>
                </div>
                <p className="text-gray-400 text-sm mt-3">
                    Want to support us in bringing Mastercraft Bamboo Monitor
                    Riser out in the world ?
                </p>

                <div className="mt-4 space-y-4">
                    <ModalPledgeCard
                        dgeCard
                        id="1"
                        name="Bamboo Stand"
                        pledge={25}
                        description="You can get an ergonomic stand made of natural bamboo. you've
                    helped us launch our promotional campaign, and you will be added
                    to a special Backer member list."
                        items={101}
                    />
                    <ModalPledgeCard
                        id="2"
                        name="Black Edition Stand"
                        pledge={75}
                        description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                        items={64}
                    />

                    <ModalPledgeCard
                        id="3"
                        name="Mahogany Special Edition"
                        pledge={200}
                        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                        items={0}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;
