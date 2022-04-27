import Footer from "./footer"
import Header from "./header"

function LayoutNotLogin ({ children }) {
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

export default LayoutNotLogin