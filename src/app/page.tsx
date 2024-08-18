'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Col, Row, type FormProps } from 'antd';
import Movies from '../Components/Movie'
export default function Home() {

  return (
    <>
    <Row>
      <Col>
       <Movies  />
       </Col>
       </Row>
    </>
  );
}
