function calculate(type) {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    num3 = parseFloat(document.getElementById("num3").value);
    let result;

    switch (type) {
        case '1':
            // Cartesian to Cylindrical
            result = `Cylindrical Coordinates: (${Math.sqrt(num1 * num1 + num2 * num2)}, ${Math.atan2(num2, num1)}, ${num3})`;
            break;
        case '2':
            // Cartesian to Spherical
            const radius = Math.sqrt(num1 * num1 + num2 * num2 + num3 * num3);
            result = `Spherical Coordinates: (${radius}, ${Math.acos(num3 / radius)}, ${Math.atan2(num2, num1)})`;
            break;
        case '3':
            // Cylindrical to Cartesian
              x = num1 * Math.cos(num3) * Math.sin(num2);
              y = num1 * Math.sin(num3) * Math.sin(num2);
              z = num1 * Math.cos(num2);
              result = `Cartesian Coordinates: (${x}, ${y}, ${z})`;
              break;
        case '4':
            // Cylindrical to Spherical
            let r = num1;
            let theta = num2;
            let phi = Math.sqrt(Math.pow(num1, 2) + Math.pow(num3, 2));
            result = `Spherical Coordinates: (${r}, ${theta}, ${phi})`;
            break;
        case '5':
            // Spherical to Cartesian
            result = `Cartesian Coordinates: (${num1 * Math.sin(num2) * Math.cos(num3)}, ${num1 * Math.sin(num2) * Math.sin(num3)}, ${num1 * Math.cos(num2)})`;
            break;
        case '6':
            // Spherical to Cylindrical
            let cylRadius = num1 * Math.sin(num3);
            let cylTheta = num1 * Math.cos(num3);
            result = `Cylindrical Coordinates: (${cylRadius}, ${cylTheta}, ${num2})`;
            break;
        default:
            result = "Invalid Input";
    }
    document.getElementById("result").innerHTML = result;
}