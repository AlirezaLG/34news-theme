import React from "react";
import { getPostGQL } from "@/lib/functions";
import { searchGQL } from "@/lib/wpGraphQL";
import initTranslations from "@/i18n";
import Card1 from "@/components/Card1";
import { postPerPage } from "@/consts";

export default async function TagCategory({
  params: { tag, locale },
  searchParams,
}) {
  // const tagsData = await getPostGQL(searchGQL(tag, postPerPage, searchParams));
  // console.log(tagsData.data.posts.edges);
  // const pageInfo = SearchData.data.posts.pageInfo;
  // const posts = SearchData.data.posts.edges;

  //   console.log(posts);

  // Parse page number from searchParams
  // const currentPage = parseInt(searchParams.page || 1);
  // const cursor = searchParams.cursor || "";

  // Extract hasNextPage and hasPreviousPage from pageInfo
  // const { hasNextPage, hasPreviousPage, startCursor, endCursor } = pageInfo;

  // Calculate next and previous page numbers
  // const nextPage = currentPage + 1;
  // const prevPage = currentPage - 1;

  // Generate URLs for next and previous pages
  // const nextPageUrl = hasNextPage
  //   ? `/search?s=${searchParams.s}&page=${nextPage}&cursor=${endCursor}&p=next`
  //   : null;
  // const prevPageUrl =
  //   hasPreviousPage && currentPage > 1
  //     ? `/search?s=${searchParams.s}&page=${prevPage}&cursor=${startCursor}&p=prev`
  //     : null;

  return <div>TagCategory</div>;
}
