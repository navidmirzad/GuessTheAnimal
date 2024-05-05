"use strict";

import Tree from "./Tree.js";

console.log("script.js is running!");

const root = {
  parent: null,
  question: "Is it a predator?",
  correctNode: null,
  incorrectNode: null,
};

const node1 = {
  parent: root,
  question: "Does it live in a warm climate?",
  correctNode: null,
  incorrectNode: null,
};

const node2 = {
  parent: node1,
  question: "Is it a lion?",
  correctNode: null,
  incorrectNode: null,
};

const node3 = {
  parent: node1,
  question: "Can it fly?",
  correctNode: null,
  incorrectNode: null,
};

const node4 = {
  parent: node3,
  question: "Is it a snowy owl?",
  correctNode: null,
  incorrectNode: null,
};

const node5 = {
  parent: node3,
  question: "Does it live on land?",
  correctNode: null,
  incorrectNode: null,
};

const node6 = {
  parent: node5,
  question: "Is it a whale?",
  correctNode: null,
  incorrectNode: null,
};

const node7 = {
  parent: node5,
  question: "Is it a whale?",
  correctNode: null,
  incorrectNode: null,
};

const node8 = {
  parent: root,
  question: "Does it live in the sea?",
  correctNode: null,
  incorrectNode: null,
};

const node9 = {
  parent: node8,
  question: "Is it a turtle?",
  correctNode: null,
  incorrectNode: null,
};

const node10 = {
  parent: node8,
  question: "Is it a zebra?",
  correctNode: null,
  incorrectNode: null,
};
