import CardLink from "../components/CardLink";

const InstallationContentEnglish = {
  headerTitle: "Installation",
  headerDescription: "Installation",
  title: "Installation Guide",
  pageContent: (styles) => (
    <p>
      To start automating your strategies, download the{" "}
      <a
        href="https://github.com/ThiDiamondDev/expert-multisignals-docs/releases/download/demo-version/expert.ex5"
        download={"expert.ex5"}
        className={styles.download_link}
      >
        expert.ex5
      </a>
      file and move to &quot;C:/Program Files/MetaTrader 5/MQL5/Experts/&quot;.
      <br />
      <br />
      To start an Expert Advisor, attach it to a chart. The easiest way is to
      double-click on an Expert Advisor in the Navigator window or
      drag&apos;n&apos;drop it to a chart. This will bring up the Expert Advisor
      Properties window.
      <br />
      <br /> Inside the &quot;Inputs&quot; tab, the parameters are located, and
      after fill with the desired settings or load a previous saved
      &quot;.set&quot; file, click OK to start the Expert Advisors on the chart.
      If an Expert Advisor has been successfully started, its name and icon Auto
      Trading enabled appear in the upper right corner of the chart.
      <br />
      <br />
      If the icon is Auto Trading disabled, the Expert Advisor is not allowed to
      perform trading operations. Enable automated trading in the Expert Advisor
      settings, as well as in the trading platform options. <br />
      <br />
      Note: The current version only works on DEMO accounts.
    </p>
  ),
  pageLinks: (styles) => (
    <div className={styles.grid_2}>
      <CardLink title="Starter Sets" href="/sets">
        Get some pre-built configuration files (sets) to start testing.
      </CardLink>
      <CardLink
        title="Detailed Instructions"
        href="https://www.metatrader5.com/en/terminal/help/algotrading/trade_robots_indicators"
      >
        Detailed instructions about how to install a expert advisor inside
        MetaTrader5.
      </CardLink>
      <CardLink
        title="Strategy Testing and Optimization"
        href="https://www.metatrader5.com/en/terminal/help/algotrading"
      >
        Learn more about MetaTrader5, indicators, strategy testing and
        optimizations.
      </CardLink>
    </div>
  ),
};

const InstallationContentPortuguese = {
  headerTitle: "Instalação",
  headerDescription: "Instalação",
  title: "Guia de Instalação",
  pageContent: (styles) => (
    <p>
      Para começar a automatizar suas estratégias, baixe o arquivo{" "}
      <a
        href="https://github.com/ThiDiamondDev/expert-multisignals-docs/releases/download/demo-version/expert.ex5"
        baixar={"expert.ex5"}
        className={styles.download_link}
      >
        expert.ex5
      </a>{" "}
      e mova-o para &quot;C:/Arquivos de Programas/MetaTrader
      5/MQL5/Experts/&quot;.
      <br />
      <br />
      Para iniciar o robô no MetaTrader5, anexe-o a um gráfico. A maneira mais
      fácil é clicar duas vezes nele na janela do Navegador ou arrastar e
      soltá-lo em um gráfico. Isso abrirá a janela de propriedades do robô
      trader.
      <br />
      <br /> Dentro da seção &quot;Inputs&quot;, estão localizados os
      parâmetros. Após preenche-los com as configurações desejadas ou carregar
      um arquivo &quot;.set&quot; salvo anteriormente, clique em OK para iniciar
      os Expert Advisors no gráfico. Se um Expert Advisor foi iniciado com
      sucesso, seu nome e ícone Auto Trading habilitada aparece no canto
      superior direito do gráfico.
      <br />
      <br />
      Se o ícone estiver com Negociação Automática desabilitada, o robô não
      poderá realizar operaçõe. Habilite a negociação automatizada nas
      configurações gerais, bem como nas opções da plataforma de negociação.
      <br />
      <br />
      Nota: A versão atual só funciona em contas DEMO.
    </p>
  ),
  pageLinks: (styles) => (
    <div className={styles.grid_2}>
      <CardLink title="Sets Iniciais" href="/pt-BR/sets">
        Obtenha alguns arquivos de configuração pré-construídos (sets) para
        iniciar os testes.
      </CardLink>
      <CardLink
        title="Instruções Detalhadas"
        href="https://www.metatrader5.com/pt/terminal/help/algotrading/trade_robots_indicators"
      >
        Instruções detalhadas sobre como instalar um robô trader dentro
        MetaTrader5.
      </CardLink>
      <CardLink
        title="Teste e Otimização de Estratégias"
        href="https://www.metatrader5.com/pt/terminal/help/algotrading"
      >
        Saiba mais sobre o MetaTrader5, indicadores, testes de estratégia e
        otimizações.
      </CardLink>
    </div>
  ),
};

const InstallationContent = {
  "en-US": InstallationContentEnglish,
  "pt-BR": InstallationContentPortuguese,
};

export default InstallationContent;
