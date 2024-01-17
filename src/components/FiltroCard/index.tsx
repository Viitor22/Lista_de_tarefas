import { useDispatch, useSelector } from "react-redux"
import * as S from "./styles"
import { alterarFiltro } from "../../store/reducers/filtro"
import * as enums from '../../utils/enums/tarefa'
import { RootReducer } from "../../store"

export type Props = {
    legenda: string
    criterio: 'prioridade' | 'status' | 'todas'
    valor?: enums.prioridade | enums.Status
}

const FiltroCard = ({ valor, criterio, legenda }: Props) => {
    const dispatch = useDispatch()
    const { filtro, tarefas } = useSelector((state: RootReducer) => state)

    const estaAtivo = () => {
        const mesmoCriterio = filtro.criterio === criterio
        const mesmoValor = filtro.valor === valor

        return mesmoCriterio && mesmoValor
    }

    const contarTarefas = () => {
        if (criterio === 'todas') return tarefas.itens.length
        if (criterio === 'prioridade') {
            return tarefas.itens.filter(item => item.prioridade === valor).length
        }
        if (criterio === 'status') {
            return tarefas.itens.filter(item => item.status === valor).length
        }
    }

    const filtrar = () => {
        dispatch(alterarFiltro({
            criterio,
            valor
        })
        )
    }

    const contador = contarTarefas()
    const ativo = estaAtivo()

    return (
        <S.Card ativo={ativo} onClick={filtrar}>
            <S.Contador>{contador}</S.Contador>
            <S.Label>{legenda}</S.Label>
        </S.Card>
    )
}

export default FiltroCard;