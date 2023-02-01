import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Mr J's Super Bass Practice Page</span></h1>
            </header>
            <main className="public__main">
              
                <address className="public__addr">
                   <a href="tel:+1800SUPERBASS">(800) SUPER-BASS</a>
                </address>
                
            </main>
            <footer>
                <Link to="/login">Login And Become A Better Player NOW!</Link>
            </footer>
        </section>

    )
    return content
}
export default Public