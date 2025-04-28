import Image from "next/image";

export default function ImageBlockServer({img}:{img:{url:string, alt:string}}){
    return(
        <div className="flex justify-center">
            <Image
            src={img.url}
            alt={img.alt}
            width={500}
            height={500}
            />
        </div>
    )
}