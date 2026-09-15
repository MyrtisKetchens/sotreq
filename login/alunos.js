/*
  BASE DE DADOS DOS ALUNOS
  -------------------------------------------------
  Para adicionar/editar um aluno, copie um bloco { ... } e ajuste os campos.
  Para atualizar o progresso de alguém, mude só o "etapaAtual".

  O LOGIN É FEITO SÓ PELO E-MAIL (sem senha). Cada e-mail precisa ser único.

  etapaAtual:
    0 = Inscrição concluída, aguardando Entrevista
    1 = Entrevista concluída, aguardando Estudo de Caso
    2 = Estudo de Caso concluído, aguardando Documentação
    3 = Documentação concluída, aguardando Resultado
    4 = Processo finalizado (Resultado)

  curriculoUrl: caminho do PDF do currículo desse aluno (ex: "curriculos/jorge-miguel.pdf").
  Enquanto estiver "", o link de currículo simplesmente não aparece na etapa de Inscrição.

  reuniaoData / reuniaoLink: data/link da reunião de entrevista desse aluno.
  Enquanto reuniaoData estiver "", aparece "Ainda indisponível" na etapa de Entrevista.
*/

const ETAPAS = [
  "Inscrição",
  "Entrevista",
  "Estudo de Caso",
  "Documentação",
  "Resultado"
];

const ENTREVISTADOR = {
  nome: "Ricardo Esposito",
  email: "ricardo.esposito@outlook.com.br",
  emailContato: "contato@estagiosotreq.site"
};

// Link do Google Form usado na etapa de Estudo de Caso (aceita PDF, Word e apresentação)
// Troque pela URL de "incorporar" (Enviar > Incorporar <>) do seu Google Form.
const FORM_ESTUDO_DE_CASO_URL = "https://docs.google.com/forms/d/e/COLE_AQUI_O_ID_DO_SEU_FORM/viewform?embedded=true";

const ALUNOS = [
  { email: "jorgemigueldasilva2001@gmail.com", nomeCompleto: "Jorge Miguel da Silva de Azevedo", telefone: "21964871453", area: "Engenharia", curriculoUrl: "", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "alexmsjunior@gmail.com", nomeCompleto: "Alex Miranda da Silva Junior", telefone: "21982407267", area: "Engenharia", curriculoUrl: "../curriculos/alex-miranda-da-silva-junior.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "pedroalvescastro12@gmail.com", nomeCompleto: "Pedro Alves da Rosa Castro", telefone: "21969667903", area: "Engenharia", curriculoUrl: "../curriculos/pedro-alves-da-rosa-castro.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "gabi.aparecidamborges@gmail.com", nomeCompleto: "Gabrielle Aparecida Mandu Borges", telefone: "21964415310", area: "Engenharia", curriculoUrl: "../curriculos/gabrielle-aparecida-mandu-borges.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "caio.linha@gmail.com", nomeCompleto: "Caio Coelho de Castro", telefone: "21996881382", area: "Engenharia", curriculoUrl: "../curriculos/caio-coelho-de-castro.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "heringer.valter@gmail.com", nomeCompleto: "Valter Heringer Fialho", telefone: "21999026536", area: "Engenharia", curriculoUrl: "", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "lucasrodriguesws@hotmail.com", nomeCompleto: "Lucas Rodrigues Wakim da Silva", telefone: "21995038733", area: "Engenharia", curriculoUrl: "../curriculos/lucas-rodrigues-wakim-da-silva.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "marcelagomesluzz@gmail.com", nomeCompleto: "Marcela da Silva Gomes", telefone: "21998771644", area: "Engenharia", curriculoUrl: "", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "yurygoncalves02@gmail.com", nomeCompleto: "Yury Gonçalves da Silva", telefone: "21967010349", area: "Engenharia", curriculoUrl: "../curriculos/yury-goncalves-da-silva.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  // ATENÇÃO: esse aluno mandou dois telefones diferentes (21995068183 e 21972641752).
  // Usei o mais recente (21972641752) como contato — confira com ele qual está certo.
  { email: "villar94energy@gmail.com", nomeCompleto: "Leonardo Villar da Silva", telefone: "21972641752", area: "Engenharia", curriculoUrl: "", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "rozi-luiza@hotmail.com", nomeCompleto: "Roziane Luiza dos Santos", telefone: "21965083156", area: "Engenharia", curriculoUrl: "../curriculos/roziane-luiza-dos-santos.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "hallef28@outlook.com", nomeCompleto: "Hallef da Silva Ramos", telefone: "21972714463", area: "Engenharia", curriculoUrl: "", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "davihsb@gmail.com", nomeCompleto: "Davi Hilario da Silva Batista", telefone: "21969938368", area: "Engenharia", curriculoUrl: "../curriculos/davi-hilario-da-silva-batista.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "salleseduardo100@gmail.com", nomeCompleto: "Eduardo Salles Azevedo Lemes", telefone: "21969720000", area: "Engenharia", curriculoUrl: "", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "gabrielsamoreira@hotmail.com", nomeCompleto: "Gabriel Schmitt Arruda Moreira", telefone: "21996449746", area: "Engenharia", curriculoUrl: "../curriculos/gabriel-schmitt-arruda-moreira.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "ricardosilva71747@gmail.com", nomeCompleto: "Ricardo dos Santos Silva", telefone: "21980468463", area: "Engenharia", curriculoUrl: "", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "bielgpereira06@gmail.com", nomeCompleto: "Gabriel Gonçalves Pereira", telefone: "21996848202", area: "Engenharia", curriculoUrl: "../curriculos/gabriel-goncalves-pereira.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "mrdmfernandes@gmail.com", nomeCompleto: "Mariana Ramires de Melo Fernandes", telefone: "21967431928", area: "Engenharia", curriculoUrl: "", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "meandrade021@gmail.com", nomeCompleto: "Maria Eduarda Andrade Barbosa", telefone: "21967186675", area: "Engenharia", curriculoUrl: "", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "samaragomeslemos6@gmail.com", nomeCompleto: "Samara Gomes Lemos", telefone: "21996479991", area: "Engenharia", curriculoUrl: "../curriculos/samara-gomes-lemos.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "marcosdbcabral@gmail.com", nomeCompleto: "Marcos Daniel Nogueira Bertolossi Cabral", telefone: "21981070262", area: "Engenharia", curriculoUrl: "", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "defreitasjulia20@gmail.com", nomeCompleto: "Júlia de Freitas Rodrigues Moura", telefone: "21969017234", area: "Engenharia", curriculoUrl: "../curriculos/julia-de-freitas-rodrigues-moura.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "engciviljamilly@gmail.com", nomeCompleto: "Jamilly Emanuelly Lima da Silva", telefone: "21968851967", area: "Engenharia", curriculoUrl: "../curriculos/jamilly-emanuelly-lima-da-silva.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "sousahayana@gmail.com", nomeCompleto: "Hayana Sousa Ramos", telefone: "21985574128", area: "Engenharia", curriculoUrl: "../curriculos/hayana-sousa-ramos.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 },
  { email: "nicolas.elays@gmail.com", nomeCompleto: "Nicolas Elay de Souza Santos", telefone: "21968217024", area: "Engenharia", curriculoUrl: "../curriculos/nicolas-elay-de-souza-santos.pdf", reuniaoData: "", reuniaoLink: "", etapaAtual: 1 }
];
