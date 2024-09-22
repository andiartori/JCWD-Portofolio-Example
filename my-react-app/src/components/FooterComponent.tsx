export interface FooterProps {
    footer :string;
}


function FooterComponent ({footer} : FooterProps) {
    return (
        <div className="footer">
            <p>{footer}</p>
        </div>
    )
}

export default FooterComponent;