// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// const combined1 = [...first, "a", ...second, "b"];

const first = { name: "Hector" };
const second = { job: "Product Owner" };
const combined = { ...first, ...second, ownership: "real-estate" };

console.log(combined);
//console.log(combined1);
