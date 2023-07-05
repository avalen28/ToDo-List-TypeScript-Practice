class ProjectInput{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement; // it will be a div element
    element: HTMLFormElement


    constructor() {
      //pointing to the template id = project-input. ! expresión says to Ts that
      //that tag will exist as a HTML input (div, button,p...)
      this.templateElement = document.getElementById(
        'project-input'
      )! as HTMLTemplateElement;
      //pointing to the template id = app. ! expresión says to Ts that
      //that tag will exist as a HTML input (in this case, as an Div)
      this.hostElement = document.getElementById('app')! as HTMLDivElement;

    //import from the template, the content (childs).
      const importedHTMLContent = document.importNode(
        this.templateElement.content,
        true
      );
        //store the first child that we know that is a Form
        this.element = importedHTMLContent.firstElementChild as HTMLFormElement


        

        this.attach()
    }
//function to attack the content from the FORM into another place on the HTML
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }
}

const pjctInput = new ProjectInput();