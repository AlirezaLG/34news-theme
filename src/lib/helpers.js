const getNavigationUrl = (item) => {
  switch (item.type) {
    case "custom":
      return item.url;
    case "post_type":
      if (item.type_label == "Post") {
        return `/categories/${item?.post?.primary_category?.slug}/${item.slug}`;
      }
      if (item.type_label == "Page") return `/${item.slug}`;
    case "taxonomy":
      if (item.type_label == "Category") return `/categories/${item.slug}`;
      if (item.type_label == "Tag") return `/tags/${item.slug}`;
    default:
      return item.url;
  }
};

function getImage(featuredImageSizes, size) {
  if (!featuredImageSizes || !size) return null;

  const imageSize = Object.keys(featuredImageSizes).find(
    (key) => key === size
  );
  return imageSize ? featuredImageSizes[imageSize] : null;
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
    const date = new Date(year, month, day);

    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    return months[date.getMonth()];
  }
  return "";
};

function getDayOfMonth(dateString) {
  if (dateString) {
    const dateParts = dateString?.split("/");
    const day = parseInt(dateParts[0], 10);

    return day;
  }
  return "";
}

function getMetaFromYoast(data, pathname) {
  return {
    title: data?.title,
    description: data?.description,
    alternates: { canonical: pathname },
    robots: {
      index: data?.robots?.index == "index" ? true : false,
      follow: data?.robots?.follow == "follow" ? true : false,
      googleBot: {
        index: data?.robots?.index == "index" ? true : false,
        follow: data?.robots?.follow == "follow" ? true : false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: data?.og_title,
      description: data?.og_description,
      url: pathname,
      siteName: data?.og_site_name,
      images: data?.og_image,
      locale: data?.og_locale,
      type: data?.og_type,
    },
    twitter: {
      card: data?.twitter_card,
      title: data?.og_locale,
      description: data?.og_description,
      images: data?.og_image?.map((item) => item.url), // Must be an absolute URL
    },
  };
}

export {
  getNavigationUrl,
  removeHtmlTags,
  getMonthAbbreviation,
  getDayOfMonth,
  getMetaFromYoast,
  getImage,
};
