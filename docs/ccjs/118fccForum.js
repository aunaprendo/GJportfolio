const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Back-End Development", className: "backend" },
};

function timeAgo(timestamp) {
  const posted = new Date(timestamp);
  const now = new Date();

  const diffMs = now - posted;
  const diffMin = Math.floor(diffMs / (1000 * 60));
  const diffHour = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDay = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMin < 60) {
    return `${diffMin}m ago`;
  } else if (diffHour < 24) {
    return `${diffHour}h ago`;
  } else {
    return `${diffDay}d ago`;
  }
}

const testViews = 100;
function viewCount(views) {
  if (views >= 1000) {
    const highViews = Math.floor(views / 1000);
    return `${highViews}k`;
  }
  return views;
}
// console.log(viewCount(testViews));

function forumCategory(id) {
  const category = allCategories[id];

  if (category) {
    return `<a class="category ${category.className}" href="${forumCategoryUrl}${category.className}/${id}">${category.category}</a>`;
  } else {
    return `<a class="category general" href="${forumCategoryUrl}general/${id}">General</a>`;
  }
}

function avatars(posters, users) {
  return posters
    .map((poster) => {
      const user = users.find((u) => u.id === poster.user_id);

      if (!user) return "";

      let avatar = user.avatar_template.replace("{size}", "30");

      if (avatar.startsWith("/")) {
        avatar = `${avatarUrl}${avatar}`;
      }

      return `<img src="${avatar}" alt="${user.name}" />`;
    })
    .join("");
}

function showLatestPosts(data) {
  const { users, topic_list, category_list } = data;
  const topics = topic_list.topics;

  const postsHTML = topics
    .map((topic) => {
      const { id, title, views, posts_count, slug, posters, category_id, bumped_at } = topic;

      return `
      <tr>
				<td>
				  <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
				  ${forumCategory(category_id)}
				</td>

        <td>
          <div class="avatar-container">
            ${avatars(posters, users)}
          </div>
        </td>

        <td>${posts_count - 1}</td>

        <td>${viewCount(views)}</td>

        <td>${timeAgo(bumped_at)}</td>
      </tr>
    `;
    })
    .join("");

  document.querySelector("#posts-container").innerHTML = postsHTML;
}

async function fetchData() {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData();
