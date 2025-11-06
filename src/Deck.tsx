import James from './assets/Personagens/James.png';
import Aria from './assets/Personagens/Aria.png';
import Blair from './assets/Personagens/blair.png';
import Michael from './assets/Personagens/Michael.png';

export interface CartaData {
  serial?: number;
  nome?: string;
  nivel?: number;
  alinhaNivel?: 'esquerda' | 'direita' | 'centro';
  ataque?: number;
  defesa?: number;
  descricao?: string;
  imagemUrl?: string;
  tamanho?: 'pequena' | 'media' | 'grande';
  alinhanome?: 'esquerda' | 'centro' | 'direita';
  alinhadescricao?: 'esquerda' | 'centro' | 'direita';
  espelharImagem?: boolean;
  corImagem?: boolean;
  girarImagem?: boolean;
  tipo?: 'Dragão' | 'Besta' | 'Guerreiro' | 'Feiticeiro';
}

export const todasCartas: CartaData[] = [
  {
    serial: 1,
    nome: 'Blair',
    nivel: 5,
    ataque: 8000,
    defesa: 1500,
    alinhaNivel: 'centro',
    descricao: ' Bruxa treinada nas profundezas de Umbreterna.',
    tipo: 'Feiticeiro',
    imagemUrl: `${Blair}`,
  },
  {
    serial: 2,
    nome: 'Michael',
    nivel: 9,
    ataque: 4000,
    defesa: 7000,
    descricao: 'Cria de vampiro ladino, extremamente ágil',
    tamanho: 'media',
    alinhanome: 'esquerda',
    alinhadescricao: 'direita',
    imagemUrl: `${Michael}`,
    corImagem: true,
    espelharImagem: true,
    tipo: 'Besta',
  },
  {
    serial: 3,
    nome: 'James',
    ataque: 3500,
    defesa: 2000,
    nivel: 4,
    alinhaNivel: 'esquerda',
    tamanho: 'grande',
    alinhanome: 'centro',
    alinhadescricao: 'centro',
    tipo: 'Guerreiro',
    descricao: 'Paladino da justiça, protetor dos mais fracos.',
    imagemUrl: `${James}`,
    espelharImagem: true,
    girarImagem: true,
    corImagem: false,
  },
  {
    serial: 4,
    nome: 'Aria',
    nivel: 6,
    ataque: 2500,
    defesa: 1800,
    tamanho: 'pequena',
    tipo: 'Feiticeiro',
    descricao: ' Feiticeira incontrolável, magia pura flui de suas veias',
    imagemUrl: `${Aria}`,
    corImagem: false,
  },
];