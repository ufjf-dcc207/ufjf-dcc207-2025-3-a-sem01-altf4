interface TextoProps {
    conteudo?: string;
    tamanho?: string;
    alinhamento?: string;
    classe?: 'Nome' | 'desc';
}

export default function Texto({
    conteudo='',
    tamanho = 'media',
    alinhamento = 'centro',
    classe = 'desc',
}: TextoProps) {
    const estilos: React.CSSProperties = {
        fontSize: tamanho === 'pequena' ? 'clamp(6px, 2vw , 11px)' : tamanho === 'grande' ? classe === 'desc' ? 'clamp(15px, 2vw , 18px)' :'clamp(19px, 2vw , 25px)' : 'clamp(13px,2vw, 15px)',
        textAlign: alinhamento === 'esquerda' ? 'left' : alinhamento === 'direita' ? 'right' : 'center',
    };

    return (
        <div className={`${classe}`} style={estilos}>{conteudo}</div>
    )
}