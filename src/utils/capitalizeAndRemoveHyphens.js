export function capitalizeAndRemoveHyphens(str) {
    return str
        .split('-') // Divide el string en palabras utilizando los guiones
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza la primera letra de cada palabra
        .join(' '); // Une las palabras sin los guiones
}