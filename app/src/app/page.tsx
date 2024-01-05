import "./globals.css";
import Postagem from "./Postagem";

export default function Home() {
  return (
    <>
      <Postagem
        username={"JoaoSilva"}
        location={"Rio de Janeiro"}
        profile_picture="./user4.png"
        post="./picture1.png"
        like={false}
        describion="Passeio maravilhoso à beira-mar."
        hastags={"#verao #sol #praia #paz"}
        quantLikes={94}
      />

      <Postagem
        username={"MariaSouza"}
        location={"Montanhas Azuis"}
        profile_picture="./user2.png"
        post="./picture2.png"
        like={true}
        describion="Explorando as belas trilhas das montanhas."
        hastags={"#natureza #aventura #neve"}
        quantLikes={137}
      />

      <Postagem
        username={"AnaCarvalho"}
        location={"Vila do Campo"}
        profile_picture="./user3.png"
        post="./picture3.png"
        like={true}
        describion="Saboreando um delicioso café."
        hastags={"#vidaSimple #tranquilidade"}
        quantLikes={87}
      />
    </>
  );
}
