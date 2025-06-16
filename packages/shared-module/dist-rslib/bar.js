const shared = (str)=>str + " from shared module";
const bar = shared("bar");
export { bar };
