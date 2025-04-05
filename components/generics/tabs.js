function showTabs(abas) {
    console.log("abas", abas);
    const tabsContent = `
    <div id="conteudo" class="container my-4">
      <ul class="nav nav-tabs" id="tabs-nav">
        ${abas
            .map(
                (aba, index) => `
            <li class="nav-item">
              <button 
                class="nav-link ${index === 0 ? "active" : ""}" 
                data-id="${aba.id}" 
                onclick="trocarAbaDinamica(event, '${aba.id}', '${
                    aba.callback
                }')"
              >
                ${aba.label}
              </button>
            </li>
          `
            )
            .join("")}
      </ul>
      <div id="area-troca" class="mt-4"></div>
    </div>
  `;

    document.getElementById("global-tabs").innerHTML = tabsContent;
    trocarAbaDinamica(null, abas[0].id, abas[0].callback);
}

function trocarAbaDinamica(event, abaId, callbackName) {
    document
        .querySelectorAll(".nav-link")
        .forEach((aba) => aba.classList.remove("active"));
    if (event) event.target.classList.add("active");
    else {
        const btn = document.querySelector(`button[data-id="${abaId}"]`);
        if (btn) btn.classList.add("active");
    }

    if (typeof window[callbackName] === "function") {
        window[callbackName]();
    } else {
        document.getElementById(
            "area-troca"
        ).innerHTML = `<p class="text-danger">Função "${callbackName}" não encontrada.</p>`;
    }
}
