import LRUCache from "./lruCache";

describe("LRUCache", () => {
  it("should return -1 if the key does not exist", () => {
    const cache = new LRUCache(2);
    expect(cache.get(2)).toBe(-1);
  });

  it("should return the value if the key exists", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1); // cache is {1=1}
    cache.put(2, 2); // cache is {1=1, 2=2}
    expect(cache.get(1)).toBe(1); // return 1
    cache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    expect(cache.get(2)).toBe(-1); // returns -1 (not found)
    cache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    expect(cache.get(1)).toBe(-1); // return -1 (not found)
    expect(cache.get(3)).toBe(3); // return 3
    expect(cache.get(4)).toBe(4); // return 4
  });
});
