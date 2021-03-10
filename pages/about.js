import React from "react";
import Link from "next/link";
const about = () => {
  return (
    <main>
      <div className="container">
        <h1>About page</h1>
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </div>
    </main>
  );
};

export default about;
