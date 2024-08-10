const LandingLayout = ({children}: {children: React.ReactNode}) => {
    return (
      <div className="bg-white max-h-screen">
          <div>
              {children}
          </div>
      </div>
    )
}
export default LandingLayout