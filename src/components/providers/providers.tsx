"use client";

import { AppStore, AppState, createStore, PreloadedState } from "@/src/store/store";
import { useRef } from "react";
import { Provider } from "react-redux";
import { Bounce, ToastContainer } from "react-toastify";

type ProvidersProps = {
  children: React.ReactNode;
  preloadedState?: Partial<AppState>;
};

export default function Providers({ children, preloadedState }: ProvidersProps) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = createStore(preloadedState as PreloadedState);
  }

  return (
    <Provider store={storeRef.current}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Provider>
  );
}
