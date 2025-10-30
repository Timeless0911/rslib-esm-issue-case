async function main() {
    const { concat } = await import("./812.js").then((mod)=>({
            concat: mod.concat
        }));
    concat("hello", "world");
}
export { main };
