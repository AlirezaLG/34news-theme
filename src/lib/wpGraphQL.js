// Search post
let searchGQL = (search, ppp, param) => {
  // Determine cursor based on direction
  let cursorNext = "";
  let cursorPrev = "";
  let firstPP = 0;
  let prevPP = 0;
  if (param.p === "next") {
    cursorNext = param.cursor;
    firstPP = ppp;
  } else if (param.p === "prev") {
    cursorPrev = param.cursor;
    prevPP = ppp;
  } else {
    firstPP = ppp;
  }

  return JSON.stringify({
    query: `query search(
      $after: String = "${cursorNext}", 
      $before: String = "${cursorPrev}", 
      $first: Int = ${firstPP}, 
      $last: Int = ${prevPP}, 
      $search: String = "${search}"
      ) {
        posts(where: {search: $search }, first: $first, after: $after, last: $last , before: $before) {
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          edges {
            node {
              id
              title
              date
              link
              slug
              contentTypeName
              featuredImage {
                node {
                  mediaDetails {
                    sizes(include: [MEDIUM]) {
                      sourceUrl
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
}`,
  });
};

let categoryGQL = (category, ppp, param) => {
  // Determine cursor based on direction
  let cursorNext = "";
  let cursorPrev = "";
  let firstPP = 0;
  let prevPP = 0;
  if (param.p === "next") {
    cursorNext = param.cursor;
    firstPP = ppp;
  } else if (param.p === "prev") {
    cursorPrev = param.cursor;
    prevPP = ppp;
  } else {
    firstPP = ppp;
  }

  return JSON.stringify({
    query: `query category(
      $after: String = "${cursorNext}", 
      $before: String = "${cursorPrev}", 
      $first: Int = ${firstPP}, 
      $last: Int = ${prevPP}, 
      $slug: [String] =  "${category}"
      ) {
  categories(where: {slug: $slug}) {
    nodes {
      name
      posts(first: $first, after: $after, last: $last , before: $before ) {
        pageInfo {
          endCursor
          hasNextPage
          startCursor
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            date
            link
            slug
            contentTypeName
            featuredImage {
              node {
                mediaDetails {
                  sizes(include: [MEDIUM]) {
                    sourceUrl
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`,
  });
};

// load menu
let menuDataGQL = () => {
  return JSON.stringify({
    query: `query AllMenusAndItems {
        customizer {
          copyright
          siteUrl
          description
          email
          displayDate
          facebookLink
          footerLogo
          favIcon
          headerLogo
          linkedinLink
          instagramLink
          phone
          siteDescription
          footerDescription
          siteTitle
          techsharks
          telegramLink
          tiktokLink
          whatsappLink
          xTwitterLink
          youtubeLink
        }
        menus {
        nodes {
            id
            name
            slug
            locations
            menuItems(first: 100) {
            nodes {
                id
                label
                url
                target
                order
                parentId
                connectedNode {
                node {
                    ...post
                    ...page
                    ...category
                }
                }
                childItems(first: 100) {
                nodes {
                    id
                    label
                    url
                    target
                    order
                    parentId
                    childItems(first: 100) {
                      nodes {
                        id
                        label
                        url
                        target
                        order
                        parentId
                        connectedNode {
                          node {
                              ...post
                              ...page
                              ...category
                          }
                          }
                      }
                    }
                    connectedNode {
                    node {
                        ...post
                        ...page
                        ...category
                    }
                    }
                }
                }
            }
            }
        }
        }
    }
  
  fragment post on Post {
    slug
    menutype: __typename
    categories {
      nodes {
        slug
        termTaxonomyId
      }
    }
  }
  
  fragment page on Page {
    menutype: __typename
    slug
  }
  
  fragment category on Category {
    menutype: __typename
    slug
    termTaxonomyId
  }`,
  });
};

// single post sidebars data
let singlePageDataGQL = (data) => {
  return JSON.stringify({
    query: `query singlePageWidgetsData(
        $sidebar_posts: Int = ${data?.sidebar?.posts}, 
        $sidebar_cid: Int = ${data?.sidebar?.category?.nodes[0]?.termTaxonomyId}, 
        ) {
            sidebar: posts(where: {categoryId: $sidebar_cid}, first: $sidebar_posts) {
                nodes {
                  id
                  title
                  slug
                  contentTypeName
                  date
                  excerpt
                  featuredImage {
                  node {
                      mediaDetails {
                      sizes(include: [THUMBNAIL]) {
                          sourceUrl
                          width
                          height
                          name
                      }
                      }
                  }
                  }
                }
            }  #end sidebar
         }`,
  });
};

