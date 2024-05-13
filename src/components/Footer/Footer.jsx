import BitmojiPc from "../../assets/me/bitmoji-pc.png"
import './Footer.scss'

const Footer = () => {
    return (
            <section className='footer__content'>
                <img className="footer__img" src={BitmojiPc} alt="avatar representant 
                Kevin" />
                <span className="footer__span">© 2024 Tous droits réservés à Kevin Cordier</span>
            </section>
    )
}

export default Footer