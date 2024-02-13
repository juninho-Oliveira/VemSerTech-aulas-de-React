import Formulario from './components/forms/forms';
import './App.css';
import Contador from './components/contador/Contador';
import Imagem from './components/imagens/imagens';
import Card from './components/card/card';


function App() {

  const dogs = [
    {
      nome: "Labrador Retriever",
      imagem: "https://images.dog.ceo/breeds/labrador/n02099712_2174.jpg",
      origem: "Reino Unido",
      descricao: "O Labrador Retriever é conhecido por sua habilidade em nadar e amor pela água."
    },
    {
      nome: "Beagle",
      imagem: "https://images.dog.ceo/breeds/beagle/n02088364_2143.jpg",
      origem: "Reino Unido",
      descricao: "Os Beagles são conhecidos por seu faro apurado e disposição para rastrear cheiros."
    },
    {
      nome: "Buldogue Francês",
      imagem: "https://images.dog.ceo/breeds/bulldog-french/n02108915_1866.jpg",
      origem: "França",
      descricao: "Os Buldogues Franceses são conhecidos por sua aparência robusta e natureza amorosa."
    },
    {
      nome: "Poodle",
      imagem: "https://images.dog.ceo/breeds/poodle-standard/n02113799_936.jpg",
      origem: "França",
      descricao: "Os Poodles são conhecidos por sua inteligência e sua aparência elegante."
    },
    {
      nome: "Rottweiler",
      imagem: "https://images.dog.ceo/breeds/rottweiler/n02106550_9432.jpg",
      origem: "Alemanha",
      descricao: "Os Rottweilers são cães robustos e fortes, conhecidos por serem confiáveis e dedicados."
    },
    {
      nome: "Dálmata",
      imagem: "https://images.dog.ceo/breeds/dalmatian/cooper1.jpg",
      origem: "Croácia",
      descricao: "Os Dálmatas são conhecidos por sua pelagem distintiva com manchas e seu espírito enérgico."
    },
  ];

  return (
    <div className="App">
      {/*{dogs.map((dog, index) => (
      <Card
        key={index}
        title={dog.nome}
        label="click"
        descricao={dog.descricao}
        subtitle={dog.origem}
        src={dog.imagem}
        />
      ))} aula 1*/}
      {/*<Formulario/> aula 2*/}
    </div>
  );
}

export default App;
