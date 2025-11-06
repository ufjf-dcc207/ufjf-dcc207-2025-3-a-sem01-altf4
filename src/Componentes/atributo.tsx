interface AtributoProps{
    tipo: string;
    valor: number;
}
export default function Atributo({
    tipo='',
    valor=0,
}: AtributoProps){
    const estilos: React.CSSProperties = {
        fontSize: 'clamp(5px, 1vw , 11px)',
    };
    
    const valorLimitado = Math.min(valor, 5000);
    
    return (
        <div className={`${tipo}`} style = {estilos}>
           <span style={{fontWeight:'700'}}>{tipo === 'ataque' ? 'ATK/' : tipo === 'defesa' ? ' DEF/' : ''} </span> 
            <span style={estilos}>{valorLimitado}</span>
        </div>
    )
}      