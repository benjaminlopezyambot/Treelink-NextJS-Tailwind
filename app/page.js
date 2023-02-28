import Image from "next/image";
import data from '../data.json';

function LinkCard({href, title, image}) {
  return (
    <a href={href}  className="flex items-center w-full p-1 rounded-md 
    hover:scale-105 transition-all  mb-3 text-gray-800 bg-gray-100">
      <div className="flex  w-full text-center">
    <Image className="rounded-sm" alt={title}  src={image} width={30} height={30} />

        <h2 className="font-semibold w-full text-center">{title}</h2>
      </div>
    </a>
  )
}

export default function Home() {
return(
  <div className="flex mx-auto flex-col items-center px-8 w-full justify-center mt-16 ">
    <Image className="rounded-full" alt={data.name}  src={data.avatar} width={96} height={96} />
    <h1 className="font-semibold mt-4 mb-8 text-lg">{data.name}</h1>
    {data.links.map((item)=> (
      <LinkCard key={item.href} {...item}/>
    ))}
  </div>
)
}


