import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight, Truck, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import tireIcon from "@/assets/tire-icon.png";

interface CartItem {
  id: number;
  name: string;
  brand: string;
  size: string;
  price: number;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Dueler LX", brand: "Bridgestone", size: "225/65R17", price: 189.99, quantity: 4 },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="section-dark py-10">
          <div className="container">
            <h1 className="font-heading text-3xl md:text-5xl font-black uppercase text-primary-foreground">
              Shopping <span className="text-primary">Cart</span>
            </h1>
          </div>
        </div>

        <div className="container py-8">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Your cart is empty</h2>
              <p className="text-muted-foreground mt-2">Start shopping to add tires to your cart.</p>
              <Link to="/tires" className="btn-hero-primary mt-6 inline-flex gap-2">
                Shop Tires <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="product-card p-4 flex gap-4">
                    <div className="w-24 h-24 bg-secondary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src={tireIcon}
                        alt={`Discount tires online in your cart - ${item.brand} ${item.name}`}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-xs font-semibold text-primary uppercase">{item.brand}</span>
                          <h3 className="font-heading text-lg font-bold text-foreground">{item.name}</h3>
                          <p className="text-xs text-muted-foreground">{item.size}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border rounded-lg overflow-hidden">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-accent transition-colors">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 text-sm font-bold text-foreground min-w-[3rem] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-accent transition-colors">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-lg font-bold text-foreground">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="product-card p-6 sticky top-40">
                  <h2 className="font-heading text-xl font-bold text-foreground uppercase mb-4">Order Summary</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium text-success">FREE</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between">
                      <span className="font-bold text-foreground">Total</span>
                      <span className="text-xl font-black text-foreground">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <button className="btn-hero-primary w-full mt-5 gap-2 text-base py-4">
                    Proceed to Checkout <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-5 space-y-2">
                    {[
                      { icon: Truck, text: "Free Shipping" },
                      { icon: Shield, text: "Manufacturer Tread Wear Warranty Included" },
                    ].map((perk) => (
                      <div key={perk.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <perk.icon className="w-4 h-4 text-success" />
                        {perk.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default CartPage;
