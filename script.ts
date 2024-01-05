(function () {
  const $ = (query: string): HTMLInputElement | null =>
    document.querySelector(query);
  function parking() {
    function read() {}
    function create() {}
    function remove() {}
    function save() {}
    function render() {}

    return { read, create, remove, save, render };
  }

  $("#cadastrar")?.addEventListener("click", () => {
    const marca = $("#marcaCarro")?.value;
    const placa = $("#placaCarro")?.value;

    if (!marca || !placa) {
      alert("Preencha os campos obrigatórios");
      return;
    }
  });
})();
