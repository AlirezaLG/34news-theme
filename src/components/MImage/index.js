import React from "react";
import Image from "next/image";

export default function MImage({ post, imgsize, imgClass = "" }) {
  // console.log(post?.featuredImage?.node?.mediaDetails);
  // const imageSize = imgsize ? imgsize : 0;
  const img = post?.featuredImage?.node?.mediaDetails?.sizes?.[0] || "";

  return (
    <React.Fragment>
      <Image
        unoptimized
        width={img?.width || 600}
        height={img?.height || 360}
        alt={post?.title || "Default Image"}
        title={post?.title || "Default Image"}
        className={`${imgClass} w-full h-auto rounded-sm hover:opacity-85 `}
        src={img?.sourceUrl || "/default.jpg"}
      />
    </React.Fragment>
  );
}
