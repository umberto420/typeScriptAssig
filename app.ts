// This is what you need to implement
type MyPickByType<T, K extends keyof T> = {
  [Key in K]: T[Key]
}

type MyOnlyBoolean = MyPickByType<{ 
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}, boolean> // It should return a type with the following interface: { isReadonly: boolean; isEnable: boolean; }