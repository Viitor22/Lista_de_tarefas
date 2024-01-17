import ListaDeTarefas from "../../containers/ListadeTarefas";
import BarraLateral from "../../containers/sidebar";
import BotaAdicionar from "../../components/BotaoAdicionar";

const Home = () => (
    <>
        <BarraLateral mostrarFiltros></BarraLateral>
        <ListaDeTarefas></ListaDeTarefas>
        <BotaAdicionar></BotaAdicionar>
    </>
)

export default Home