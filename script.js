// Import the Node class
import Node from "./Node.js";

window.addEventListener("load", startGame);

async function startGame() {
  const tree = await loadTree();
  traverseTree(tree);
}

async function readTreeFromFile() {
  const response = await fetch('animals.json');
  const tree = await response.json();
  return tree;
}

function setParentNodes(node, parent = null) {
  if (node) {
    node.parent = parent;
    setParentNodes(node.yes, node);
    setParentNodes(node.no, node);
  }
}

async function loadTree() {
  const tree = await readTreeFromFile();
  setParentNodes(tree);
  return tree;
}

function saveTree(tree) {
  const json = JSON.stringify(tree, ["question", "no", "yes"]);
  console.log(json);
}

function traverseTree(currentNode) {
  console.log(currentNode);
  const answer = prompt(currentNode.question + " (yes/no)");
  if (answer === 'yes') {
      if (currentNode.yes) {
          traverseTree(currentNode.yes);
      } else {
          console.log("The program has guessed the animal!");
      }
  } else if (answer === 'no') {
      if (currentNode.no) {
          traverseTree(currentNode.no);
      } else {
          console.log("The program could not guess the animal.");
          const newAnimal = prompt("What animal were you thinking of?");
          const newQuestion = prompt("What question could distinguish " + newAnimal + " from the guessed animal?");

          const newQuestionNode = new Node(null, newQuestion, null, null);
          const answerNode = new Node(null, newAnimal, null, null);

          currentNode.question = newQuestion;
          currentNode.yes = answerNode;
          currentNode.no = newQuestionNode;
          // save the new node in to the tree (animals.json file)
          console.log("The tree has been updated!");
      }
  } else {
      console.log("Invalid input. Please answer 'yes' or 'no'.");
  }
}

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
  location.reload();
});
