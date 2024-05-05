export default class Node {
  constructor(parent, question, yes = null, no = null) {
    this.parent = parent;
    this.question = question;
    this.yes = yes;
    this.no = no;
  }
}