// single Page data only
let sinlgePageGQL = (home_slug) => {
  return JSON.stringify({
    query: `query page( $home_slug: String = "${home_slug}") {
      customizer {
        facebookLink
        linkedinLink
        instagramLink
        telegramLink
        tiktokLink
        whatsappLink
        xTwitterLink
        youtubeLink
      }  
      pages(where: {name: $home_slug}) {
            edges {
              node {
                title
                date
                link
                slug
                contentTypeName
                content
                defaultPage {
                  sidebar {
                    title
                    posts
                    category {
                      nodes {
                        termTaxonomyId
                        name
                        slug
                      }
                    }
                  }
                }
                seo {
                  canonical
                  opengraphSiteName
                  metaDesc
                  metaKeywords
                  opengraphDescription
                  opengraphTitle
                  opengraphType
                  opengraphUrl
                  title
                  twitterDescription
                  twitterTitle
                  twitterImage {
                    id
                    sourceUrl
                    mediaDetails {
                      height
                      width
                    }
                    status
                  }
                  opengraphImage {
                    sourceUrl
                    mediaDetails {
                      height
                      width
                    }
                  }
                }
              }
            }
          }
      }`,
  });
};

// single post sidebars data
let singlePostDataGQL = (data) => {
  return JSON.stringify({
    query: `query singleWidgetsData(
        $sidebar_posts: Int = ${data?.sidebar?.posts}, 
        $sidebar_cid: Int = ${data?.sidebar?.category?.nodes[0]?.termTaxonomyId}, 
        $related_posts: Int = ${data?.related?.posts}, 
        $related_tags: [ID] = [${data?.related?.tags}]
        ) {
            related: posts(first: $related_posts, where: {tagIn: $related_tags }) {
                nodes {
                  id
                  title
                  slug
                  contentTypeName
                  date
                  categories {
                    nodes {
                      termTaxonomyId
                      name
                      slug
                    }
                  }
                  featuredImage {
                  node {
                      mediaDetails {
                      sizes(include: [MEDIUM]) {
                          sourceUrl
                          width
                          height
                          name
                      }
                      }
                  }
                  }
                }
              }
            sidebar: posts(where: {categoryId: $sidebar_cid}, first: $sidebar_posts) {
                nodes {
                  id
                  title
                  slug
                  contentTypeName
                  date
                  excerpt
                  featuredImage {
                  node {
                      mediaDetails {
                      sizes(include: [THUMBNAIL]) {
                          sourceUrl
                          width
                          height
                          name
                      }
                      }
                  }
                  }
                }
            }  #end sidebar

         }`,
  });
};

// single post data only
let sinlgePostGQL = (slug, home_slug) => {
  return JSON.stringify({
    query: `query post( $slug: String = "${slug}", $home_slug: String = "${home_slug}") {
      customizer {
        facebookLink
        linkedinLink
        instagramLink
        telegramLink
        tiktokLink
        whatsappLink
        xTwitterLink
        youtubeLink
      }  
      pages(where: {name: $home_slug}) {
            edges {
              node {
                title
                singlePost {
                  sidebar {
                    title
                    posts
                    category {
                      nodes {
                        termTaxonomyId
                        name
                        slug
                      }
                    }
                  }
                  related {
                    title
                    posts
                  }
                }
              }
            }
          }
        postBy(slug: $slug) {
          title
          date
          link
          slug
          single {
            showAuthor
          }
          author {
            node {
              id
              name
              email
              description
              authorImage {
                authortitle
                authorImage {
                  node {
                    mediaItemUrl
                  }
                }
              }
            }
          }
          videoLinkGroup{
            videoLink
          }
          postFormats {
            nodes {
              name
              slug
            }
          }
          contentTypeName
          content
          tags {
            nodes {
              name
              termTaxonomyId
              slug
            }
          }
          categories {
            edges {
              isPrimary
              node {
                name
              }
            }
          }
          featuredImage {
            node {
              mediaDetails {
                sizes(include: [MEDIUM_LARGE, MEDIUM]) {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
          seo {
            canonical
            opengraphSiteName
            metaDesc
            metaKeywords
            opengraphDescription
            opengraphTitle
            opengraphType
            opengraphUrl
            title
            twitterDescription
            twitterTitle
            twitterImage {
              id
              sourceUrl
              mediaDetails {
                height
                width
              }
              status
            }
            opengraphImage {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }`,
  });
};

