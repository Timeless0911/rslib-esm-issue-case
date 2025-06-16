const shared = (str)=>str + " from shared module";
const foo = shared("foo");
export { foo };
