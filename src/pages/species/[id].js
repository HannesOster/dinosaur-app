import { dinosaurs } from "../../utils/dinosaurs";
import useRouter from "next/router";

export default function Species() {
  const router = useRouter();
  const { id } = router.query;
  const dinosaur = dinosaurs.find((dinosaur) => dinosaur.id === id);
  const { name, description, size, carnivore, extinction, enemies } = dinosaur;
}
