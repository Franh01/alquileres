import React from "react";
import Head from "next/head";
import { Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import { PublicationCard } from "../components/PublicationCard";
import axios from "axios";
import { useEffect } from "react";
import { CreatePublication } from "../components/CreatePublication";

export default function Home() {
  const url = "http://localhost:3001";
  const [publications, setPublications] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/publication`).then((res) => {
      setPublications(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Alquileres App</title>
        <meta name="description" content="Busca alquileres en Argentina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        src="/iconoAlq.png"
        alt="icon"
        style={{
          width: "200px",
        }}
      />
      <Typography variant="h1" color={"#2f3542"} fontWeight="medium">
        Alquileres app
      </Typography>
      <div style={{ background: "#2ed573" }}>
        <Typography color={"#2f3542"} fontWeight="medium">
          Colores de columnas
        </Typography>
      </div>
      <div style={{ background: "#1e90ff" }}>
        <Typography color={"#2f3542"} fontWeight={500}>
          Colores de columnas
        </Typography>
      </div>
      <div style={{ background: "#ff6348" }}>
        <Typography color={"#2f3542"} fontWeight={500}>
          Colores de columnas
        </Typography>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        publications.map((item, i) => (
          <PublicationCard
            key={i}
            title={item.title}
            description={item.description}
          />
        ))
      )}
      <CreatePublication />
    </div>
  );
}
