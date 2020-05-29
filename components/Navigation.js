import React from "react";
import Link from "next/link";
import "../styles/main.css";
export default function Navigation() {
  return (
    <nav>
      <h3>Next app</h3>
      <ul>
        <li>
          <Link href="/" >
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>services</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
