import styles from "./AsideMenu.module.css";

// Components
import Menu from "../Menu";

export default function AsideMenu({ toggleVisibility }) {
  return (
    <aside className={styles.asideMenu}>
      <section>
        <button>
          <img src="./icons/user.svg" alt="Minha conta" />
          Minha conta
        </button>

        <button onClick={() => toggleVisibility(false)}>
          <img src="./icons/close.svg" alt="Fechar menu lateral" />
        </button>
      </section>

      <section>
        <input type="text" placeholder="Faça sua pesquisa aqui" />
        <button>
          <img src="./icons/search.svg" alt="Pesquisar no site" />
        </button>
      </section>

      <Menu />
    </aside>
  );
}
