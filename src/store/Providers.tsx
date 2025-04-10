"use client";

import { Provider } from "react-redux";

import { useRef } from "react";
import { AppStore, makeStore } from ".";

interface Props {
  children: React.ReactNode;
}
export const Providers = ({ children }: Props) => {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) storeRef.current = makeStore();

  return <Provider store={storeRef.current}>{children}</Provider>;
};
