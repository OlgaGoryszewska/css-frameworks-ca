export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.id = postData.id;

  const title = document.createElement("h2");
  title.textContent = postData.title;
  post.appendChild(title);

  const body = document.createElement("p");
  body.textContent = postData.body;
  post.appendChild(body);

  const tags = document.createElement("p");
  tags.textContent = `Tags: ${postData.tags.join(", ")}`;
  post.appendChild(tags);

  const media = document.createElement("img");
  media.src = postData.media;
  media.alt = "Post Media";
  post.appendChild(media);

  const created = document.createElement("p");
  created.textContent = `Created: ${postData.created}`;
  post.appendChild(created);

  const updated = document.createElement("p");
  updated.textContent = `Last Updated: ${postData.updated}`;
  post.appendChild(updated);

  const count = document.createElement("p");
  count.textContent = `Comments: ${postData._count.comments}, Reactions: ${postData._count.reactions}`;
  post.appendChild(count);

  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  const posts = postDataList.map((postData) => postTemplate(postData));
  parent.append(...posts);
}
