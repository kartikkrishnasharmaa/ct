const TwSizeIndicator = () => {
  if ( process.env.NODE_ENV === "development" ) {
    return (
      <div>
        {/* <span className="block sm:hidden">all</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block 2xl:hidden">xl</span>
        <span className="hidden 2xl:block">2xl</span> */}
      </div>
    );
  } else {
    return null;
  }
};
export default TwSizeIndicator;
