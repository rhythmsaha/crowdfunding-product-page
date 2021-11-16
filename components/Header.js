import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const MenuOpenHandler = () => {
        setMenuIsOpen(true);
    };
    const MenuCloseHandler = () => {
        setMenuIsOpen(false);
    };

    return (
        <header className="absolute top-0 w-full flex justify-between items-center h-16 p-4 z-10 lg:h-20 bg-gradient-to-b from-black to-transparent">
            <img src="/images/logo.svg" alt="logo" />

            <nav className="hidden lg:flex text-white space-x-6 items-center p-8 font-semibold">
                <span>About</span>
                <span>Discover</span>
                <span>Get Started</span>
            </nav>

            {menuIsOpen ? (
                <img
                    src="/images/icon-close-menu.svg"
                    alt="close"
                    className="h-4 lg:hidden"
                    onClick={MenuCloseHandler}
                />
            ) : (
                <img
                    src="/images/icon-hamburger.svg"
                    alt="hamburger"
                    className="h-4 lg:hidden"
                    onClick={MenuOpenHandler}
                />
            )}
            <AnimatePresence>
                {menuIsOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="fixed w-11/12 tranlate-x-2/4 top-14 lg:hidden"
                    >
                        <MobileMenu />
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
