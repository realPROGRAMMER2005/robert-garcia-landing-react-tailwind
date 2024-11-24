

const ContentWrapper = ({children, maxWidth='1400px'}) => {
  return (
    <div className={`w-full max-w-[${maxWidth}] mx-auto px-3 sm:px-6`}>
      {children}
    </div>
  )
}

export default ContentWrapper
