// import { ShareIcon } from "../icons/ShareIcon";

// export function Card(){
//     return <div>

//         <div  className="p-4 bg-white rounded-md border border-gray-200 max-w-72">
//             <div className="flex justify-between">
//                 <div className="flex items-center text-md">
//                     <div className="pr-2 text-gray-500">
//                     <ShareIcon/>
//                     </div>
//                     Project Ideas!
//                 </div>
//                 <div className="flex items-center">
//                     <div className="pr-2 text-gray-500">
//                     <ShareIcon/>
//                     </div>
//                     <div className="text-gray-500">
//                     <ShareIcon/>
//                     </div>
//                 </div>
//             </div>
//             <div className="pt-4">
//                 {/* <iframe  className="w-full" src="https://www.youtube.com/embed/vPRdY87_SH0?si=mhiZEwB_HbWQzvmJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

//                 <blockquote className="twitter-tweet"><p lang="en" dir="ltr">this shot is an absolute chef’s kiss <a href="https://t.co/f8BwkfpBVP">pic.twitter.com/f8BwkfpBVP</a></p>&mdash; alexey (@sekachov) <a href="https://twitter.com/sekachov/status/1965471688818393152?ref_src=twsrc%5Etfw">September 9, 2025</a></blockquote>
//             </div>
//         </div>

//     </div>
// }

declare global {
  interface Window {
    twttr?: any;
  }
}



import { useEffect } from "react";
import { ShareIcon } from "../icons/ShareIcon";


interface CardProps {
    title: string,
    type: "x" | "youtube",
    link: string,
    
}


export function Card({ title, type, link } : CardProps) {
 
    useEffect(() => {
  if (type === "x" && window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load();
  }
}, [type, link]);


  // Extract YouTube video ID if type is YT
  const getYouTubeEmbed = (url : string) => {
    try {
      const urlObj = new URL(url as string);
      if (urlObj.hostname.includes("youtu.be")) {
        return urlObj.pathname.slice(1); // short links
      }
      return urlObj.searchParams.get("v"); // normal links
    } catch {
      return null;
    }
  };

  return (
    <div className="p-4 bg-white rounded-md border border-gray-200 max-w-72">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex items-center text-md">
          <div className="pr-2 text-gray-500">
            <ShareIcon />
          </div>
          {title}
        </div>
        <div className="flex items-center">
          <div className="pr-2 text-gray-500">
            <ShareIcon />
          </div>
          <div className="text-gray-500">
            <ShareIcon />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="pt-4">
        {type === "youtube" && (
          <div className="aspect-video w-full rounded-md overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${getYouTubeEmbed(link)}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {type === "x" && (
          <blockquote className="twitter-tweet">
            <a href={link}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
}
