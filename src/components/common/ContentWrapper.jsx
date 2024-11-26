const ContentWrapper = ({children}) => {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-3 sm:px-6`}>
      {children}
    </div>
  );
}

export default ContentWrapper;
