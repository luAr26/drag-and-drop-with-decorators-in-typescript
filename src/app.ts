// Code goes here!
console.log("works!");
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    // this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!; // type casting

    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement; // type casting - same as above

    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const projectInput = new ProjectInput();
