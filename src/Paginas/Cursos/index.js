import Navbar from "../../Componentes/Navbar";
import Rodape from "../../Componentes/Rodape";
import "./Cursos.css";

function Cursos() {
  return (
    <>
      <Navbar />
      <div className="cursos-pagina">
        <h1 className="titulo-principal"> Nossos Cursos</h1>

        <section className="secao-introducao container-responsivo">
        <p className="texto-introducao">
          Para se inscrever em nossa instituição, é necessário realizar uma prova, que pode ser presencial — com local e data informados no cartão de inscrição — ou de forma online. Acompanhe os últimos editais
          <a
            href="https://sisacad.educacao.pe.gov.br/sissel/index.php?pag=1"
            className="px-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            clicando aqui.
          </a>
        </p>

        </section>

        <section className="lista-cursos">
          {/* Curso 1: Ensino Médio Integrado */}
          <article className="cartao-curso">
            <div className="cartao-imagem-container">
              <img src="https://img.freepik.com/fotos-gratis/vista-lateral-da-programacao-atraente-do-desenvolvedor-de-software-hispanico-usando-o-computador-enquanto-trabalha-em-casa_662251-958.jpg?ga=GA1.1.1566694101.1749485569&semt=ais_items_boosted&w=740" alt="Ensino Médio Integrado" className="cartao-imagem" />
            </div>
            <div className="cartao-conteudo">
              <h2 className="cartao-titulo">Ensino Médio Integrado à Educação Profissional</h2>
              <p className="cartao-horario">(das 7h às 17h)</p>
              <p className="cartao-descricao">Instituição de ensino em tempo integral que oferece cursos técnicos integrados ao Ensino Médio, com duração de 3 anos, na modalidade integrada, com jornada completa e foco na formação profissional e no desenvolvimento de competências para o futuro.</p>
              <p className="cartao-cursos-oferecidos">Cursos oferecidos: Desenvolvimento de Sistemas e Eletrotécnica.</p>
              <div className="cartao-info-destaque">
                <p className="info-destaque-texto"><strong>Informação importante:</strong> Certificação Técnica de Nível Médio, com validade nacional.</p>
              </div>
            </div>
          </article>

          {/* Curso 2: Cursos Técnicos Subsequentes (layout reverso) */}
          <article className="cartao-curso cartao-curso-reverso">
            <div className="cartao-imagem-container">
              <img src="https://img.freepik.com/fotos-graCursos/conceito-de-colagem-de-html-e-css-com-pessoa_23-2150062008.jpg?semt=ais_items_boosted&w=740" alt="Cursos Técnicos Subsequentes" className="cartao-imagem" />
            </div>
            <div className="cartao-conteudo">
              <h2 className="cartao-titulo">Cursos Técnicos Subsequentes</h2>
              <p className="cartao-horario">(das 18:40h às 21:20h)</p>
              <p className="cartao-descricao">São destinados a estudantes que já concluíram o Ensino Médio e desejam se profissionalizar. Com duração de 1 ano e 6 meses, os cursos são ministrados no turno da noite, na modalidade Cursos Técnicos.</p>
              <p className="cartao-cursos-oferecidos">Estes são os cursos disponíveis: Desenvolvimento de Sistemas, Guia de Turismo, Planejamento e Controle de Produção.</p>
              <div className="cartao-info-destaque">
                <p className="info-destaque-texto"><strong>Informação importante:</strong> Formação rápida e focada no mercado de trabalho.</p>
              </div>
            </div>
          </article>

          {/* Curso 3: Cursos Técnicos EAD Semipresenciais */}
          <article className="cartao-curso">
            <div className="cartao-imagem-container">
              <img src="https://img.freepik.com/fotos-gratis/colagem-de-fundo-de-programacao_23-2149901771.jpg?semt=ais_items_boosted&w=740" alt="Cursos Técnicos EAD Semipresenciais" className="cartao-imagem" />
            </div>
            <div className="cartao-conteudo">
              <h2 className="cartao-titulo">Cursos Técnicos EAD Semipresenciais</h2>
              <p className="cartao-horario">Horário das Atividades Presenciais: As atividades presenciais ocorrem no turno da noite no Polo ETE Jurandir Benzerra Lins. O dia específico da semana para as atividades presenciais varia conforme o curso:</p>
              <p className="cartao-cursos-oferecidos">Administração, Desenvolvimento de Sistemas, Design Gráfico, Logística, Recursos Humanos, Secretaria Escolar, Segurança do Trabalho, Tradução e Interpretação de Libras.</p>
              <div className="cartao-info-destaque">
                <p className="info-destaque-texto"><strong>Informação importante:</strong> Permite acesso mais rápido ao ensino superior por meio de aproveitamento de disciplinas.</p>
              </div>
            </div>
          </article>
        </section>
      </div>
      <Rodape />
    </>
  );
}

export default Cursos;