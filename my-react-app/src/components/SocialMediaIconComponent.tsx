export interface SocialProps {
    instagram ?: string;
    linkedin  ?: string;
    gmail ?: string;
}

function SocialMediaIconComponent({instagram, linkedin , gmail } : SocialProps) {
    return(
        <div className="icons">
            <a  href={instagram}><img className="MediaIconIns" src="https://www.svgrepo.com/show/508844/instagram.svg" alt="instagram" /></a>
            <a  href={linkedin}><img className="MediaIconLin" src="https://www.svgrepo.com/show/521725/linkedin.svg" alt="LinkedIn" /></a>
            <a  href={gmail}><img className="MediaIconLin" src="https://www.svgrepo.com/show/72978/gmail-envelope.svg" alt="LinkedIn" /></a>
        
        </div>
    );
}

export default SocialMediaIconComponent;