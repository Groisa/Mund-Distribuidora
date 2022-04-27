import Footer from "./footer"
import Header from "./header"

function LayoutLoginClient ({ children }) {
    return (
      <>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </>
    )
  }

export default LayoutLoginClient