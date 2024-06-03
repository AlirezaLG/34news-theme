import React from "react";
import { getPostGQL } from "@/lib/functions";
import { searchGQL } from "@/lib/wpGraphQL";
import initTranslations from "@/i18n";
import Card1 from "@/components/Card1";
import { postPerPage } from "@/consts";

export default async function SearchPage({ params: { locale }, searchParams }) {
  const { t, resources } = await initTranslations(locale);

  const SearchData = await getPostGQL(
    searchGQL(searchParams.s, postPerPage, searchParams),
    locale
  );

  const pageInfo = SearchData.data.posts.pageInfo;
  const posts = SearchData.data.posts.edges;

  //   console.log(posts);

  // Parse page number from searchParams
  const currentPage = parseInt(searchParams.page || 1);
  const cursor = searchParams.cursor || "";

  // Extract hasNextPage and hasPreviousPage from pageInfo
  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = pageInfo;

  // Calculate next and previous page numbers
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  // Generate URLs for next and previous pages
  const nextPageUrl = hasNextPage
    ? `/search?s=${searchParams.s}&page=${nextPage}&cursor=${endCursor}&p=next`
    : null;
  const prevPageUrl =
    hasPreviousPage && currentPage > 1
      ? `/search?s=${searchParams.s}&page=${prevPage}&cursor=${startCursor}&p=prev`
      : null;

  // console.log(searchParams);
  return (
    <React.Fragment>
      <h1 className="text-start container mt-8 text-3xl">
        {t("Search Result for: ") + searchParams.s}
      </h1>
      <div className="container grid grid-cols-4 gap-5 category my-10">
        {posts.map((post) => {
          return <Card1 post={post.node} locale={locale} />;
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
        <br />
        <br />
      </div>
    </React.Fragment>
  );
}
