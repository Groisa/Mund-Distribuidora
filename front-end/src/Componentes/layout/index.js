import Footer from "./footer"
import Header from "./header"

function Layout ({ children }) {
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

export default Layout