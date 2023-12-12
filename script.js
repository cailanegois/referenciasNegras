function carregaDicio() {

    let biografia = {
        bio01: {
            nome: "Conceição Evaristo",
            img: "img/conceicao-evaristo.png",
            desc: "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professor da rede pública de ensino da capital fluminense.É Mestre em Literatura Brasileira pela PUC do Rio    de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro- brasilidade(1996), e  Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos(2011), na qual estuda as obras poéticas dos afro- brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto",
            citacao: "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?",

        },
        bio02: {
            nome: "Barbara Carine",
            img: "img/barbara-carine.jpg",
            desc: "Bárbara Carine Soares Pinheiro nasceu em 1987 na periferia de Salvador, bisneta de Vicença, neta  de Djanira Soares e filha de Teresinha Soares de Jesus. Bárbara conta que cresceu livre pelas ruas  do seu bairro e que ainda se recorda muito bem do cheiro de barro vermelho, que sentia após o  cair da chuva. Graduou-se em 2010 pela Universidade Federal da Bahia (UFBA), mestra em 2012 e doutora em 2014. Professora do Instituto de Química na UFBA. Hoje, Bárbara se define como: pesquisadora crítico-decolonial, feminista antirracista, nordestina, pagodeira, bissexual, mulher cis negra, mãe, mas, também, não se define: abre-se num movimento constante de construir-se ou, talvez, de ser construída.",
            citacao: "Por isso a representatividade é tão importante: onde a gente não se vê, a gente não se pensa, não se projeta.",

        },
        bio03: {
            nome: "Marielle Franco",
            img: "img/marielle-franco.png",
            desc: " Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros",
            citacao: "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?",

        },
        bio04: {
            nome: "Lélia Gonzalez",
            img: "img/lelia-gonzalez.png",
            desc: "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira.Ajudou a fundar  instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",
            citacao: "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora.",

        },
        bio05: {
            nome: "Carolina de Jesus",
            img: "img/carolina-de-jesus.png",
            desc: "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário  publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.",
            citacao: "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é.",

        },
        bio06: {
            nome: "Sueli Carneiro",
            img: "img/sueli-carneiro-.jpg",
            desc: "Aparecida Sueli Carneiro (São Paulo, 24 de junho de 1950) é uma filósofa, escritora e ativista antirracismo do movimento social negro brasileiro. Sueli Carneiro é fundadora e atual diretora do Geledés — Instituto da Mulher Negra e considerada uma das principais autoras do feminismo negro no Brasil. Possui doutorado em filosofia pela Universidade de São Paulo (USP). Ela foi a primeira mulher negra a receber o título de doutora honoris causa da Universidade de Brasília.",

            citacao: "Somos seres humanos como os demais, com diversas visões políticas e ideológicas. Eu, por exemplo, entre esquerda e direita, continuo sendo preta.",

        },

    }

    //console.log(biografia)
    //estruturea condicional co 'in' para trabalhar com objeto - percorre todo o array 

    const content = document.querySelector('#content')


    for (let bio in biografia) {

        content.innerHTML += 
        '<div class="card">' + '<img src="' 
        + biografia[bio].img + '"/>' + 
        '<details> <summary>' + biografia[bio].nome + 
        '</summary> <p>"' + biografia[bio].desc +
        "</p> <blockquote> <q>" + biografia[bio].citacao +
        "</q></blockquote>" + "</details></div>";
    }
}


//chamar a função é essencial qnd ela n é executada por evento
carregaDicio();

//objetos - agrupamento por categorização




