const Hero = () => {
    return (
        <div className="w-full ">
            <img
                src="/images/image-hero-mobile.jpg"
                alt="image-hero-mobile"
                className="lg:hidden w-full object-cover h-64"
            />
            <img
                src="/images/image-hero-desktop.jpg"
                alt="image-hero-desktop"
                className="hidden lg:block w-full object-cover"
            />
        </div>
    );
};

export default Hero;
