window.addEventListener("load", () => {
  loadPosts();
});

const loadPosts = () => {
  fetch("http://localhost:3000/posts/all")
    .then((response) => response.json())
    .then((results) => {
      const container = document.querySelector("#posts-list");
      const posts = results
        .map((post) => {
          return `<div>
                    <h3><span>#${post.id}</span> «${post.title}» <span>by ${post.createdBy}</span></h3>
                    <p>${post.content}</p>
                </div>`;
        })
        .join(" ");
      container.innerHTML = posts;
    });
};
