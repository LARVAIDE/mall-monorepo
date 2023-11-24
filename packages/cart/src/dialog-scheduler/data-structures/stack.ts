const EmptyStackNum = 0;

class Stack<T> {
  private items: Map<number, T>;
  private instance: Stack<T> | undefined;

  constructor() {
    this.items = new Map<number, T>();

    if (!this.instance) {
      this.instance = this;
    }

    return this.instance;
  }

  push(element: T): void {
    const nextIndex = this.size();
    this.items.set(nextIndex, element);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const lastIndex = this.size() - 1;
    const element = this.items.get(lastIndex);
    this.items.delete(lastIndex);
    return element;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const lastIndex = this.size() - 1;
    return this.items.get(lastIndex);
  }

  contains(callbackFn: Function): boolean {
    for (const iterator of this.items.values()) {
      if (callbackFn(iterator)) {
        return true;
      }
    }
    return false;
  }

  isEmpty(): boolean {
    return this.size() === EmptyStackNum;
  }

  size(): number {
    return this.items.size;
  }

  clear(): void {
    this.items.clear();
  }

  toArray(): T[] {
    return Array.from(this.items.values());
  }
}

export default Stack;
