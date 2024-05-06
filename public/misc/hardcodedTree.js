/*
// Root node
const root = new Node(null, "Is it a predator?");

// Creating nodes for yes answers
const node1 = new Node(root, "Does it live in a warm climate?");
const node2 = new Node(node1, "Is it a lion?");
const node3 = new Node(node1, "Can it fly?");
const node4 = new Node(node3, "Is it a snowy owl?");
const node5 = new Node(node3, "Does it live on land?");
const node6 = new Node(node5, "Is it a polar bear?");
const node7 = new Node(node5, "Is it a whale?");

// Creating nodes for no answers
const node8 = new Node(root, "Does it live in the sea?");
const node9 = new Node(node8, "Is it a turtle?");
const node10 = new Node(node8, "Is it a zebra?");

// Linking nodes
root.yes = node1;
root.no = node8;

node1.yes = node2;
node1.no = node3;

node3.yes = node4;
node3.no = node5;

node5.yes = node6;
node5.no = node7;

node8.yes = node9;
node8.no = node10;


const tree = [{
    root: {
      parent: null,
      question: "Is it a predator?",
      yes: node1,
      no: node8,
    },
    node1: {
      parent: root,
      question: "Does it live in a warm climate?",
      yes: node2,
      no: node3,
    },
    node2: {
      parent: node1,
      question: "Is it a lion?",
      yes: null,
      no: null,
    },
    node3: {
      parent: node1,
      question: "Can it fly?",
      yes: node4,
      no: node5,
    },
    node4: {
      parent: node3,
      question: "Is it a snowy owl?",
      yes: null,
      no: null,
    },
    node5: {
      parent: node3,
      question: "Does it live on land?",
      yes: node6,
      no: node7,
    },
    node6: {
      parent: node5,
      question: "Is it a polar bear?",
      yes: null,
      no: null,
    },
    node7: {
      parent: node5,
      question: "Is it a whale?",
      yes: null,
      no: null,
    },
    node8: {
      parent: root,
      question: "Does it live in the sea?",
      yes: node9,
      no: node10,
    },
    node9: {
      parent: node8,
      question: "Is it a turtle?",
      yes: null,
      no: null,
    },
    node10: {
      parent: node8,
      question: "Is it a zebra?",
      yes: null,
      no: null,
    },
}] */