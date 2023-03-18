import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"
import logo from "../../assets/free-logo.png"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <a href="/"><img src={logo} /> </a>
            <div>
                <p> Desarrollado por Martin Davidenco </p>
            </div>
            <div><a href="https://www.facebook.com/Leomessi" title="facebook"><img src={facebook} /></a>
                <a href="https://www.twitter.com/leomessi"><img src={twitter}/></a>
                <a href="https://www.instagram.com/leomessi"><img src={instagram}/></a>
            </div>
        </footer>
    )
}

export default Footer