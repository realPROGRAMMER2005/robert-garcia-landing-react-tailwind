const Header = ({children, isBig = true }) => {
    const size = isBig ? 'text-[4rem] sm:text-[5.6rem]' : 'text-[3rem] sm:text-[4.2rem]';
    return (
        <div className={`font-bebas ${size} leading-[90%]`}>
            {children}
        </div>
    );
}

export default Header;
