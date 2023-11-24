class Singleton {
  private static instance: Singleton;

  private constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

export { Singleton };
