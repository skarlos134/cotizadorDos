const recaudo = 11960;
const sicov = 99936;
let vCurso = document.getElementById("vCurso");
let vExamen = document.getElementById("vExamen");
let vTotal = document.getElementById("vTotal");

function genero() {
  let genero = document.getElementById("genero").value;
  let edad = document.getElementById("edad").value;
  if (genero === "hombre") {
    if (edad >= 15 && edad <= 25) {
      return 7300;
    } else if (edad >= 26 && edad <= 35) {
      return 7500;
    } else if (edad >= 36 && edad <= 50) {
      return 7700;
    } else if (edad >= 51 && edad <= 65) {
      return 7400;
    } else if (edad >= 66 && edad <= 80) {
      return 7200;
    } else if (edad > 81) {
      return 7100;
    } else {
      return "edad no valida";
    }
  } else if (genero === "mujer") {
    if (edad >= 15 && edad <= 25) {
      return 7000;
    } else if (edad >= 26 && edad <= 35) {
      return 7400;
    } else if (edad >= 36 && edad <= 50) {
      return 7600;
    } else if (edad >= 51 && edad <= 65) {
      return 7300;
    } else if (edad >= 66 && edad <= 80) {
      return 6900;
    } else if (edad > 81) {
      return 6800;
    } else {
      return "edad no valida";
    }
  } else {
    console.log("genero no valido");
  }
}

function categorias() {
  let categoria = document.getElementById("categoria").value;
  if (categoria === "aDos") {
    return 743058;
  } else if (categoria === "bUno") {
    return 1025946;
  } else if (categoria === "cUno") {
    return 1308834;
  } else if (categoria === "rCat") {
    return 636605;
  } else if (categoria === "comboCuno") {
    return 2051891;
  } else if (categoria === "comboBuno") {
    return 1769004;
  }
}

function examenes() {
  let genero = document.getElementById("genero").value;
  let edad = document.getElementById("edad").value;
  let categoria = document.getElementById("categoria").value;
  if (genero === "hombre") {
    //precios examenes hombres 15-25
    if (edad >= 15 && edad <= 25 && categoria === "aDos") {
      return 193616;
    } else if (edad >= 15 && edad <= 25 && categoria === "bUno") {
      return 193616;
    } else if (edad >= 15 && edad <= 25 && categoria === "cUno") {
      return 193516;
    } else if (edad >= 15 && edad <= 25 && categoria === "rCat") {
      return 193516;
    } else if (edad >= 15 && edad <= 25 && categoria === "comboBuno") {
      return 264444;
    } else if (edad >= 15 && edad <= 25 && categoria === "comboCuno") {
      return 264334;
    }
    //precios examenes hombres 26-35
    if (edad >= 26 && edad <= 35 && categoria === "aDos") {
      return 193816;
    } else if (edad >= 26 && edad <= 35 && categoria === "bUno") {
      return 193616;
    } else if (edad >= 26 && edad <= 35 && categoria === "cUno") {
      return 193716;
    } else if (edad >= 26 && edad <= 35 && categoria === "rCat") {
      return 193716;
    } else if (edad >= 26 && edad <= 35 && categoria === "comboBuno") {
      return 264644;
    } else if (edad >= 26 && edad <= 35 && categoria === "comboCuno") {
      return 264544;
    }
    //precios examenes hombres 36-50
    if (edad >= 36 && edad <= 50 && categoria === "aDos") {
      return 194016;
    } else if (edad >= 36 && edad <= 50 && categoria === "bUno") {
      return 194016;
    } else if (edad >= 36 && edad <= 50 && categoria === "cUno") {
      return 193916;
    } else if (edad >= 36 && edad <= 50 && categoria === "rCat") {
      return 193916;
    } else if (edad >= 36 && edad <= 50 && categoria === "comboBuno") {
      return 264844;
    } else if (edad >= 36 && edad <= 50 && categoria === "comboCuno") {
      return 264744;
    }
    //precios examenes hombres 51-65
    if (edad >= 51 && edad <= 65 && categoria === "aDos") {
      return 193713;
    } else if (edad >= 51 && edad <= 65 && categoria === "bUno") {
      return 193716;
    } else if (edad >= 51 && edad <= 65 && categoria === "cUno") {
      return 193716;
    } else if (edad >= 51 && edad <= 65 && categoria === "rCat") {
      return 193716;
    } else if (edad >= 51 && edad <= 65 && categoria === "comboBuno") {
      return 264544;
    } else if (edad >= 51 && edad <= 65 && categoria === "comboCuno") {
      return 264544;
    }
    //precios examenes hombres 66-80
    if (edad >= 66 && edad <= 80 && categoria === "aDos") {
      return 193516;
    } else if (edad >= 66 && edad <= 80 && categoria === "bUno") {
      return 193516;
    } else if (edad >= 66 && edad <= 80 && categoria === "cUno") {
      return 193416;
    } else if (edad >= 66 && edad <= 80 && categoria === "rCat") {
      return 193416;
    } else if (edad >= 66 && edad <= 80 && categoria === "comboBuno") {
      return 264344;
    } else if (edad >= 66 && edad <= 80 && categoria === "comboCuno") {
      return 264244;
    }
    //precios examenes hombres 80+
    if (edad > 80 && categoria === "aDos") {
      return 193416;
    } else if (edad > 80 && categoria === "bUno") {
      return 193416;
    } else if (edad > 80 && categoria === "cUno") {
      return 193316;
    } else if (edad > 80 && categoria === "rCat") {
      return 1933166;
    } else if (edad > 80 && categoria === "comboBuno") {
      return 264244;
    } else if (edad > 80 && categoria === "comboCuno") {
      return 264144;
    }

    //-------mujeres---------------------------------------
    //precios examenes mujeres 15-25
  } else if (genero === "mujer") {
    if (edad >= 15 && edad <= 25 && categoria === "aDos") {
      return 193316;
    } else if (edad >= 15 && edad <= 25 && categoria === "bUno") {
      return 193316;
    } else if (edad >= 15 && edad <= 25 && categoria === "cUno") {
      return 193216;
    } else if (edad >= 15 && edad <= 25 && categoria === "rCat") {
      return 193216;
    } else if (edad >= 15 && edad <= 25 && categoria === "comboBuno") {
      return 264144;
    } else if (edad >= 15 && edad <= 25 && categoria === "comboCuno") {
      return 264044;
    }
    //precios examenes mujeres 26-35
    if (edad >= 26 && edad <= 35 && categoria === "aDos") {
      return 193716;
    } else if (edad >= 26 && edad <= 35 && categoria === "bUno") {
      return 193716;
    } else if (edad >= 26 && edad <= 35 && categoria === "cUno") {
      return 193516;
    } else if (edad >= 26 && edad <= 35 && categoria === "rCat") {
      return 193516;
    } else if (edad >= 26 && edad <= 35 && categoria === "comboBuno") {
      return 264544;
    } else if (edad >= 26 && edad <= 35 && categoria === "comboCuno") {
      return 264344;
    }
    //precios examenes mujeres 36-50
    if (edad >= 36 && edad <= 50 && categoria === "aDos") {
      return 193916;
    } else if (edad >= 36 && edad <= 50 && categoria === "bUno") {
      return 193916;
    } else if (edad >= 36 && edad <= 50 && categoria === "cUno") {
      return 193816;
    } else if (edad >= 36 && edad <= 50 && categoria === "rCat") {
      return 193816;
    } else if (edad >= 36 && edad <= 50 && categoria === "comboBuno") {
      return 264744;
    } else if (edad >= 36 && edad <= 50 && categoria === "comboCuno") {
      return 264644;
    }
    //precios examenes mujeres 51-65
    if (edad >= 51 && edad <= 65 && categoria === "aDos") {
      return 193616;
    } else if (edad >= 51 && edad <= 65 && categoria === "bUno") {
      return 193616;
    } else if (edad >= 51 && edad <= 65 && categoria === "cUno") {
      return 193816;
    } else if (edad >= 51 && edad <= 65 && categoria === "rCat") {
      return 193816;
    } else if (edad >= 51 && edad <= 65 && categoria === "comboBuno") {
      return 264444;
    } else if (edad >= 51 && edad <= 65 && categoria === "comboCuno") {
      return 264344;
    }
    //precios examenes mujeres 66-80
    if (edad >= 66 && edad <= 80 && categoria === "aDos") {
      return 193216;
    } else if (edad >= 66 && edad <= 80 && categoria === "bUno") {
      return 193216;
    } else if (edad >= 66 && edad <= 80 && categoria === "cUno") {
      return 193116;
    } else if (edad >= 66 && edad <= 80 && categoria === "rCat") {
      return 193116;
    } else if (edad >= 66 && edad <= 80 && categoria === "comboBuno") {
      return 264044;
    } else if (edad >= 66 && edad <= 80 && categoria === "comboCuno") {
      return 263944;
    }
    //precios examenes mujeres 80+
    if (edad > 80 && categoria === "aDos") {
      return 193116;
    } else if (edad > 80 && categoria === "bUno") {
      return 193116;
    } else if (edad > 80 && categoria === "cUno") {
      return 193016;
    } else if (edad > 80 && categoria === "rCat") {
      return 193016;
    } else if (edad > 80 && categoria === "comboBuno") {
      return 263944;
    } else if (edad > 80 && categoria === "comboCuno") {
      return 263844;
    }
  } else {
    console.log("genero no valido");
  }
}

function cotizar() {
  vCurso.innerText = genero() + categorias() + recaudo + sicov;
  vExamen.innerText = examenes();
  vTotal.innerText = examenes() + (genero() + categorias() + recaudo + sicov);
}
