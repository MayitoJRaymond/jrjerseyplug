export default function Docs({ params }: {params: {slug: string[];};}) {
    if (params.slug.length === 2) {
        return (
            <div>
                <h1>Docs</h1>
                <h2>{params.slug[0]}</h2>
                <p>This is the {params.slug[0]} page</p>
                <h2>{params.slug[1]}</h2>
                <p>This is the {params.slug[1]} page</p>
            </div>
        );
    } else if (params.slug.length === 1) {
        return (
            <div>
                <h1>Docs</h1>
                <h2>{params.slug[0]}</h2>
                <p>This is the {params.slug[0]} page</p>
            </div>
        );
    } else if (params.slug.length === 0) {  
    
        return (
            <div>
                <h1>Docs</h1>
                <p>This is the main docs page</p>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Docs</h1>
                <p>Page not found</p>
            </div>
        );
    }
}