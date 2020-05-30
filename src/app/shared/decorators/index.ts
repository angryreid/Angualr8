export function Emoji() {
  return (target: object, key: string) => {
    let val = target[key];
    const getter = () => {
      return val;
    }
    const setter = (value: string) => {
      val = `>_< ${value} >_<`
    }

    Object.defineProperty(target, key, {
      set: setter,
      get: getter,
      enumerable: true,
      configurable: true
    })
  }
}

export function Confirmable (message: string) {// decorate function
  return (target: object, key: string, descripor: PropertyDescriptor) => {
    const original = descripor.value; // old function
    descripor.value = function(...args: any) {
      const allow = window.confirm(message);
      if (allow) {
        const result = original.apply(args);
        return result
      }else{
        return null;
      }
    }
    return descripor;
  }
}