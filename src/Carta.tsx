import './Carta.css'

interface CartaProps = {
    nome?: string;
    ataque?: number;
    defesa?: number;
    descricao?: string;
}

export default function Carta({
    nome='Nome',
    ataque=1000,
    defesa=1000,
    descricao=''}: CartaProps){
    return (
        <div className="carta">
            <div className="frente">
                <div className='Nome'>{nome}</div>
                <div className='desc'>{descricao}</div>
                <div className='ataque'>{ataque}</div>
                <div className='defesa'>{defesa}</div>
            </div>
        </div>
    )
}

export default Carta;