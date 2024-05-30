import React from "react";
import PostTitle from "../PostTitle";
import Hcards from "../Hcards";
import { catLinkHome } from "@/lib/helpers";
export default function TwoCols({
  twoCols,
  widgetTwoCols,
  twoColsRight,
  widgetTwoColsRight,
  locale,
}) {
  return (
    <div className="container">
      <div className="grid md:grid-cols-3 md:gap-5 xs:gap-0 my-5 mb-8">
        <div className="md:col-span-2 xs:col-span-3">
          <PostTitle
            title={widgetTwoCols?.title}
            href={catLinkHome(widgetTwoCols?.category.nodes[0], locale)}
            size={"text-2xl"}
            more={widgetTwoCols?.more}
          />
          <Hcards posts={twoCols} widget={widgetTwoCols} content={true} />
        </div>
        <div className="md:col-span-1 xs:col-span-3">
          <PostTitle
            title={widgetTwoColsRight?.title}
            href={catLinkHome(widgetTwoColsRight?.category.nodes[0], locale)}
            size={"text-2xl"}
            more={false}
          />
          <Hcards
            posts={twoColsRight}
            widget={widgetTwoColsRight}
            content={false}
          />
        </div>
      </div>
    </div>
  );
}
