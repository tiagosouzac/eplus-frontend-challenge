export default function MenuButton({ icon }) {
  return (
    <button>
      <img src={`./icons/${icon}.svg`} alt="Pesquisar no site" />
    </button>
  );
}
