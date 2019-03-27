(function() {
  const createImageElement = (imageUrl, alt) => {
    const imageElement = document.createElement("img");
    imageElement.alt = alt;
    imageElement.src = imageUrl;
    imageElement.classList = "image-block";

    return imageElement;
  };

  window.jsonFlickrFeed = ({ items }) => {
    const imageElements = items.splice(0, 6).map(({ media, title }) => {
      return createImageElement(media.m, title);
    });

    document.getElementById("root").append(...imageElements);
  };

  const searchTag = "funny shirts";
  const publicApiUrl =
    "https://api.flickr.com/services/feeds/photos_public.gne";

  $.ajax(publicApiUrl, {
    jsonp: "jsonFlickrFeed",
    dataType: "jsonp",
    data: { tags: searchTag, format: "json" }
  });
})();
