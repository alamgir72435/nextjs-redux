import Head from "next/head";
import styles from "../styles/Home.module.css";
import { increment, decrement } from "./../store/actions/postAction";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
export default function Home() {
  const dispatch = useDispatch();
  const { number } = useSelector((state) => state.test);
  return (
    <main>
      <div className="container">
        <div>
          <h1>{number}</h1>
          <button onClick={() => dispatch(increment())}>increment</button>
          <button onClick={() => dispatch(decrement())}>decrement</button>
          <button>
            <Link href="/about">
              <a>Go To About Page</a>
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
