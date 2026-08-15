const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" },
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(idea) {
    this.ideas.push(idea);
  }

  unpin(idea) {
    const index = this.ideas.indexOf(idea);
    if (index !== -1) {
      this.ideas.splice(index, 1);
    }
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let boardSummary = `${this.title} has ${this.count()} idea(s)\n`;

    this.ideas.forEach((idea) => {
      boardSummary += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });

    return boardSummary;
  }
}

const projectSquirrel = new ProjectIdea("SecretSquirrel", "FindNuts");
console.log(projectSquirrel.title);
console.log(projectSquirrel.status);
projectSquirrel.updateProjectStatus(projectStatus.SUCCESS);
console.log(projectSquirrel.status);

const projectSquirrelIdea = new ProjectIdeaBoard("IdeaSquirrel");
projectSquirrelIdea.pin(projectSquirrel);
console.log(projectSquirrelIdea.ideas);
console.log(projectSquirrelIdea.count());
console.log(projectSquirrelIdea.formatToString());
