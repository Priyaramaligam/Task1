import Logo from '../Assets/Logo.food.jpg';
const Header = () => {
    return (
        <div className="main-content">

            <div className="logo">
                <img src={Logo} className="logo-img" />
            </div>
            <div className="para">
                <p><a href="#">Home</a></p>
                <p><a href="#">Login</a></p>
                <p><a href="#">About</a></p>
                <p><a href="#">Contact us</a></p>
            </div>
        </div>

    );
}
export default Header;