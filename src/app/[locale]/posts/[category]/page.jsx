import React from "react";
import { getPostGQL, getDataGQL } from "@/lib/functions";
import { categoryGQL } from "@/lib/wpGraphQL";
import initTranslations from "@/i18n";
import Card1 from "@/components/Card1";
import { postPerPage } from "@/consts";

export default async function CategoryPage({
  params: { category, locale },
  searchParams,
}) {
  const { t, resources } = await initTranslations(locale);
  // console.log(searchParams);
  const categoryData = await getPostGQL(
    categoryGQL(decodeURIComponent(category), postPerPage, searchParams),
    locale
  );

  const pageInfo = categoryData.data.categories.nodes[0].posts.pageInfo;
  const posts = categoryData.data.categories.nodes[0].posts.edges;
  // console.log(posts);
  // Parse page number from searchParams
  const currentPage = parseInt(searchParams.page || 1);
  // const cursor = searchParams.cursor || "";

  // Extract hasNextPage and hasPreviousPage from pageInfo
  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = pageInfo;

  // Calculate next and previous page numbers
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  // Generate URLs for next and previous pages
  const nextPageUrl = hasNextPage
    ? `/posts/${category}?page=${nextPage}&cursor=${endCursor}&p=next`
    : null;
  const prevPageUrl =
    hasPreviousPage && currentPage > 1
      ? `/posts/${category}?page=${prevPage}&cursor=${startCursor}&p=prev`
      : null;

  return (
    <React.Fragment>
      <div className="container grid grid-cols-4 gap-5 category my-10">
        {posts.map((post) => {
          return <Card1 post={post.node} category={category} />;
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
    </React.Fragment>
  );
}
