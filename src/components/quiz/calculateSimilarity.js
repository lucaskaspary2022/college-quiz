import universityData from './universities.json'; // Importe os dados da universidade conforme necessário
import { dot } from 'mathjs'

// Função para calcular o produto escalar entre dois vetores
function dotProduct(vecA, vecB) {
    return Object.keys(vecA).reduce((sum, key) => sum + (vecA[key] || 0) * (vecB[key] || 0), 0);
}
// function dotProduct(vecA, vecB) {
//     return Object.keys(vecA).reduce((sum, key) => {
//       const strKey = String(key);
//       return sum + (vecA[strKey] || 0) * (vecB[strKey] || 0);
//     }, 0);
//   }

// Função para calcular a magnitude de um vetor
function magnitude(vec) {
    return Math.sqrt(Object.keys(vec).reduce((sum, key) => sum + Math.pow(vec[key], 2), 0));
}

// Função para calcular a similaridade de cosseno
function cosineSimilarity(vecA, vecB) {
    console.log("cosine: ", vecA, "mag:", magnitude(vecA))
    console.log("cosine: ", vecB, "mag:", magnitude(vecB))
    console.log("Dot: ", dotProduct(vecA, vecB))
    // return dotProduct(vecA, vecB) / (magnitude(vecA) * magnitude(vecB));
    const a1 =  Object.values(vecA);
    const a2 = Object.values(vecB);
    console.log("Arrays:", a1, a2)
    return dot(a1, a2) / (magnitude(vecA) * magnitude(vecB));
}

// Função para comparar as preferências do aluno com todas as universidades
function compareWithUniversities(studentPreferences, universityVectors) {
    const similarityScores = {};

    console.log("Student vectors: ", studentPreferences)
    console.log("University vectors: ", universityVectors)

    for (const university in universityVectors) {
        // console.log("Vec: ", universityVectors[university])
        similarityScores[university] = cosineSimilarity(studentPreferences, universityVectors[university]);
    }

    return similarityScores;
}

// Função para classificar universidades em categorias com base na similaridade e taxa de admissão
function classifyUniversities(similarityScores, numSafety, numMatch, numDream) {    // Converter a taxa de admissão em seletividade
    const selectivity = universityName => {
        const uni = universityData.find(u => u.name === universityName);
        return uni ? uni.admission_rate : 1; // Taxa de admissão padrão se não encontrada
    };

    // Ordenar universidades por similaridade
    const sortedUniversities = Object.entries(similarityScores)
        .sort((a, b) => b[1] - a[1]) // Ordenar por pontuação de similaridade
        .map(([name, _]) => name);

    // Classificar universidades
    const safety = {}, match = {}, dream = {};
    sortedUniversities.forEach(name => {
        const admissionRate = selectivity(name);

        if (admissionRate > 0.70 && Object.keys(safety).length < numSafety) {
            safety[name] = similarityScores[name];
        } else if (admissionRate <= 0.70 && admissionRate > 0.30 && Object.keys(match).length < numMatch) {
            match[name] = similarityScores[name];
        } else if (admissionRate <= 0.30 && Object.keys(dream).length < numDream) {
            dream[name] = similarityScores[name];
        }
    });

    return { safety, match, dream };
}

export { compareWithUniversities, classifyUniversities };
