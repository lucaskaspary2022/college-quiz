import universityData from './universities.json'; // Ajuste o caminho do arquivo JSON

// Função para converter o clima
function convertClimaToVector(clima) {
    if (clima === "quente") return 1;
    if (clima === "ameno") return 2;
    if (clima === "frio") return 3;
    return 0; // Caso não especificado
}

function categorizeCOA(out_of_state) {
    if (out_of_state + 12000 <= 23000) return 1;
    if (out_of_state + 12000 <= 34000) return 2;
    return 3;
}

// Função para categorizar o COA (Custo de Frequência)
// function categorizeCOA(coa) {
//     if (coa <= 18000) return 1;
//     if (coa <= 30000) return 2;
//     return 3;
// }

// Função para categorizar o Desempenho Acadêmico (baseado em SAT)
function categorizeAcademicPerformance(satScore) {
    if (satScore >= 1400) return 1; // Alto
    if (satScore >= 1200) return 2; // Médio
    return 3; // Baixo
}

// Função para categorizar o Ambiente Acadêmico (baseado na Taxa de Admissão)
function categorizeAcademicEnvironment(admissionRate) {
    if (admissionRate < 0.30) return 1; // Muito Competitivo
    if (admissionRate <= 0.70) return 2; // Moderadamente Competitivo
    return 3; // Menos Competitivo
}

// Função para calcular o tamanho da universidade
function calculateSizeVector(size) {
    if (size < 5000) return 1; // Pequena
    if (size <= 15000) return 2; // Média
    return 3; // Grande
}

// Função para converter a região
function convertRegionToVector(region) {
    const regions = {
        "Northeast": 1,
        "South": 2,
        "Southwest": 3,
        "Midwest": 4,
        "West": 5
    };
    return regions[region] || 0; // Retorna 0 se a região não estiver mapeada
}

// Função principal para calcular os vetores de cada universidade
// function calculateUniversityVectors() {
//     const vectors = {};
//     universityData.forEach(university => {
//         vectors[university.name] = {
//             clima: convertClimaToVector(university.clima),
//             coa: categorizeCOA(university.coa),
//             academic_performance: categorizeAcademicPerformance(university.sat_average),
//             academic_environment: categorizeAcademicEnvironment(university.admission_rate),
//             size: calculateSizeVector(university.size),
//             region: convertRegionToVector(university.region)
//         };
//     });
//     return vectors;
// }
function calculateUniversityVectors() {
    const vectors = {};
    universityData.forEach(university => {
        vectors[university.name] = {
            clima: convertClimaToVector(university.clima),
            coa: categorizeCOA(university.out_of_state),
            academic_performance: categorizeAcademicPerformance(university.sat_average),
            academic_environment: categorizeAcademicEnvironment(university.admission_rate),
            size: calculateSizeVector(university.size),
            region: convertRegionToVector(university.region)
        };
    });
    return vectors;
}

export default calculateUniversityVectors;
