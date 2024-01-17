import styled from "styled-components";
import variaveis from "../../styles/variaveis";

import * as enums from '../../utils/enums/tarefa'
import { Botao } from "../../styles";

type TagProps = {
    prioridade?: enums.prioridade
    status?: enums.Status
    parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
    if (props.parametro == 'status') {
        if (props.status === enums.Status.PENTDENTE) return variaveis.laranja
        if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
    } else {
        if (props.prioridade === enums.prioridade.URGENTE) return variaveis.vermelho
        if (props.prioridade === enums.prioridade.IMPORTANTE) return variaveis.laranja
    }
    return '#2f3640'
}

export const Card = styled.div`
    background-color: #FCFCFC;
    box-shadow: 0px 4px 4px rgba(0 0 0 0.25);
    padding: 16px;
    margin-bottom: 32px;
    border-radius: 16px;

    label{
        display: flex;
        align-itens: center;
        margin-bottom: 16px;
    }
`
export const Titulo = styled.h3`
    font-weight: bold;
    font-size: 18px;
    margin-left: 8px;
`
export const Tag = styled.span<TagProps>`
    padding: 4px 8px;
    font-size: 10px;
    font-weigth: bold;
    color: #fff;
    background-color: ${(props) => retornaCorDeFundo(props)};
    border-radius: 8px;
    margin-right: 16px;
    display: inline-block;
`
export const Descricao = styled.textarea`
    color: #8B8B8B;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Robot Mono', monospace;
    display: block;
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
    resize: none;
    border: none;
    background-color: transparent;
`
export const BarraAcoes = styled.div`
    border-top: 1px solid rgba(0 0 0 0.1);
    paddig-top: 16px;
`

export const BotaoCancelar = styled(Botao)`
    background-color: ${variaveis.vermelho};
`
