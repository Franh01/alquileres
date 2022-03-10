import Head from "next/head";
import { Button, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import theme from "../styles/theme";

export default function Home() {
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
      <Typography
        variant="h1"
        color={"#2f3542"}
        fontFamily="Poppins"
        fontWeight={500}
      >
        Alquileres app
      </Typography>
      <div style={{ background: "#2ed573" }}>
        <Typography color={"#2f3542"} fontWeight={500} fontFamily="Poppins">
          Colores de columnas
        </Typography>
      </div>
      <div style={{ background: "#1e90ff" }}>
        <Typography color={"#2f3542"} fontWeight={500} fontFamily="Poppins">
          Colores de columnas
        </Typography>
      </div>
      <div style={{ background: "#ff6348" }}>
        <Typography color={"#2f3542"} fontWeight={500} fontFamily="Poppins">
          Colores de columnas
        </Typography>
      </div>
      <Button variant="contained" color="primary">
        Text
      </Button>
    </div>
  );
}
