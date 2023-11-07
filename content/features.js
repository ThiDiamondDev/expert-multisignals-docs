import Link from "next/link";

const FeaturesContentEnglish = {
  headerTitle: "EA Features",
  headerDescription: "Features",
  title: "Supported Features",
  pageContent: (styles) => (
    <p>
      The EA is made with
      <Link href={"https://www.mql5.com/en/docs"}>MQL5</Link> and runs inside
      Metatrader5 platform. The project is still under development, but the main
      feature is the generation of market buy/sell/reversion signals based on
      any indicator comparisions inside expressions. There are still work in
      progress and some features/parameters can change along time. Also trading
      on REAL accounts is currently blocked, so it will only work on DEMO
      accounts for security reasons. Feel free to download, test and share your
      feedback.
      <br />
      <br />
      The current features of the robot are:
      <br />
      <br />
      <ul className={styles.list}>
        <li>Work mode on every tick or on bar.</li>
        <li>Work symbol setting to trade custom charts like Renko</li>
        <li>Allow/deny buy or sell trades, as well as reversions.</li>
        <li>Partial entries/exits on profit and on loss.</li>
        <li>
          Limiting positions, orders and volumes opened, interval in seconds
          between trades and max trade per day.
        </li>
        <li>
          Definition of lots for open trades and option to use market price or
          pending orders.
        </li>
        <li>Definition of signals for open, close and reverse positions.</li>
        <li>
          Definition of fixed stop loss and take profit in points or custom
          expression calculation.
        </li>
        <li>
          Option to use a trailing stop based on fixed points or expression
          calculation.
        </li>
        <li>
          Settings for start and end hour/minute of trade session, with option
          to close positions after end.
        </li>
        <li>
          Monetary limits for profit and loss, with option to close positions
          after reach the limit.
        </li>
      </ul>
      With signals generation the Expert can open, close and manage positions
      with fixed stop loss and take profit.
      <br />
      <br />
      Another cool feature is the possibility to test the settings in market
      history, live on demo accounts and even optimize the used parameters
      inside the MT5 strategy tester.
    </p>
  ),
};

const FeaturesContentPortuguese = {
  headerTitle: "Recursos do Robô",
  headerDescription: "Recursos do Robô",
  title: "Recursos do Robô",
  pageContent: (styles) => (
    <p>
      O Robô foi criado utilizando a linguagem
      <Link href={"https://www.mql5.com/pt/docs"}>MQL5</Link> e roda dentro
      Plataforma Metatrader5. O projeto ainda está em desenvolvimento, mas o
      principal recurso é a geração de sinais de compra/venda/reversão de
      mercado com base em quaisquer comparações de indicadores dentro de
      expressões. Ainda há trabalho em progresso e alguns recursos/parâmetros
      podem mudar ao longo do tempo sem aviso prévio, além de estar sujeito a
      bugs. Também negociar em contas REAIS está bloqueado no momento, então só
      funcionará em contas DEMO por motivos de segurança. Sinta-se à vontade
      para baixar, testar e compartilhar seu opinião.
      <br />
      <br />
      Os recursos atuais do robô são:
      <br />
      <br />
      <ul className={styles.list}>
        <li>Modo de trabalho em cada tick ou barra.</li>
        <li>
          Configuração de ativo para negociar gráficos personalizados como o
          Renko.
        </li>
        <li>
          Permitir/negar negociações de compra ou venda, bem como reversões.
        </li>
        <li>Entradas/saídas parciais no lucro e prejuízo.</li>
        <li>
          Limitação de posições, ordens e volumes abertos, intervalo em segundos
          entre negociações e negociações máximas por dia.
        </li>
        <li>
          Definição de lotes para negociações abertas e opção de utilização de
          preço de mercado ou ordens pendentes.
        </li>
        <li>
          Definição de sinais para compra, venda ou reversão das posições.
        </li>
        <li>
          Definição de stop loss(risco) e take profit(alvo) fixo em pontos ou
          cálculo de expressão customizadas.
        </li>
        <li>
          Opção para usar stop móvel em pontos fixos ou cálculo de expressão.
        </li>
        <li>
          Configurações da hora/minuto de início e término da sessão de
          negociação, com opção para fechar posições após o término.
        </li>
        <li>
          Limites monetários para lucros e perdas, com opção de fechamento de
          posições depois de atingir o limite.
        </li>
      </ul>
      Com a geração de sinais o robô pode abrir, fechar e gerenciar posições.
      <br />
      <br />
      Outro recurso interessante é a possibilidade de testar as configurações no
      histórico do ativo, no mercado ao vivo em contas DEMO e até otimizar os
      parâmetros usados dentro do testador de estratégia MT5.
    </p>
  ),
};

const FeaturesContent = {
  "en-US": FeaturesContentEnglish,
  "pt-BR": FeaturesContentPortuguese,
};

export default FeaturesContent;
