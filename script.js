// URL da API que retorna os dados do JSON
const apiUrl = '/api/data';

// Elemento para exibir os dados
const dataList = document.querySelector('.alter');
const whiteboard = document.querySelector('.whiteboard');
const titulo = document.querySelector('.titulo');
var numberOfQuestions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46.47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80.81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98];
const data = [
    {
      "id": 0,
      "pergunta": "Qual dos seguintes animais não possui mais do que um estômago?",
      "alternativas": {
        "0": "Formiga",
        "1": "Galinha",
        "2": "Pombo",
        "3": "Ornintorrinco"
      },
      "correct": "3"
    },
    {
      "id": 1,
      "pergunta": "O que acontece com uma batata exposta ao sol por muito tempo?",
      "alternativas": {
        "0": "Ela fica verde e venenosa",
        "1": "Ela fica seca e se desmancha",
        "2": "As raízes começam a brotar",
        "3": "Ela fica dura e cinza"
      },
      "correct": "0"
    },
    {
      "id": 2,
      "pergunta": "Qual desses países já participou numa copa do mundo?",
      "alternativas": {
        "0": "Venezuela",
        "1": "Zaire",
        "2": "Jordânia",
        "3": "Guatemala"
      },
      "correct": "1"
    },
    {
      "id": 3,
      "pergunta": "Quantos pontinhos tem em dois dados de 6 faces?",
      "alternativas": {
        "0": "21",
        "1": "26",
        "2": "42",
        "3": "48"
      },
      "correct": "2"
    },
    {
      "id": 4,
      "pergunta": "Por qual desses materiais o som viaja mais rápido?",
      "alternativas": {
        "0": "Água",
        "1": "Ar",
        "2": "Gás Hélio",
        "3": "Ferro"
      },
      "correct": "3"
    },
    {
      "id": 5,
      "pergunta": "Atualmente, qual é o vídeo mais assistido do mundo no Youtube?",
      "alternativas": {
        "0": "Baby Shark Dance",
        "1": "Wiz Khalifa - See you again",
        "2": "Luis Fonsi - Despacito",
        "3": "Adele - Hello"
      },
      "correct": "0"
    },
    {
      "id": 6,
      "pergunta": "Qual dessas partes do corpo é mais resistente?",
      "alternativas": {
        "0": "Fêmur",
        "1": "Crânio",
        "2": "Esmalte do dente",
        "3": "Unha do Pé"
      },
      "correct": "2"
    },
    {
      "id": 7,
      "pergunta": "Do que eram feitos os travesseiros no Egito Antigo?",
      "alternativas": {
        "0": "Areia",
        "1": "Pele de animais",
        "2": "Feixes de trigo",
        "3": "Pedra"
      },
      "correct": "3"
    },
    {
      "id": 8,
      "pergunta": "Qual dessas fobias não existe?",
      "alternativas": {
        "0": "Onfalofobia (Umbigos)",
        "1": "Ombrofobia (Chuva)",
        "2": "Plesiofobia (Panelas de Pressão)",
        "3": "Globofobia (Balões)"
      },
      "correct": "2"
    },
    {
        "id": 9,
        "pergunta": "Qual desses alimentos não é feito com milho?",
        "alternativas": {
          "0": "Tapioca",
          "1": "Cuzcuz",
          "2": "Canjica",
          "3": "Polenta"
        },
        "correct": "0"
      },
      {
        "id": 10,
        "pergunta": "Qual o único grande felino que consegue ronronar?",
        "alternativas": {
          "0": "Leão",
          "1": "Guepardo",
          "2": "Tigre",
          "3": "Onça Pintada"
        },
        "correct": "2"
      },
      {
        "id": 11,
        "pergunta": "Qual é o verdadeiro nome do Indiana jones?",
        "alternativas": {
          "0": "Henry Jones Jr.",
          "1": "Harisson Jones Jr.",
          "2": "Phillip Jones Jr.",
          "3": "Richard Jones Jr."
        },
        "correct": "0"
      },
      {
        "id": 12,
        "pergunta": "Na frase 'Quem quer casa, casa', as palavras casa são:",
        "alternativas": {
          "0": "Parônimas",
          "1": "Sinônimas",
          "2": "Homônimas",
          "3": "Antônimas"
        },
        "correct": "2"
      },
      {
        "id": 13,
        "pergunta": "Na frase 'Quem quer casa, casa', as palavras casa são:",
        "alternativas": {
          "0": "Parônimas",
          "1": "Sinônimas",
          "2": "Homônimas",
          "3": "Antônimas"
        },
        "correct": "2"
      },
      {
        "id": 14,
        "pergunta": "Comparando o pescoço humano com o das girafas, quantas vértebras ele tem?",
        "alternativas": {
          "0": "O mesmo número",
          "1": "2x mais",
          "2": "4x mais",
          "3": "3x mais"
        },
        "correct": "0"
      },
      {
        "id": 14,
        "pergunta": "Qual país sediou a primeira Copa do Mundo?",
        "alternativas": {
          "0": "Uruguai",
          "1": "Argentina",
          "2": "Brasil",
          "3": "Paraguai"
        },
        "correct": "0"
      },
      {
        "id": 15,
        "pergunta": "As meninas Super Poderosas são: Docinho, Lindinha, e:",
        "alternativas": {
          "0": "Coquinho",
          "1": "Florzinha",
          "2": "Naninha",
          "3": "Beijinho"
        },
        "correct": "1"
      },
      {
        "id": 16,
        "pergunta": "Se torcer um pano molhado em gravidade zero, o que acontece?",
        "alternativas": {
          "0": "Gotas de água flutuam pra todas as direções",
          "1": "Uma única gota de água flutua",
          "2": "A água não sai do pano",
          "3": "A água sai do plano, mas fica grudada em volta dele"
        },
        "correct": "3"
      },
      {
        "id": 17,
        "pergunta": "Quantas rodas tinha a primeira bicicleta",
        "alternativas": {
          "0": "Uma",
          "1": "Quatro",
          "2": "Duas",
          "3": "Três"
        },
        "correct": "2"
      },
      {
        "id": 18,
        "pergunta": "Qual tipo de radiação dá poderes ao Hulk?",
        "alternativas": {
          "0": "Raios Gama",
          "1": "Radiação Beta",
          "2": "Raios X",
          "3": "Partículas Alfa"
        },
        "correct": "0"
      },
      {
        "id": 19,
        "pergunta": "Qual Tartaruga ninja tem o nome do pintor que pintou o teto Capela Cistina?",
        "alternativas": {
          "0": "Michelangelo",
          "1": "Leonardo",
          "2": "Rafael",
          "3": "Donatello"
        },
        "correct": "0"
      },
      {
        "id": 20,
        "pergunta": "Quais foram os primeiros bichos astronautas?",
        "alternativas": {
          "0": "Cachorro",
          "1": "Macaco",
          "2": "Mosca",
          "3": "Gato"
        },
        "correct": "2"
      },
      {
        "id": 21,
        "pergunta": "Quantas vezes o coração humano bate por dia?",
        "alternativas": {
          "0": "5 mil",
          "1": "10 mil",
          "2": "50 mil",
          "3": "100 mil"
        },
        "correct": "3"
      },
      {
        "id": 22,
        "pergunta": "Como uma unsina nuclear gera energia?",
        "alternativas": {
          "0": "Água esquenta e move os geradores",
          "1": "Radiação convertida em eletricidade",
          "2": "Explosões atômicas que movimentam os geradores",
          "3": "Radiação canalizadas movimenta os geradores"
        },
        "correct": "0"
      },
      {
        "id": 23,
        "pergunta": "Qual desses países não tem português como língua oficial?",
        "alternativas": {
          "0": "Serra Leõa",
          "1": "Macau",
          "2": "Timor-Leste",
          "3": "Moçambique"
        },
        "correct": "0"
      },
      {
        "id": 24,
        "pergunta": "Qual letra fica entre o X e o V do teclado comum?",
        "alternativas": {
          "0": "D",
          "1": "Y",
          "2": "M",
          "3": "C"
        },
        "correct": "3"
      },
      {
        "id": 25,
        "pergunta": "Por que Flamingos ficam cor-de-rosa?",
        "alternativas": {
          "0": "É sua cor natural",
          "1": "Sol altera a cor das penas",
          "2": "Por comerem algas vermelhas",
          "3": "Eles se esfregam em árvores rosas"
        },
        "correct": "2"
      },
      {
        "id": 26,
        "pergunta": "O que produz o vento?",
        "alternativas": {
          "0": "O movimento das placas tectônicas",
          "1": "Atração gravitacional da Lua",
          "2": "O movimento do oceano",
          "3": "Aquecimento irregular da Terra pelo Sol"
        },
        "correct": "3"
      },
      {
        "id": 27,
        "pergunta": "A primeira Webcam foi inventada na universidade de Cambridge para:",
        "alternativas": {
          "0": "Transmitir aulas para um aluno doente",
          "1": "Gravar uma pegadinha",
          "2": "Servir como sistema de segurança",
          "3": "Monitorar uma cafeteira para saber se tinha café"
        },
        "correct": "3"
      },
      {
        "id": 28,
        "pergunta": "Além de Saturno, qual dos seguintes planetas também tem anéis?",
        "alternativas": {
          "0": "Jupiter",
          "1": "Urano",
          "2": "Netuno",
          "3": "Todos os anteriores"
        },
        "correct": "3"
      },
      {
        "id": 29,
        "pergunta": "Quais os únicos países da América do Sul que nção tem fronteira com o Brasil?",
        "alternativas": {
          "0": "Venezuela e Colombia",
          "1": "Chile e Equador",
          "2": "Peru e Bolívia",
          "3": "Guiana-Francesa e Suriname"
        },
        "correct": "1"
      },
      {
        "id": 30,
        "pergunta": "Como uma unsina nuclear gera energia?",
        "alternativas": {
          "0": "Água esquenta e move os geradores",
          "1": "Radiação convertida em eletricidade",
          "2": "Explosões atômicas que movimentam os geradores",
          "3": "Radiação canalizadas movimenta os geradores"
        },
        "correct": "0"
      },
      {
        "id": 31,
        "pergunta": "Qual desses animais não fica com apenas um parceiro a vida toda?",
        "alternativas": {
          "0": "Cisnes",
          "1": "Urubus",
          "2": "Cupins",
          "3": "Golfinhos"
        },
        "correct": "3"
      },
      {
        "id": 32,
        "pergunta": "Quantas teclas tem um piano?",
        "alternativas": {
          "0": "70",
          "1": "88",
          "2": "105",
          "3": "82"
        },
        "correct": "1"
      },
      {
        "id": 33,
        "pergunta": "Qual dessas pessoas nunca foi indicada ao Prêmio Nobel da Paz?",
        "alternativas": {
          "0": "Mussolini",
          "1": "Hitler",
          "2": "Kim Jon-il",
          "3": "Stalin"
        },
        "correct": "2"
      },
      {
        "id": 34,
        "pergunta": "O que acontece com um peixe dourado se mantido em água corrente ou com pouca luz?",
        "alternativas": {
          "0": "Ele morre",
          "1": "Ele perde a cor",
          "2": "Ele para crescer",
          "3": "Ele fica mais magro"
        },
        "correct": "1"
      },
      {
        "id": 35,
        "pergunta": "Quantas vezes é possível subtrair 10 de 100?",
        "alternativas": {
          "0": "10",
          "1": "5",
          "2": "1",
          "3": "2"
        },
        "correct": "2"
      },
      {
        "id": 36,
        "pergunta": "você tem um isqueiro.Numa cabana com uma vela, uma lamparina e uma lareira, o que você acende primeiro?",
        "alternativas": {
          "0": "A vela",
          "1": "A lamparina",
          "2": "A lareira",
          "3": "Nenhuma das anteriores"
        },
        "correct": "3"
      },
        {
          "id": 37,
          "pergunta": "Qual desses materiais é o melhor condutor de eletricidade?",
          "alternativas": {
            "0": "Prata",
            "1": "Cobre",
            "2": "Ouro",
            "3": "Alumínio"
          },
          "correct": "0"
        },
        {
            "id": 38,
            "pergunta": "Que elemento químico tem o símbolo 'Na'?",
            "alternativas": {
              "0": "Níquel",
              "1": "Sódio",
              "2": "Nióbio",
              "3": "Nitrogênio"
            },
            "correct": "1"
          },          
        {
          "id": 39,
          "pergunta": "Qual é o maior mamífero terrestre?",
          "alternativas": {
            "0": "Elefante africano",
            "1": "Rinoceronte",
            "2": "Hipopótamo",
            "3": "Urso polar"
          },
          "correct": "0"
        },
        {
          "id": 40,
          "pergunta": "Em que ano o homem pisou na Lua pela primeira vez?",
          "alternativas": {
            "0": "1965",
            "1": "1969",
            "2": "1971",
            "3": "1973"
          },
          "correct": "1"
        },
        {
          "id": 41,
          "pergunta": "Qual dos seguintes países é transcontinental?",
          "alternativas": {
            "0": "Turquia",
            "1": "Alemanha",
            "2": "Japão",
            "3": "Índia"
          },
          "correct": "0"
        },
        {
          "id": 42,
          "pergunta": "Quantos dias tem um ano bissexto?",
          "alternativas": {
            "0": "364",
            "1": "365",
            "2": "366",
            "3": "367"
          },
          "correct": "2"
        },
        {
          "id": 43,
          "pergunta": "Qual é o menor planeta do sistema solar?",
          "alternativas": {
            "0": "Plutão",
            "1": "Mercúrio",
            "2": "Vênus",
            "3": "Marte"
          },
          "correct": "1"
        },
        {
            "id": 44,
            "pergunta": "O que significa a sigla USB?",
            "alternativas": {
              "0": "Unidade de Sistema Básico",
              "1": "Unidade Serial Básica",
              "2": "Universal Serial Bus",
              "3": "Universal Sistema Binário"
            },
            "correct": "2"
          },          
        {
          "id": 45,
          "pergunta": "Qual é o metal mais abundante na crosta terrestre?",
          "alternativas": {
            "0": "Ferro",
            "1": "Alumínio",
            "2": "Cobre",
            "3": "Zinco"
          },
          "correct": "1"
        },
        {
          "id": 46,
          "pergunta": "Qual é o símbolo químico do ouro?",
          "alternativas": {
            "0": "Ag",
            "1": "Au",
            "2": "Go",
            "3": "Gu"
          },
          "correct": "1"
        },
        {
          "id": 47,
          "pergunta": "O Tratado de Versalhes encerrou oficialmente qual guerra?",
          "alternativas": {
            "0": "Primeira Guerra Mundial",
            "1": "Guerras Napoleônicas",
            "2": "Guerra dos 100 anos",
            "3": "Segunda Guerra Mundial"
          },
          "correct": "0"
        },
        {
          "id": 48,
          "pergunta": "Em qual continente está localizado o Egito?",
          "alternativas": {
            "0": "Ásia",
            "1": "África",
            "2": "Europa",
            "3": "Oceania"
          },
          "correct": "1"
        },
        {
          "id": 49,
          "pergunta": "Qual dessas não é uma variedade da mesma espécie de planta?",
          "alternativas": {
            "0": "Brócolis",
            "1": "Repolho",
            "2": "Couve",
            "3": "Acelga"
          },
          "correct": "3"
        },
        {
          "id": 50,
          "pergunta": "Qual dessas informações sobre elefantes é verdadeira?",
          "alternativas": {
            "0": "Eles gostam de amendoim",
            "1": "Eles tem medo de ratos",
            "2": "Eles não conseguem pular",
            "3": "Eles não conseguem nadar"
          },
          "correct": "2"
        },
        {
          "id": 51,
          "pergunta": "Qual é a capital da Austrália?",
          "alternativas": {
            "0": "Sydney",
            "1": "Melbourne",
            "2": "Canberra",
            "3": "Brisbane"
          },
          "correct": "2"
        },
        {
          "id": 52,
          "pergunta": "Qual é o menor osso do corpo humano?",
          "alternativas": {
            "0": "Estirpe",
            "1": "Estribo",
            "2": "Tímpano",
            "3": "Cócxis"
          },
          "correct": "1"
        },
        {
          "id": 53,
          "pergunta": "O que mede a escala Richter?",
          "alternativas": {
            "0": "Velocidade do som",
            "1": "Intensidade de terremotos",
            "2": "Força do vento",
            "3": "Profundidade do mar"
          },
          "correct": "1"
        },
        {
          "id": 54,
          "pergunta": "Qual é o maior oceano do mundo?",
          "alternativas": {
            "0": "Atlântico",
            "1": "Pacífico",
            "2": "Índico",
            "3": "Ártico"
          },
          "correct": "1"
        },
        {
          "id": 55,
          "pergunta": "Do que é feito o vinho branco?",
          "alternativas": {
            "0": "Qualquer uva sem casca",
            "1": "Qualquer uva, com clareamento",
            "2": "Qualquer uva, com fermentação diferente",
            "3": "Apenas com uvas brancas"
          },
          "correct": "0"
        },
        {
          "id": 56,
          "pergunta": "A primeira vacina imunizaou contra qual doença?",
          "alternativas": {
            "0": "Varíola",
            "1": "Varicéla",
            "2": "Sarampo",
            "3": "Raiva"
          },
          "correct": "0"
        },
            {
              "id": 57,
              "pergunta": "Qual é o nome da capital da Austrália?",
              "alternativas": {
                "0": "Sydney",
                "1": "Melbourne",
                "2": "Canberra",
                "3": "Brisbane"
              },
              "correct": "2"
            },
            {
              "id": 58,
              "pergunta": "Qual elemento químico tem o símbolo 'Na'?",
              "alternativas": {
                "0": "Sódio",
                "1": "Nitrogênio",
                "2": "Níquel",
                "3": "Nióbio"
              },
              "correct": "0"
            },
            {
              "id": 59,
              "pergunta": "Quem pintou a obra 'A Noite Estrelada'?",
              "alternativas": {
                "0": "Claude Monet",
                "1": "Vincent van Gogh",
                "2": "Pablo Picasso",
                "3": "Leonardo da Vinci"
              },
              "correct": "1"
            },
            {
                "id": 60,
                "pergunta": "Qual foi o primeiro animal clonado com sucesso?",
                "alternativas": {
                  "0": "Cavalo",
                  "1": "Cachorro",
                  "2": "Ovelha",
                  "3": "Gato"
                },
                "correct": "2"
              },
              {
                "id": 61,
                "pergunta": "Quantos lados tem um pentágono?",
                "alternativas": {
                  "0": "4",
                  "1": "5",
                  "2": "6",
                  "3": "7"
                },
                "correct": "1"
              },
            {
              "id": 62,
              "pergunta": "Qual é o maior oceano do mundo?",
              "alternativas": {
                "0": "Oceano Atlântico",
                "1": "Oceano Pacífico",
                "2": "Oceano Índico",
                "3": "Oceano Ártico"
              },
              "correct": "1"
            },
            {
              "id": 63,
              "pergunta": "Qual desses personagens de desenho não é um cachorro?",
              "alternativas": {
                "0": "Bilu",
                "1": "Lúcifer",
                "2": "Costelinha",
                "3": "Milu"
              },
              "correct": "1"
            },
            {
              "id": 64,
              "pergunta": "Qual empresa criou a primeira câmera fotográfica digital?",
              "alternativas": {
                "0": "Kodac",
                "1": "Canon",
                "2": "Samsung",
                "3": "Sony"
              },
              "correct": "2"
            },
            {
              "id": 65,
              "pergunta": "Como são nomeadas as ruas no Japão?",
              "alternativas": {
                "0": "Números",
                "1": "Nomes de pessoas",
                "2": "Não tem nome",
                "3": "Nomes de antigos imperadores"
              },
              "correct": "2"
            },
            {
              "id": 66,
              "pergunta": "Qual é o nome do Pai da Psicanálise?",
              "alternativas": {
                "0": "Karl Marx",
                "1": "Albert Einstein",
                "2": "Freud",
                "3": "Nikola Tesla"
              },
              "correct": "2"
            },
            {
              "id": 67,
              "pergunta": "Qual é o rio mais longo do mundo?",
              "alternativas": {
                "0": "Rio Nilo",
                "1": "Rio Amazonas",
                "2": "Rio Yangtzé",
                "3": "Rio Mississipi"
              },
              "correct": "1"
            },
            {
              "id": 68,
              "pergunta": "Durante o verão, a Torre Eifel fica:",
              "alternativas": {
                "0": "Mais alta",
                "1": "Mais baixa",
                "2": "Não muda",
                "3": "Esquenta e solta fumaça"
              },
              "correct": "0"
            },
            {
              "id": 69,
              "pergunta": "Qual país é conhecido como 'Terra do Sol Nascente'?",
              "alternativas": {
                "0": "China",
                "1": "Japão",
                "2": "Coreia do Sul",
                "3": "Tailândia"
              },
              "correct": "1"
            },
            {
              "id": 70,
              "pergunta": "Qual é a fórmula química do dióxido de carbono?",
              "alternativas": {
                "0": "CO2",
                "1": "H2O",
                "2": "O2",
                "3": "CH4"
              },
              "correct": "0"
            },
            {
              "id": 71,
              "pergunta": "Qual é o menor país do mundo em área?",
              "alternativas": {
                "0": "Mônaco",
                "1": "Malta",
                "2": "Vaticano",
                "3": "Liechtenstein"
              },
              "correct": "2"
            },
            {
              "id": 72,
              "pergunta": "Onde foi instalado o primeiro elevador de pessoas?",
              "alternativas": {
                "0": "Tóquio",
                "1": "Londres",
                "2": "Nova Iorque",
                "3": "Barcelona"
              },
              "correct": "2"
            },
            {
              "id": 73,
              "pergunta": "Quem é conhecido como o 'Pai da Computação'?",
              "alternativas": {
                "0": "Alan Turing",
                "1": "Charles Babbage",
                "2": "Steve Jobs",
                "3": "Bill Gates"
              },
              "correct": "1"
            },
            {
              "id": 74,
              "pergunta": "Qual é o órgão mais pesado do corpo humano?",
              "alternativas": {
                "0": "Pulmão",
                "1": "Fígado",
                "2": "Coração",
                "3": "Cérebro"
              },
              "correct": "1"
            },
            {
              "id": 75,
              "pergunta": "Em que dedo da mão a unha cresce mais rápido?",
              "alternativas": {
                "0": "Dedo do meio",
                "1": "Indicador",
                "2": "Todas ao mesmo tempo",
                "3": "Dedinho"
              },
              "correct": "0"
            },
            {
              "id": 76,
              "pergunta": "Qual é o nome do super-herói cuja identidade secreta é Bruce Wayne?",
              "alternativas": {
                "0": "Homem de Ferro",
                "1": "Batman",
                "2": "Homem-Aranha",
                "3": "Superman"
              },
              "correct": "1"
            },
            {
              "id": 77,
              "pergunta": "Qual país venceu a Copa do Mundo de Futebol Masculino em 2018?",
              "alternativas": {
                "0": "Brasil",
                "1": "Croácia",
                "2": "França",
                "3": "Alemanha"
              },
              "correct": "2"
            },
            {
              "id": 78,
              "pergunta": "Quem é o autor da série de livros 'Harry Potter'?",
              "alternativas": {
                "0": "George R.R. Martin",
                "1": "J.K. Rowling",
                "2": "Tolkien",
                "3": "Suzanne Collins"
              },
              "correct": "1"
            },
            {
              "id": 79,
              "pergunta": "Qual é o esporte praticado por Serena Williams?",
              "alternativas": {
                "0": "Basquete",
                "1": "Tênis",
                "2": "Ginástica",
                "3": "Natação"
              },
              "correct": "1"
            },
            {
              "id": 80,
              "pergunta": "Qual é o planeta mais quente do Sistema Solar?",
              "alternativas": {
                "0": "Vênus",
                "1": "Mercúrio",
                "2": "Marte",
                "3": "Terra"
              },
              "correct": "0"
            },
            {
              "id": 81,
              "pergunta": "O que o Homem de Lata quer pedir ao Mágico de Oz?",
              "alternativas": {
                "0": "Cérebro",
                "1": "Coração",
                "2": "Coragem",
                "3": "Força"
              },
              "correct": "1"
            },
            {
              "id": 82,
              "pergunta": "Quantos jogadores há em uma equipe de voleibol em quadra?",
              "alternativas": {
                "0": "5",
                "1": "6",
                "2": "7",
                "3": "8"
              },
              "correct": "1"
            },
            {
              "id": 83,
              "pergunta": "Quantos olhos tem uma abelha?",
              "alternativas": {
                "0": "2",
                "1": "5",
                "2": "4",
                "3": "3"
              },
              "correct": "1"
            },
            {
              "id": 84,
              "pergunta": "Qual foi a primeira rede social a atingir 1 bilhão de usuários?",
              "alternativas": {
                "0": "Twitter",
                "1": "Facebook",
                "2": "Instagram",
                "3": "TikTok"
              },
              "correct": "1"
            },
            {
              "id": 85,
              "pergunta": "Qual é a cor das estrelas da bandeira da China?",
              "alternativas": {
                "0": "Vermelho",
                "1": "Branco",
                "2": "Preto",
                "3": "Amarelo"
              },
              "correct": "3"
            },
            {
              "id": 86,
              "pergunta": "Qual é o esporte nacional do Japão?",
              "alternativas": {
                "0": "Judô",
                "1": "Sumô",
                "2": "Karatê",
                "3": "Baseball"
              },
              "correct": "1"
            },
            {
              "id": 87,
              "pergunta": "Qual artista lançou o álbum 'Thriller' em 1982?",
              "alternativas": {
                "0": "Prince",
                "1": "Michael Jackson",
                "2": "Madonna",
                "3": "Elvis Presley"
              },
              "correct": "1"
            },
            {
              "id": 88,
              "pergunta": "Qual desses países não faz parte do Reino Unido?",
              "alternativas": {
                "0": "Escócia",
                "1": "Irlanda",
                "2": "Inglaterra",
                "3": "País de Gales"
              },
              "correct": "1"
            },
            {
              "id": 89,
              "pergunta": "Qual é a unidade básica de vida?",
              "alternativas": {
                "0": "Célula",
                "1": "Tecido",
                "2": "Átomo",
                "3": "Órgão"
              },
              "correct": "0"
            },
            {
              "id": 90,
              "pergunta": "Quem escreveu 'Romeu e Julieta'?",
              "alternativas": {
                "0": "William Shakespeare",
                "1": "Charles Dickens",
                "2": "Victor Hugo",
                "3": "Mark Twain"
              },
              "correct": "0"
            },
            {
              "id": 91,
              "pergunta": "O que é mais quente?",
              "alternativas": {
                "0": "Um raio",
                "1": "Lava de vulcão",
                "2": "A superficie do Sol",
                "3": "O núcleo da Terra"
              },
              "correct": "0"
            },
            {
              "id": 92,
              "pergunta": "Qual desses não é um osso humano?",
              "alternativas": {
                "0": "Fíbula",
                "1": "Timeo",
                "2": "Martelo",
                "3": "Ísquio"
              },
              "correct": "1"
            },
            {
              "id": 93,
              "pergunta": "Qual é o número atômico do carbono?",
              "alternativas": {
                "0": "6",
                "1": "12",
                "2": "8",
                "3": "9"
              },
              "correct": "1"
            },
            {
              "id": 94,
              "pergunta": "Qual continente é conhecido como berço da humanidade?",
              "alternativas": {
                "0": "África",
                "1": "Ásia",
                "2": "Europa",
                "3": "América"
              },
              "correct": "0"
            },
            {
              "id": 95,
              "pergunta": "O que foi inventado por último",
              "alternativas": {
                "0": "Laser",
                "1": "Satélite artificial",
                "2": "Calculadora de bolso",
                "3": "Transistor"
              },
              "correct": "2"
            },
            {
              "id": 96,
              "pergunta": "Quem é conhecido como o 'Pai da Física Moderna'?",
              "alternativas": {
                "0": "Isaac Newton",
                "1": "Albert Einstein",
                "2": "Galileu Galilei",
                "3": "Max Planck"
              },
              "correct": "1"
            },
            {
              "id": 97,
              "pergunta": "Qual desses é o parente mais próximo do T-Rex",
              "alternativas": {
                "0": "Jacaré",
                "1": "Dragão de comodo",
                "2": "Galinha",
                "3": "Canguru"
              },
              "correct": "2"
            },
            {
              "id": 98,
              "pergunta": "Qual foi o primeiro homem a pisar na Lua?",
              "alternativas": {
                "0": "Neil Armstrong",
                "1": "Buzz Aldrin",
                "2": "Yuri Gagarin",
                "3": "Michael Collins"
              },
              "correct": "0"
            }
      ];
    
        let start = document.querySelector("#iniciar"); 
        start.addEventListener('click', ()=>{
            defineQuestion();
            start.classList.add('off-element');
            titulo.classList.add('off-element');
            whiteboard.classList.toggle('off-element');

            let newQuestion = document.querySelector("#new-question");
            newQuestion.addEventListener('click', ()=>{
                defineQuestion();
                if (dataList.classList.contains("resposta")) {
                    dataList.classList.remove('resposta');
                }
            })

            
        }) 
        
        function defineQuestion() {
            randomNumber = Math.floor(Math.random() * 98);
            if (numberOfQuestions.includes(randomNumber)) {
                data.forEach(item => {
                    if (item.id == randomNumber) {
                        question(item);
                        
                        let removeindex = numberOfQuestions.indexOf(randomNumber);
                        
                        numberOfQuestions.splice(removeindex, 1);
                        
                    }
                })  
            }else{
                defineQuestion();
            }

        }
        function question(item) {
            // Adiciona os dados à página
            // question
            const pergunta = document.querySelector('#quest');
            pergunta.textContent = `${item.pergunta}`;
            // alternatives
            const alternativas = item.alternativas;
            dataList.innerHTML = ``;
            for (let index = 0; index < 4; index++) {
                const resposta = alternativas[index];
                var letra = "";
                switch (index) {
                    case 0:
                        letra = "A";
                        break;
                    case 1:
                        letra = "B";
                        break;
                    case 2:
                        letra = "C";
                        break;
                    case 3:
                        letra = "D";
                        break;
                }
                dataList.innerHTML += `<li class="answer"><span class="span">${letra}</span>${resposta}</li>`;
            }

            // Atualização do evento `click` para exibir a resposta correta
            let ansBtn = document.querySelector('#show-answer');
            ansBtn.addEventListener('click', () => {
                var correctIndex = parseInt(item.correct); // Obtém o índice correto do JSON
                var correctAnswer = alternativas[correctIndex]; // Resposta correta
                var correctLetter = ""; // Identifica a letra correspondente
                switch (correctIndex) {
                    case 0:
                        correctLetter = "A";
                        break;
                    case 1:
                        correctLetter = "B";
                        break;
                    case 2:
                        correctLetter = "C";
                        break;
                    case 3:
                        correctLetter = "D";
                        break;
                }
                dataList.classList.add('resposta');
                dataList.innerHTML = `<div class="correct-answer"><span class="span">${correctLetter}</span><p>${correctAnswer}</p></div>`;
            });
            }
