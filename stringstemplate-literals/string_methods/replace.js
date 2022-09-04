let text = "Please visit New Delhi!";
let newText = text.replace("New Delhi", "Navi Mumbai");
//Please visit Navi Mumbai


let text = "Please visit New Delhi as New Delhi is the capital of India!";
let newText = text.replace(/New Delhi/g, "Navi Mumbai");
//Please visit Navi Mumbai as Navi Mumbai is the capital of India

