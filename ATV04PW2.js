//lista para o nome dos livros
const livros = ['Assassin s Creed', 'Chamado de Cthullhu', 'Os gatos de Ulthar'];

//mapa para armazenar os autores.
const autores = new Map
([
['Assassin s Creed', 'Oliver Bowden'],
['Chamado de Cthullhu', 'H.P.Lovecraft'],
[]
]);

//mapa para armazenar generos
const genero = new Set();

//Adicionar
function adicionarLivro(titulo, autor, genero)
{
    if(!livros.includes(titulo)) //usado para evitar duplicatas
    {
        livros.push(titulo);
        autores.set(titulo, autor);
        generos.add(genero);

        console.log(`O livro "${titulo}" foi adicionado.`);
    }
        else
        {
            console.log(`O livro "${titulo}" já existe na biblioteca.`);
        }
    
}