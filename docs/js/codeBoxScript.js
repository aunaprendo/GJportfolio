async function loadCodeFiles() {
  const codeBlocks = document.querySelectorAll("[data-code-file]");

  for (const codeBlock of codeBlocks) {
    const file = codeBlock.getAttribute("data-code-file");

    try {
      const response = await fetch(file);

      if (!response.ok) {
        throw new Error(`Could not load ${file}`);
      }

      const code = await response.text();
      codeBlock.textContent = code;
    } catch (error) {
      console.error("Error loading code file:", error);
      codeBlock.textContent = "Unable to load code.";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadCodeFiles();
});
