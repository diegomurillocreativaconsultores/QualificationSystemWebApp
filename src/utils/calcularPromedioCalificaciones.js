export function calcularPromedioCalificaciones(candidatas) {
    if (candidatas.length === 0) {
        return 0;
    }
    const sumaCalificaciones = candidatas.reduce((acc, obj) => acc + obj.calificacion, 0);
    const promedio = sumaCalificaciones / candidatas.length;
    return Number(promedio.toFixed(2));
}