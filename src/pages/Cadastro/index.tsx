import Formulario from "../../containers/Formulário"
import BarraLateral from "../../containers/sidebar"

const Cadastro = () => (
    <>
        <BarraLateral mostrarFiltros={false}></BarraLateral>
        <Formulario></Formulario>
    </>
)

export default Cadastro