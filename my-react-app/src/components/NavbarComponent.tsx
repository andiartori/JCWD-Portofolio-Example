interface NavProps {
    title : string;
    nav1 : string;
    nav2 ? : string;
    onClick ?: () => void;
}

function NavbarComponent({title, nav1 , nav2, onClick} : NavProps) {
    return(
    <nav>
        <h3>{title}</h3>
        <div>
            <a className="about" href="#about">{nav2}</a>  {/* replace with real link */}
            <button onClick = {onClick} >{nav1}</button>
        </div>
     
    </nav>
    );
}

export default NavbarComponent;