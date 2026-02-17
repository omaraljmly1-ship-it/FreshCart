import { Cairo } from "next/font/google";
import "../styles/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import 'react-toastify/dist/ReactToastify.css';
import Providers from "../components/providers/providers";
import { verifyToken } from "../features/auth/server/auth.action";
import { ReactNode } from "react";
import { getLoggedUserCart } from "../features/cart/server/Cart.Action";
import { CartState } from "../features/cart/store/cart.slice";

config.autoAddCss = false

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

let defaultCartState: CartState = {
  numOfCartItems: 0,
  cartId: null,
  products: [],
  totalCartPrice: 0,
  isLoading: false,
  error: null,
}

export default async function RootLayout({ children }: { children: ReactNode }) {

  const authValues = await verifyToken()
  let cartState = defaultCartState
  if (authValues.isAuthenticated) {
    try {
      const cartResponse = await getLoggedUserCart()
      cartState = {
        numOfCartItems: cartResponse.numOfCartItems,
        cartId: cartResponse.cartId,
        products: cartResponse.data.products,
        totalCartPrice: cartResponse.data.totalCartPrice,
        isLoading: false,
        error: null,
      }
      
    } catch (error) {
     cartState = defaultCartState
    }
  }
  return (
    <html lang="en">
      <body
        className={`${cairo.variable} antialiased`}
      >
        <Providers preloadedState={{ auth: authValues, cart: cartState }}>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body> 
    </html>
  );
}