// Home page All widgets data
let homePageDataGQL = (data) => {
  return JSON.stringify({
    query: `query widgetsData(
        $slideshow_posts: Int = ${data?.slideshow?.posts}, 
        $slideshow_cid: Int = ${data?.slideshow?.category?.nodes[0]?.termTaxonomyId}, 
        $slideshowRight_posts: Int = ${data?.slideshowRight?.posts}, 
        $slideshowRight_cid: Int = ${data?.slideshowRight?.category?.nodes[0]?.termTaxonomyId},
        $twoCols_posts: Int = ${data?.twoCols?.posts}, 
        $twoCols_cid: Int = ${data?.twoCols?.category?.nodes[0]?.termTaxonomyId},
        $twoColsRight_posts: Int = ${data?.twoColsRight?.posts}, 
        $twoColsRight_cid: Int = ${data?.twoColsRight?.category?.nodes[0]?.termTaxonomyId},
        $video1_posts: Int = ${data?.video?.col1?.posts}, 
        $video1_cid: Int = ${data?.video?.col1?.category?.nodes[0]?.termTaxonomyId},
        $video2_posts: Int = ${data?.video?.col2?.posts}, 
        $video2_cid: Int = ${data?.video?.col2?.category?.nodes[0]?.termTaxonomyId},
        $video3_posts: Int = ${data?.video?.col3?.posts}, 
        $video3_cid: Int = ${data?.video?.col3?.category?.nodes[0]?.termTaxonomyId},
        $threeCols_posts: Int = ${data?.threeCols?.posts}, 
        $threeCols_cid: Int = ${data?.threeCols?.category?.nodes[0]?.termTaxonomyId},
        $oneCols_posts: Int = ${data?.oneCols?.posts}, 
        $oneCols_cid: Int = ${data?.oneCols?.category?.nodes[0]?.termTaxonomyId},
        $oneCols2_posts: Int = ${data?.oneCols2?.posts}, 
        $oneCols2_cid: Int = ${data?.oneCols2?.category?.nodes[0]?.termTaxonomyId}
        
        ) {
            slideshow: posts(where: {categoryId: $slideshow_cid}, first: $slideshow_posts) {
                nodes {
                  id
                  title
                  slug
                  contentTypeName
                  date
                  excerpt
                  featuredImage {
                  node {
                      mediaDetails {
                      sizes(include: [MEDIUM]) {
                          sourceUrl
                          width
                          height
                          name
                      }
                      }
                  }
                  }
                }
              }
              slideshowRight: posts(where: {categoryId: $slideshowRight_cid}, first: $slideshowRight_posts) {
                  nodes {
                  id
                  title
                  slug
                  contentTypeName
                  date
      
                }
              }
              twoCols: posts(where: {categoryId: $twoCols_cid}, first: $twoCols_posts) {
                  nodes {
                  id
                  title
                  slug
                  contentTypeName
                  date
                  excerpt
                  featuredImage {
                  node {
                      mediaDetails {
                      sizes(include: MEDIUM) {
                          sourceUrl
                          width
                          height
                          name
                      }
                      }
                  }
                  }
                }
              }
              twoColsRight: posts(where: {categoryId: $twoColsRight_cid}, first: $twoColsRight_posts) {
                  nodes {
                  id
                  title
                  slug
                  contentTypeName
                  date
                  featuredImage {
                  node {
                      mediaDetails {
                      sizes(include: THUMBNAIL) {
                          sourceUrl
                          width
                          height
                          name
                      }
                      }
                  }
                  }
                }
              }
              video1: posts(where: {categoryId: $video1_cid}, first: $video1_posts) {
                  nodes {
                  id
                  title
                  slug
                  contentTypeName
                  date
                  videoLinkGroup{
                    videoLink
                  }
                  featuredImage {
                  node {
                      mediaDetails {
                      sizes(include: THUMBNAIL) {
                          sourceUrl
                          width
                          height
                          name
                      }
                      }
                  }
                  
                
              }
                  }
        }
              video2: posts(where: {categoryId: $video2_cid}, first: $video2_posts) {
                  nodes {
                  id
                  title
                  slug
                  contentTypeName
                  date
                  videoLinkGroup {
                      videoLink
                    }
                  featuredImage {
                  node {
                      mediaDetails {
                      sizes(include: THUMBNAIL) {
                          sourceUrl
                          width
                          height
                          name
                      }
                      }
                  }
                }
              }
        }
              video3: posts(where: {categoryId: $video3_cid}, first: $video3_posts) {
                  nodes {
                  id
                  title
                  slug
                  contentTypeName
                  date
                  videoLinkGroup {
                      videoLink
                    }
                  featuredImage {
                  node {
                      mediaDetails {
                      sizes(include: THUMBNAIL) {
                          sourceUrl
                          width
                          height
                          name
                      }
                      }
                  }
                }
              }
          }
              threeCols: posts(where: {categoryId: $threeCols_cid}, first: $threeCols_posts) {
                  nodes {
                  id
                  title
                  slug
                  contentTypeName
                  date
                  excerpt
                  content
                  featuredImage {
                  node {
                      mediaDetails {
                      sizes(include: [MEDIUM, THUMBNAIL]) {
                          sourceUrl
                          width
                          height
                          name
                      }
                      }
                  }
                  }
                }
              }
              oneCols: posts(where: {categoryId: $oneCols_cid}, first: $oneCols_posts) {
                  nodes {
                  id
                  title
                  slug
                  contentTypeName
                  date
                  featuredImage {
                  node {
                      mediaDetails {
                      sizes(include: MEDIUM) {
                          sourceUrl
                          width
                          height
                          name
                      }
                      }
                  }
                  }
                }
              }
              oneCols2: posts(where: {categoryId: $oneCols2_cid}, first: $oneCols2_posts) {
                nodes {
                id
                title
                slug
                contentTypeName
                date
                featuredImage {
                node {
                    mediaDetails {
                    sizes(include: MEDIUM) {
                        sourceUrl
                        width
                        height
                        name
                    }
                    }
                }
                }
              }
            }
      }`,
    variables: {},
  });
};

