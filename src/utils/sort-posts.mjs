export default (posts) => {
  const sorted = posts
    .filter((b) => b.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const tagSet = new Set();
  for (const { tags } of sorted) {
    for (const tag of tags) {
      tagSet.add(tag);
    }
  }
  const latest = sorted[0];
  return {
    posts,
    sorted,
    latest,
    tags: [...tagSet],
  };
};
