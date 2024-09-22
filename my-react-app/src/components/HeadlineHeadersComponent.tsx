export interface HeadlineProps {
    title : string;
    paragraph : string;
}


function HeadlineHeadersComponent({ title , paragraph }: HeadlineProps) {
    return (   
        <div>
        <p>{title}</p> 
        <p>{paragraph}</p>
        </div>

    );
}


export default HeadlineHeadersComponent;