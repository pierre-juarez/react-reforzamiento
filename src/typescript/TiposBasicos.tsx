export const TiposBasicos = () => {
  // let name: string | number = "Pierre";
  const name: string = "Pierre";
  const age: number = 23;
  const isActive: boolean = true;

  const powers: string[] = ["speed", "fly", "breathing in water"];

  return (
    <>
      <h3>Tipos básicos</h3>
      {name}, {age}, {isActive ? "Activo" : "No activo"}
      <br />
      {powers.join(", ")}
    </>
  );
};
