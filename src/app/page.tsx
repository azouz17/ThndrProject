'use client';
import Image from "next/image";
import styles from "./page.module.css";
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import AntForm from '../Components/AntForm'
export default function Home() {

  return (
    <main className={styles.main}>
       <AntForm  />
    </main>
  );
}
