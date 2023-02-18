import Nav from "../components/Nav";
import React from "react";

export interface LinkNav {
  to: string;
  title: string;
}

export default function MainLayout(props: React.PropsWithChildren) {
  const list: LinkNav[] = [
    { to: "/", title: "Inicio" },
    { to: "/jugar", title: "Jugar" },
    { to: "/ayuda", title: "Ayuda" },
  ];
  return (
    <React.Fragment>
      <Nav list={list} />
      <React.Suspense fallback={<p>loading...</p>}>
        {props.children}
      </React.Suspense>
    </React.Fragment>
  );
}
