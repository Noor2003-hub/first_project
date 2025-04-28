export default function CoverBlockServer({title,subtitle}:{title:string, subtitle:string}){
    return(
        <div className="max-w-5xl mx-auto flex flex-col items-center bg-blue-100 justify-center py-20 text-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-xl">{subtitle}</p>
        </div>
    )
}