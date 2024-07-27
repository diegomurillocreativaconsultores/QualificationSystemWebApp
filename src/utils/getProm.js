export const getProm = (candidata, phase) => {
    let nota1 = Number(candidata[`scorePhase${phase}U1`]?.score || 0);
    let nota2 = Number(candidata[`scorePhase${phase}U2`]?.score || 0);
    let nota3 = Number(candidata[`scorePhase${phase}U3`]?.score || 0);
    let nota4 = Number(candidata[`scorePhase${phase}U4`]?.score || 0);
    return ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);
};