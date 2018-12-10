export interface IRecord {
  type: string;
  num: number | string;
  time: number | string;
  staff: string;
  action: string;
  actionName: string;
}

export interface IStaff {
  name: string;
  id: number;
  time?: number | string;
  key?: string;
}

export interface IItemStaff {
  name: string;
  price:number;
  id?: number;
  time?: number | string;
}
