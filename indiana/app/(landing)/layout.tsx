const LandingLayout = ({children}: {children: React.ReactNode}) => {
    return (
      <div className="bg-gradient-to-br from-purple-400 to-fuchsia-500 h-screen">
          <div>
              {children}
          </div>
      </div>
    )
}
export default LandingLayout