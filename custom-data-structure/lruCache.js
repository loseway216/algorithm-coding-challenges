// https://leetcode.com/problems/lru-cache/
export default class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    const value = this.map.get(key);
    if (value === undefined) {
      return -1;
    }

    this.map.delete(key);
    this.map.set(key, value);

    return value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }
    this.map.set(key, value);

    if (this.map.size > this.capacity) {
      // this.map.delete(this.map.keys().next().value);
      this.map.delete([...this.map.keys()][0]);
    }
  }
}
