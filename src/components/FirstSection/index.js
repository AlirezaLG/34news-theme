import React from "react";
import BigImage from "../BigImage";
import ListNews from "../ListNews";
import SocialMedia from "../SocialMedia";
import FourPostinRow from "../FourPostsinRow";

export default function FirstSection({
  slideshow,
  widgetSlideshow,
  slideshowRight,
  widgetSlideshowRight,
  socialMedia,
  locale,
}) {
  return (
    <div className="container">
      <div className="grid md:grid-cols-3 xs:grid-cols-1 md:gap-5 xs:gap-0">
        <div className="md:col-span-2 grid md:grid-cols-3 xs-grid-1 md:gap-5 xs:gap-0  py-2">
          <BigImage posts={slideshow} category={widgetSlideshow} />
          <FourPostinRow posts={slideshow} widget={widgetSlideshow} />
        </div>
        <div className="py-2 ">
          {/* <iframe  style={{ with:"100%" , height:"220px" }}  src="https://www.youtube.com/embed/IwKeRHsxQTA?si=4m5eQ7U82XGw3XgD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
          <ListNews
            locale={locale}
            posts={slideshowRight}
            widget={widgetSlideshowRight}
          />
          <SocialMedia socialMedia={socialMedia} />
        </div>
      </div>
    </div>
  );
}
