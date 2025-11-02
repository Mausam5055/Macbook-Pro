import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>Made with Love by Mausam Kar</p>
                <img src="/logo.svg" alt ="Apple logo"/>
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer