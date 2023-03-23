const validator = {
  isValid: (container) => {
    const convertAndReverse = container.toString().split("").reverse().join("");
    console.log(convertAndReverse);

    // multiplicacion
    const numero = convertAndReverse.split("");
    const multip = 2;

    const multiplicar = numero.map(function (n, index) {
      if (index % 2 !== 0) {
        const par = n * multip;
        console.log(par);
        console.log(n, index);
        if (par > 9) {
          const suma = par
            .toString()
            .split("")
            .reduce((acumulador, item) => {
              return acumulador + parseInt(item);
            }, 0);
          console.log("si hay", par);
          return suma;
        } else {
          console.log("no", par);
          return par;
        }
      } else {
        return n;
      }
    });
    const total = multiplicar.reduce((acumula, item) => {
      return acumula + parseInt(item);
    }, 0);
    console.log(total);
    if (total % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: (container) => {
    const clave =
      container.slice(0, -4).replace(/./g, "#") + container.slice(-4);
    console.log(clave);
    return clave;
  },
};

export default validator;
