import jalaali from "jalaali-js";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const limitWords = (content, limit) => {
  const words = content?.split(/\s+/);
  if (words?.length <= limit) return content;
  const limitedWords = words?.slice(0, limit).join(" ");
  return `${limitedWords}...`;
};

// const link =  '/post/'+post?.primary_category?.slug + '/' + post?.slug;
const route = (item, catSlug) => {
  switch (item?.contentTypeName) {
    case "tag":
      return `/tags/${item.slug}`;
    case "post":
      return `/posts/${catSlug}/${item.slug}`;
    case "page":
      if (item.type_label == "Page") return `/${item.slug}`;
    // case "taxonomy":
    //   if (item.type_label == "Category") return `/categories/${item.slug}`;
    //   if (item.type_label == "Tag") return `/tags/${item.slug}`;
    default:
      return item?.url;
  }
};

const catLinkHome = (item, locale) => {
  const fa = locale === "fa" ? "/fa" : "/en";
  return `${fa}/posts/${item.slug}`;
};

const routeMenu = (item) => {
  const menu = item?.connectedNode?.node;
  switch (menu?.menutype) {
    case "Category":
      return `/posts/${menu.slug}`;
    case "Post":
      const category = menu.categories.nodes[0];
      return `/posts/${category.slug}/${menu.slug}`;
    case "Page":
      return `/pages/${menu.slug}`;
    default:
      return `${item.url}`;
  }
};

function formatDateTime(dateTimeString, locale = "en") {
  const now = new Date();
  const date = new Date(dateTimeString);

  const diffInMs = now - date;
  const diffInSeconds = Math.floor(diffInMs / 1000);
  var diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

  const monthsFa = [
    "حمل",
    "ثور",
    "جوزا",
    "سرطان",
    "اسد",
    "سنبله",
    "میزان",
    "عقرب",
    "قوس",
    "جدی",
    "دلو",
    "حوت",
  ];

  const monthsEn = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (diffInMinutes < 60) {
    if (diffInMinutes === 0) {
      diffInMinutes = 1;
    }
    return locale === "fa"
      ? `${diffInMinutes.toLocaleString("fa-IR", {
          useGrouping: false,
        })} دقیقه پیش`
      : `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return locale === "fa"
      ? `${diffInHours.toLocaleString("fa-IR", {
          useGrouping: false,
        })} ساعت پیش`
      : `${diffInHours} hours ago`;
  } else {
    if (locale === "fa") {
      const { jy, jm, jd } = jalaali.toJalaali(date);
      return `${monthsFa[jm - 1]} ${jd.toLocaleString("fa-IR", {
        useGrouping: false,
      })}, ${jy.toLocaleString("fa-IR", { useGrouping: false })}`;
    } else {
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      return `${monthsEn[month]} ${day}, ${year}`;
    }
  }
}

const removeHtmlTags = (inputString) => {
  return inputString.replace(/<\/?[^>]+(>|$)/g, "");
};

const getMonthAbbreviation = (dateString) => {
  if (dateString != null) {
    const dateParts = dateString?.split("/");
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Months in JavaScript are zero-indexed
    const year = parseInt(dateParts[2], 10);
    const date = new Date(year, month, day);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    return months[date.getMonth()];
  } else {
    // return currect data for top of website
    const currentDate = new Date();
    return (
      currentDate.getDate() +
      " " +
      months[currentDate.getMonth()] +
      ", " +
      currentDate.getFullYear()
    );
  }
};

function getDayOfMonth(dateString) {
  if (dateString) {
    const dateParts = dateString?.split("/");
    const day = parseInt(dateParts[0], 10);

    return day;
  }
  return "";
}

function getMetaFromYoast(data, url) {
  return {
    title: data?.opengraphSiteName,
    description: data?.metaDesc,
    openGraph: {
      title: data?.opengraphTitle,
      description: data?.opengraphDescription,
      url: url ? url : process.env.NEXT_PUBLIC_APP_URL,
      siteName: data?.opengraphSiteName,
      images: {
        url: data?.opengraphImage?.sourceUrl,
        width: data?.opengraphImage?.mediaDetails?.width,
        height: data?.opengraphImage?.mediaDetails?.height,
      },
      type: data?.opengraphType,
    },
    twitter: {
      card: "summary_large_image",
      title: data?.twitterTitle,
      description: data?.twitterDescription,
      images: data?.opengraphImage, //data?.og_image?.map((item) => item.url), // Must be an absolute URL
    },
  };
}

export {
  route,
  removeHtmlTags,
  getMonthAbbreviation,
  getDayOfMonth,
  getMetaFromYoast,
  formatDateTime,
  routeMenu,
  limitWords,
  catLinkHome,
};
