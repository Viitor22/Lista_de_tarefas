import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BotaoSalvar, MainContainer, Titulo } from "../../styles"
import { Campo } from "../../styles"
import { Form, Opcoes, Opcao } from "./styles"
import { useDispatch } from "react-redux"
import * as enums from '../../utils/enums/tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
    const dispatch = useDispatch()
    const [titulo, setTitulo] = useState('')
    const [prioridade, setPrioridade] = useState(enums.prioridade.NORMAL)
    const [descricao, setDescricao] = useState('')
    const navigate = useNavigate()

    const cadastrarTarefa = (evento: FormEvent) => {
        evento.preventDefault()
        dispatch(cadastrar({ titulo, prioridade, descricao, status: enums.Status.PENTDENTE }))
        navigate('/')
    }

    return (
        <MainContainer>
            <Titulo>Nova Tarefa</Titulo>
            <Form onSubmit={cadastrarTarefa}>
                <Campo value={titulo} onChange={({ target }) => setTitulo(target.value)} type="text" placeholder="Título" />
                <Campo value={descricao} onChange={(evento) => setDescricao(evento.target.value)} as="textarea" placeholder="Descrição da tarefa"></Campo>
                <Opcoes>
                    <p>Prioridade</p>
                    {Object.values(enums.prioridade).map(prioridade => (
                        <Opcao key={prioridade}>
                            <input value={prioridade} onChange={(evento) => setPrioridade(evento.target.value as enums.prioridade)} name="prioridade" type="radio" id={prioridade} defaultChecked={prioridade === enums.prioridade.NORMAL} /> <label htmlFor={prioridade}>{prioridade}</label>
                        </Opcao>
                    ))}
                </Opcoes>
                <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
            </Form>
        </MainContainer>
    )
}

export default Formulario