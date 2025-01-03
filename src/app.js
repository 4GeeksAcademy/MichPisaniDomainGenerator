/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Creando las variables
  let pronoun = ["our", "my", "your"];
  let adjective = ["fancy", "silly", "scary"];
  let noun = ["flower", "monster", "necklace"];
  let extension = [".com", ".es"];
  let domains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          domains.push(pronoun[i] + adjective[j] + noun[k] + extension[l]);
        }
      }
    }
  }

  domains.forEach(element => {
    console.log(element);
  });
};