// Yoast homepage Meta + Home page Widgets + Home
let homePageGQL = (data) => {
  return JSON.stringify({
    query: `query homePage ( $home_slug: String = "${data}" ) {
        customizer {
          facebookLink
          linkedinLink
          instagramLink
          telegramLink
          tiktokLink
          whatsappLink
          xTwitterLink
          youtubeLink
        }
        pages(where: {name: $home_slug}) {
          edges {
            node {
              title
              link
              slug
              homepage {
                slideshow {
                  show
                  posts
                  category {
                    nodes {
                    termTaxonomyId
                    slug
                    name
                    }
                  }
                }
                slideshowRight {
                  video
                  title
                  show
                  posts
                  category {
                    nodes {
                      termTaxonomyId
                      slug
                      name
                    }
                  }
                }
                twoCols {
                  title
                  more
                  posts
                  show
                  category {
                    nodes {
                      termTaxonomyId
                      slug
                      name
                    }
                  }
                }
                twoColsRight {
                  title
                  more
                  posts
                  show
                  newsletter
                  category {
                    nodes {
                      termTaxonomyId
                      slug
                      name
                    }
                  }
                }
                video {
                  show
                  col1 {
                    title
                    posts
                    category {
                      nodes {
                        termTaxonomyId
                        slug
                        name
                      }
                    }
                  }
                  col2 {
                    title
                    posts
                    category {
                      nodes {
                        termTaxonomyId
                        slug
                        name
                      }
                    }
                  }
                  col3 {
                    title
                    posts
                    category {
                      nodes {
                        termTaxonomyId
                        slug
                        name
                      }
                    }
                  }
                }
                threeCols {
                  title
                  more
                  posts
                  show
                  category {
                    nodes {
                      termTaxonomyId
                      slug
                      name
                    }
                  }
                }
                oneCols {
                  title
                  more
                  posts
                  show
                  category {
                    nodes {
                      termTaxonomyId
                      slug
                      name
                    }
                  }
                }
                oneCols2 {
                  title
                  more
                  posts
                  show
                  category {
                    nodes {
                      termTaxonomyId
                      slug
                      name
                    }
                  }
                }
                
              }
              seo {
                canonical
                opengraphSiteName
                metaDesc
                metaKeywords
                opengraphDescription
                opengraphTitle
                opengraphType
                opengraphUrl
                title
                twitterDescription
                twitterTitle
                twitterImage {
                  id
                  sourceUrl
                  mediaDetails {
                    height
                    width
                  }
                  status
                }
                opengraphImage {
                  sourceUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              guid
            }
          }
        }
      }`,
    variables: {},
  });
};

export {
  homePageGQL,
  homePageDataGQL,
  sinlgePostGQL,
  sinlgePageGQL,
  singlePostDataGQL,
  singlePageDataGQL,
  menuDataGQL,
  categoryGQL,
  searchGQL,
};
