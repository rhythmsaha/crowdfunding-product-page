import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PledgeCard from "../components/PledgeCard";

export default function Home() {
    const [bookMarked, setBookMarked] = useState(false);
    const [backed, setBacked] = useState(89914);
    const [backers, setBackers] = useState(5007);

    const [percent, setPercent] = useState(0);

    useEffect(() => {
        setPercent(Math.round((backed / 100000) * 100));
    }, [backed]);

    const toggleBookmark = () => {
        setBookMarked((prev) => !prev);
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Hero />

            <div className="w-10/12 mx-auto max-w-3xl -translate-y-28 opacity-100 space-y-4 relative">
                <img
                    src="/images/logo-mastercraft.svg"
                    alt=""
                    className="absolute left-2/4 -translate-y-2/4 -translate-x-2/4"
                />
                <Card>
                    <div className="mt-4">
                        <h1 className="font-bold text-lg text-center px-8">
                            Mastercraft Bamboo Monitor Riser
                        </h1>
                        <p className="mt-4 text-gray-400 text-sm text-center ">
                            A beautifully handcrafted monitor stand to reduce
                            neck and eye strain
                        </p>

                        <div className="flex space-x-2 lg:space-x-4 justify-center mt-4 lg:mt-8">
                            <button className="bg-indigo-500 text-white rounded-full w-36 text-sm font-semibold lg:text-base lg:w-44">
                                Back this project
                            </button>
                            <button
                                onClick={toggleBookmark}
                                className="flex items-center bg-gray-200 rounded-full"
                            >
                                <svg
                                    width="56"
                                    height="56"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g fill="none" fillRule="evenodd">
                                        <circle
                                            className={`fill-current ${
                                                bookMarked
                                                    ? "text-[#6366f1]"
                                                    : "text-[#f1f1f1]"
                                            } transition-all duration-500`}
                                            cx="28"
                                            cy="28"
                                            r="28"
                                        />
                                        <path
                                            className={`fill-current ${
                                                bookMarked
                                                    ? "text-white "
                                                    : "text-[#B1B1B1]"
                                            } transition-all duration-500`}
                                            d="M23 19v18l5-5.058L33 37V19z"
                                        />
                                    </g>
                                </svg>
                                <span
                                    className={`hidden lg:inline-flex ml-3 items-center w-28 font-semibold transition-all duration-500 ${
                                        bookMarked
                                            ? "text-indigo-500"
                                            : "text-gray-400"
                                    }`}
                                >
                                    {bookMarked ? "Bookmarked" : "Bookmark"}
                                </span>
                            </button>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="text-center p-4 lg:text-center">
                        <div className="mb-6 space-y-5 lg:flex items-center justify-center lg:space-y-0 lg:space-x-5">
                            <div className="lg:border-r lg:pr-8">
                                <h2 className="text-3xl font-bold">
                                    ${backed.toLocaleString()}
                                </h2>
                                <p className="text-gray-400 mt-1 text-sm">
                                    of $100,000 backed
                                </p>
                            </div>

                            <hr className="mx-auto w-20 lg:hidden text-gray-300" />

                            <div className="px-4">
                                <h2 className="text-3xl font-bold">
                                    ${backers.toLocaleString()}
                                </h2>
                                <p className="text-gray-400 mt-1 text-sm">
                                    total backers
                                </p>
                            </div>

                            <hr className="mx-auto w-20 lg:hidden text-gray-300" />

                            <div className="lg:border-l lg:pl-8">
                                <h2 className="text-3xl font-bold">56</h2>
                                <p className="text-gray-400 mt-1 text-sm">
                                    days left
                                </p>
                            </div>
                        </div>

                        <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden lg:mt-10">
                            <div
                                style={{ width: percent + "%" }}
                                className="bg-gradient-to-r from-purple-600 to-blue-400 h-full w-full mb-2 transition-all duration-300"
                            />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="py-4">
                        <div className="space-y-4">
                            <h1 className="font-bold text-gray-600">
                                About this project
                            </h1>
                            <p className="text-gray-400 text-xs lg:text-sm">
                                The Mastercraft Bamboo Monitor Riser is a sturdy
                                and stylish platform that elevates your screen
                                to a more comfortable viewing height. Placing
                                your monitor at eye level has the potential to
                                improve your posture and make you more
                                comfortable while at work, helping you stay
                                focused on the task at hand.
                            </p>
                            <p className="text-gray-400 text-xs lg:text-sm">
                                Featuring artisan craftsmanship, the simplicity
                                of design creates extra desk space below your
                                computer to allow notepads, pens, and USB sticks
                                to be stored under the stand.
                            </p>
                        </div>

                        <div className="py-4 mt-4 space-y-3">
                            <PledgeCard
                                id="1"
                                name="Bamboo Stand"
                                pledge={25}
                                description="You can get an ergonomic stand made of natural bamboo. you've
                                helped us launch our promotional campaign, and you will be added
                                to a special Backer member list."
                                items={101}
                            />

                            <PledgeCard
                                id="2"
                                name="Black Edition Stand"
                                pledge={75}
                                description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                                items={64}
                            />

                            <PledgeCard
                                id="3"
                                name="Mahogany Special Edition"
                                pledge={200}
                                description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                                items={0}
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}
