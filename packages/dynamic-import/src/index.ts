export async function main() {
  const { concat } = await import("./foo");
  concat("hello", "world");
}
