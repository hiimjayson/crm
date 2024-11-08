export type Nullable<T> = T | null;
export type Undefinedable<T> = T | undefined;

export type Nilable<T> = Nullable<Undefinedable<T>>;
