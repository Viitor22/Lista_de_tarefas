import { useDispatch, useSelector } from "react-redux"
import FiltroCard from "../../components/FiltroCard"
import { useNavigate } from "react-router-dom"

import * as S from './style'
import { RootReducer } from "../../store"
import * as enums from '../../utils/enums/tarefa'
import { alterarTermo } from "../../store/reducers/filtro"
import { Botao, Campo } from "../../styles"

type Props = {
    mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { termo } = useSelector((state: RootReducer) => state.filtro)

    return (
        <S.Aside>
            <div>
                {mostrarFiltros ? (
                    <>
                        <Campo type="text" placeholder="Buscar" value={termo} onChange={evento => dispatch(alterarTermo(evento.target.value))} />
                        <S.Filtros>
                            <FiltroCard valor={enums.Status.PENTDENTE} criterio="status" legenda="pedentes"></FiltroCard>
                            <FiltroCard valor={enums.Status.CONCLUIDA} criterio="status" legenda="concluídas" ></FiltroCard>
                            <FiltroCard valor={enums.prioridade.URGENTE} criterio="prioridade" legenda="urgentes"></FiltroCard>
                            <FiltroCard valor={enums.prioridade.IMPORTANTE} criterio="prioridade" legenda="importantes"></FiltroCard>
                            <FiltroCard valor={enums.prioridade.NORMAL} criterio="prioridade" legenda="normal"></FiltroCard>
                            <FiltroCard criterio="todas" legenda="todas"></FiltroCard>
                        </S.Filtros>
                    </>
                ) : (
                    <Botao onClick={() => navigate('/')} type="button">Voltar a lista de tarefas</Botao>
                )}

            </div>
        </S.Aside>
    )
}

export default BarraLateral