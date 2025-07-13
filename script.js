const imagens = [
        { src: "./Projetos/proximity.png", texto: "Proximity, O aplicativo de comunicação da vizinhança! Compartilhamento de itens, alertas de segurança e eventos locais, tudo em tempo real!" },
        { src: "./Projetos/jogo.png", texto: "Void Arena, apenas os fortes sobrevivem ao vazio! Escolhe entre classes e entre em um PvP 4x4, vence a equipe que eliminar todos os adversários." },
        { src: "./Projetos/robótica.jpeg", texto: "Projeto de robótica com ESP32, desenvolvimento de um web server para o controle manual, automático da máquina e insights." }
    ];

    let indexAtual = 0;

    const imgElement = document.getElementById("carrossel-img");
    const textoElement = document.getElementById("carrossel-texto");

    document.querySelector(".btn-prev").addEventListener("click", () => {
        indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
        atualizarCarrossel();
    });

    document.querySelector(".btn-next").addEventListener("click", () => {
        indexAtual = (indexAtual + 1) % imagens.length;
        atualizarCarrossel();
    });

    function atualizarCarrossel() {
        imgElement.src = imagens[indexAtual].src;
        textoElement.textContent = imagens[indexAtual].texto;
    }

    function toggleSobreMim() {
    const popup = document.getElementById("sobre-mim-popup");

    // Alterna a visibilidade com classe "visivel"
    const estaVisivel = popup.classList.contains("visivel");

    if (estaVisivel) {
        popup.classList.remove("visivel");
        document.removeEventListener("click", fecharSeClicarFora);
    } else {
        popup.classList.add("visivel");
        document.addEventListener("click", fecharSeClicarFora);
    }

    function fecharSeClicarFora(event) {
        const isClickInside = popup.contains(event.target) || event.target.innerText === "Sobre mim";

        if (!isClickInside) {
        popup.classList.remove("visivel");
        document.removeEventListener("click", fecharSeClicarFora);
        }
    }
    }