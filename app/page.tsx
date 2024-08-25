import { useState } from "react";
import RootLayout from "./layout";
import Profile from './Profile';

export default function Home() {
  return (
    <RootLayout>
      <Profile/>
    </RootLayout> 
  );
}
