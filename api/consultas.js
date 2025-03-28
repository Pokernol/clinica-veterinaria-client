// This file handles scheduling appointments and managing diagnoses for the veterinary clinic management application.

const consultas = [];

// Function to schedule a new appointment
function agendarConsulta(data) {
    const novaConsulta = {
        id: consultas.length + 1,
        petId: data.petId,
        usuarioId: data.usuarioId,
        dataHora: data.dataHora,
        diagnostico: data.diagnostico,
        status: 'agendada'
    };
    consultas.push(novaConsulta);
    return novaConsulta;
}

// Function to listar todas as consultas
function listarConsultas() {
    return consultas;
}

// Function to cancelar uma consulta
function cancelarConsulta(id) {
    const consultaIndex = consultas.findIndex(consulta => consulta.id === id);
    if (consultaIndex !== -1) {
        consultas[consultaIndex].status = 'cancelada';
        return consultas[consultaIndex];
    }
    return null;
}

// Function to atualizar o diagnóstico de uma consulta
function atualizarDiagnostico(id, novoDiagnostico) {
    const consulta = consultas.find(consulta => consulta.id === id);
    if (consulta) {
        consulta.diagnostico = novoDiagnostico;
        return consulta;
    }
    return null;
}

// Exportando as funções para uso em outros módulos
module.exports = {
    agendarConsulta,
    listarConsultas,
    cancelarConsulta,
    atualizarDiagnostico
};