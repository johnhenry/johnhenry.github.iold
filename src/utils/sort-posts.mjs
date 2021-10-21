export default (posts) => {
  const tags = posts.reduce((t, post) => {
    if (post.tags) {
      for (const tag of post.tags) {
        t.add(tag);
      }
    }
    return t;
  }, new Set());

  const sorted = posts
    .filter((b) => b.publishDate)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
  const latest = sorted[0];
  return {
    sorted,
    latest,
    tags,
  };
};
