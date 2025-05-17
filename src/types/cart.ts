export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  onCart:boolean;
}

export interface CartState {
  items: CartItem[];
}