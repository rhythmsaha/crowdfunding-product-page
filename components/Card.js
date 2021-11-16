const Card = ({ children }) => {
    return (
        <section className="bg-white shadow-lg opacity-100  rounded-lg p-8">
            {children}
        </section>
    );
};

export default Card;
