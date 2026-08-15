const storyContainer = document.querySelector(".story-container");

const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");

const resultParagraph = document.getElementById("result");

const storyObj = {
  scary: {
    story: `Beneath the hollow oak, the squirrel heard scratching from inside the trunk — not from claws, but from something slow and deliberate. When it pressed its ear to the bark, the scratching stopped… and something scratched back from the exact same spot. The next morning, every acorn in the forest was neatly stacked outside the tree in a perfect circle, and no squirrel remembered moving them.`,
    borderColor: "#065F6F",
  },
  funny: {
    story: `Oliver the squirrel spent three hours dramatically burying an acorn, patting the dirt down like a professional landscaper, only to realize he had been standing on his entire winter stash the whole time. In a panic, he sprinted in circles trying to “re-hide” everything before the other squirrels noticed. Unfortunately, they were already watching from the tree above, rating his performance like judges at the Nut Olympics.`,
    borderColor: "#95B6BB",
  },
  adventure: {
    story: `When the river flooded the forest, a young squirrel named Ember refused to abandon the tallest oak where the winter stash was hidden. Leaping from branch to branch through wind and rain, she rallied the other squirrels to form a daring acorn rescue across the treetops. By dawn, soaked but victorious, they had saved enough food to last the season — and Ember had earned the nickname “Stormtail.”`,
    borderColor: "#705200",
  },
};

function displayStory(genre) {
  if (storyObj.hasOwnProperty(genre)) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));
