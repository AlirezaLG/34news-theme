import { cache } from "react";
import {axios, axiosGQL} from "./axios";
import  Axios from "axios";

const getFooterSettings = cache(async () => {
  try {
    let res = await axios.get("/sharks/v1/settings");
    return res.data;
  } catch (error) {
    return {};
  }
});

const getMenu = cache(async (slug) => {
  try {
    let res = await axios.get(`/menus/v1/menus/${slug}`);
    let navbarItems = res.data.items;
    navbarItems = await Promise.all(
      navbarItems.map(async (item) => {
        if (item.type_label == "Post" && item.type == "post_type") {
          const post = await getPost(item.slug);
          item.post = post;
        }
        return item;
      })
    );

    return navbarItems;
  } catch (error) {
    return {};
  }
});

const getSiteData = cache(async () => {
  try {
    let res = await axios.get("/");
    return res.data;
  } catch (error) {
    return {};
  }
});

const mygetPosts = cache(async () => {
  try {
    let res = await axios.get("/wp/v2/posts/", {
      params: {
        per_page: 4,
        categories: null,
        page: 1,
      },
    });
    return res.data;
  } catch (error) {
    return error+"sharks";
  }
});




const getPosts = cache(async (config) => {
  try {
    let res = await axios.get("/wp/v2/posts", {
      params: {
        per_page: config.posts,
        categories: config.category ? [config.category] : null,
        page: config.page ?? 1,
      },
    });
    return res.data;
  } catch (error) {
    return null;
  }
});
const getTagPosts = cache(async (config) => {
  try {
    let res = await axios.get("/wp/v2/posts", {
      params: {
        per_page: config.no_of_posts,
        tags: config.tag ? [config.tag] : null,
        page: config.page ?? 1,
      },
    });
    return res.data;
  } catch (error) {
    return null;
  }
});
const getPost = cache(async (slug) => {
  try {
    let res = await axios.get("/wp/v2/posts", {
      params: {
        per_page: 1,
        slug: [slug],
      },
    });
    return res.data[0];
  } catch (error) {
    return null;
  }
});

const getPage = cache(async (slug) => {
  try {
    let res = await axios.get("/wp/v2/pages", {
      params: {
        per_page: 1,
        slug: [slug],
      },
    });
    return res.data[0];
  } catch (error) {
    return null;
  }
});

const getPageData = cache(async (slug) => {
  try {
    let res = await axios.get("/wp/v2/pages", { params: { slug } });
    return res.data[0];
  } catch (error) {
    return null;
  }
});

const getMedia = cache(async (id) => {
  try {
    let res = await axios.get(`wp/v2/media/${id}`);
    return res.data;
  } catch (error) {
    return {};
  }
});

const getCategory = cache(async (slug) => {
  try {
    let res = await axios.get(`/wp/v2/categories`, {
      params: {
        slug,
      },
    });
    return res.data[0];
  } catch (error) {
    return null;
  }
});
const getTag = cache(async (slug) => {
  try {
    let res = await axios.get(`/wp/v2/tags`, {
      params: {
        slug,
      },
    });
    return res.data[0];
  } catch (error) {
    return null;
  }
});

const getChildCategories = cache(async (category_id) => {
  try {
    let res = await axios.get(`/wp/v2/categories`, {
      params: {
        parent: category_id,
        per_page: 5,
      },
    });
    return res.data;
  } catch (error) {
    return null;
  }
});

const getPopularTags = cache(async () => {
  try {
    let res = await axios.get(`/wp/v2/tags`, {
      params: { orderby: "count", order: "desc" },
    });
    return res.data;
  } catch (error) {
    return null;
  }
});

  
  // get data with Graph QL 
  const getHomePageGQL = cache(async (data) => {
    try {
      const response = await axiosGQL.post('/', data);
      return response.data.data.pages.edges[0].node;
    } catch (error) {
      console.error(error);
      return null;
    }
  });

  /**
   * Retrieves widget data using GraphQL.
   * @param {Object} data - The data to be sent in the GraphQL request.
   * @returns {Promise<Object|null>} - The response data from the GraphQL request, or null if an error occurs.
   */
  const getDataGQL = cache(async (data) => {
    try {
      const response = await axiosGQL.post('/', data);
      return response.data.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  });


  const getPostGQL = cache(async (data) => {
    try {
      const response = await axiosGQL.post('/', data);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  });


export {
  getFooterSettings,
  getMenu,
  getSiteData,
  getPosts,
  mygetPosts,
  getPost,
  getTagPosts,
  getPage,
  getPageData,
  getMedia,
  getCategory,
  getTag,
  getChildCategories,
  getPopularTags,
  getHomePageGQL,
  getDataGQL,
  getPostGQL,
};

