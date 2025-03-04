import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

export default function Detail() {
  const { mascotaId } = useParams();
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const selectedMascota = data.find((m) => m.id.toString() === mascotaId);
        setMascota(selectedMascota);
      });
  }, [mascotaId]);

  if (!mascota) {
    return <h2 className="text-center mt-5">Cargando...</h2>;
  }

  return (
    <Container className="text-center mt-4">
      <h1>{mascota.nombre}</h1>
      <img
        src={mascota.foto}
        alt={mascota.descripcion}
        style={{ width: "400px", height: "400px", objectFit: "cover" }}
        className="mt-3"
      />
      <h3 className="mt-3">{mascota.raza}</h3>
    </Container>
  );
}
