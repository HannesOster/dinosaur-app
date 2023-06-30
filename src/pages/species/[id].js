import { dinosaurs } from "../../utils/dinosaurs";
import useRouter from "next/router";

export default function Species() {
  const router = useRouter();
  const { id } = router.query;
  const dinosaur = dinosaurs.find((dinosaur) => dinosaur.id === id);
  const { name, description, size, carnivore, extinction, enemies } = dinosaur;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Size : {size}</p>
      <label>
        Carnivore
        <input type="checkbox" checked={carnivore} />
      </label>
      <p>Extinction: {extinction}</p>
      <p>Enemies: {enemies}</p>
    </div>
  );
}
