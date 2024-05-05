export default class Tree {
  constructor(parent, question, correctNode, incorrectNode) {
    this.parent = parent;
    this.question = question;
    this.correctNode = correctNode;
    this.incorrectNode = incorrectNode;
  }

  setCorrectNode(correctNode) {
    this.correctNode = correctNode;
  }

  setIncorrectNode(incorrectNode) {
    this.incorrectNode = incorrectNode;
  }
}
