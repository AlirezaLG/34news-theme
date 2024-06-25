import React from "react";
import { redirect } from "next/navigation";

import { getPostGQL, getDataGQL } from "@/lib/functions";
import { AuthorGQL } from "@/lib/wpGraphQL";
import initTranslations from "@/i18n";
import Card1 from "@/components/Card1";
import { postPerPage } from "@/consts";
import { sanitizeId } from "@/lib/helpers";
import AuthorBox from "@/components/AuthorBox";

export default async function AuthorPage({
  params: { id, locale },
  searchParams,
}) {
  const { t, resources } = await initTranslations(locale);
  const authorId = sanitizeId(id);

  const authorData = await getPostGQL(
    AuthorGQL(authorId, postPerPage, searchParams),
    locale
  );

  if (authorData.data.customUser == null) {
    redirect(`/404`);
  }

  // console.log(authorData);
  const pageInfo = authorData.data.posts.pageInfo;
  const posts = authorData.data.posts.edges;
  const author = authorData.data.customUser;
  // Parse page number from searchParams
  const currentPage = parseInt(searchParams.page || 1);
  // const cursor = searchParams.cursor || "";

  // Extract hasNextPage and hasPreviousPage from pageInfo
  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = pageInfo;

  // Calculate next and previous page numbers
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  // // Generate URLs for next and previous pages
  const nextPageUrl = hasNextPage
    ? `/author/${authorId}?page=${nextPage}&cursor=${endCursor}&p=next`
    : null;
  const prevPageUrl =
    hasPreviousPage && currentPage > 1
      ? `/author/${authorId}?page=${prevPage}&cursor=${startCursor}&p=prev`
      : null;

  // const category =

  return (
    <React.Fragment>
      <div className="container category my-5">
        <div className="my-5 md:mx-56  ">
          <AuthorBox author={author} locale={locale} />
        </div>
        <div className=" grid md:grid-cols-4 xs:grid-cols-1  md:gap-5 xs:gap-0  ">
          {posts.map((post) => {
            return (
              <Card1
                key={React.key}
                post={post.node}
                category={post?.node?.categories?.edges[0].node?.slug}
                locale={locale}
              />
            );
          })}
        </div>

        <div className="pagination text-center my-5 space-x-3">
          {prevPageUrl && (
            <a
              href={prevPageUrl}
              className="prev-page text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  "
            >
              {t("Previous Page")}
            </a>
          )}
          {nextPageUrl && (
            <a
              href={nextPageUrl}
              className="next-page text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  "
            >
              {t("Next Page")}
            </a>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
