# Resumo Técnico: CSS, Flexbox, Grid e Responsividade

Este documento compila os conceitos fundamentais extraídos das apostilas fornecidas, focando na sintaxe técnica e no comportamento padrão das ferramentas.

---

## 1. Fundamentos do CSS (CSS Geral)
[cite_start]O CSS (Cascading Style Sheets) estiliza elementos HTML, controlando layout, cores e tipografia[cite: 1148, 1150].

### Métodos de Inserção
* **Externo (`<link>`):** Melhor prática. [cite_start]Mantém o código limpo, organizado e permite cache[cite: 1162, 1187].
* [cite_start]**Interno (`<style>`):** Útil apenas para páginas únicas[cite: 1190, 1192].
* [cite_start]**Inline (`style="..."`):** Deve ser evitado, pois dificulta a manutenção e tem especificidade muito alta[cite: 1218, 1238].

### Box Model (Modelo de Caixa)
[cite_start]Todo elemento é uma caixa retangular composta por 4 camadas[cite: 1339]:
1.  [cite_start]**Content:** O conteúdo real (texto/imagem)[cite: 1341].
2.  [cite_start]**Padding:** Espaço interno entre o conteúdo e a borda[cite: 1342].
3.  [cite_start]**Border:** A borda que envolve o padding[cite: 1343].
4.  [cite_start]**Margin:** Espaço externo que afasta outros elementos[cite: 1344].

> **Dica Técnica:** Utilize sempre `box-sizing: border-box;`. [cite_start]Isso faz com que o `width` definido inclua o padding e a borda, facilitando o cálculo do tamanho total[cite: 1361, 1369].

### Unidades de Medida
* [cite_start]**Absolutas:** `px` (fixo, pixels de tela)[cite: 1332].
* **Relativas:**
    * [cite_start]`%`: Relativo ao elemento pai[cite: 1335].
    * [cite_start]`rem`: Relativo à fonte do elemento raiz (`html`) — ideal para acessibilidade[cite: 1336].
    * [cite_start]`vh` / `vw`: Relativo à altura/largura da viewport (janela do navegador)[cite: 1336].

---

## 2. Flexbox (Layout Unidimensional)
[cite_start]Ferramenta para organizar elementos em **uma direção** (linha ou coluna)[cite: 630, 638].

### Container (Elemento Pai)
[cite_start]Ativação: `display: flex;`[cite: 659].

* **`flex-direction`:** Define o eixo principal.
    * [cite_start]`row` (padrão): Horizontal[cite: 700].
    * [cite_start]`column`: Vertical[cite: 703].
* **`flex-wrap`:** Controla a quebra de linha.
    * [cite_start]`nowrap` (padrão): Não quebra, espreme os itens[cite: 742].
    * [cite_start]`wrap`: Quebra para a próxima linha se faltar espaço[cite: 745].
* **`justify-content`:** Alinha no **eixo principal** (horizontal por padrão).
    * [cite_start]`flex-start`, `flex-end`, `center`[cite: 775].
    * [cite_start]`space-between`: Espaço igual entre os itens (extremidades grudadas)[cite: 775].
    * [cite_start]`space-around`: Espaço ao redor dos itens[cite: 775].
* **`align-items`:** Alinha no **eixo transversal** (vertical por padrão).
    * [cite_start]`stretch` (padrão): Estica para ocupar a altura[cite: 818].
    * [cite_start]`center`: Centraliza verticalmente[cite: 826].
* [cite_start]**`gap`:** Cria espaçamento ("canaleta") entre os itens[cite: 905].

### Itens (Elementos Filhos)
* [cite_start]**`flex-grow`:** Define se o item pode crescer para ocupar espaço vazio[cite: 930].
* [cite_start]**`flex-shrink`:** Define se o item pode encolher se faltar espaço[cite: 953].
* [cite_start]**`flex-basis`:** Define o tamanho inicial antes de crescer ou encolher[cite: 972].
* [cite_start]**`order`:** Altera a ordem visual sem mudar o HTML[cite: 1025].

---

## 3. CSS Grid (Layout Bidimensional)
[cite_start]Ferramenta para organizar elementos em **duas direções** (linhas E colunas) simultaneamente[cite: 13, 29].

### Estrutura da Grade
[cite_start]Ativação: `display: grid;`[cite: 37].

* **Colunas e Linhas:**
    * [cite_start]`grid-template-columns`: Define largura e quantidade de colunas[cite: 80].
    * [cite_start]`grid-template-rows`: Define altura e quantidade de linhas[cite: 112].
* **Unidade `fr`:** Fração do espaço disponível. [cite_start]Ex: `1fr 2fr` (a segunda coluna é o dobro da primeira)[cite: 47, 51].
* **Função `repeat()`:** Simplifica a repetição. [cite_start]Ex: `repeat(3, 1fr)` cria 3 colunas iguais[cite: 100].

### Áreas e Posicionamento
* [cite_start]**`grid-template-areas`:** Permite "desenhar" o layout nomeando áreas no container (ex: "header header" "sidebar content")[cite: 131, 134].
* **`grid-column` / `grid-row`:** Permite que um item ocupe múltiplas células usando `span`. [cite_start]Ex: `span 2` ocupa duas colunas[cite: 316, 318].

### Alinhamento
* [cite_start]**`justify-items`:** Alinhamento horizontal dentro da célula (`start`, `center`, `end`, `stretch`)[cite: 195].
* [cite_start]**`align-items`:** Alinhamento vertical dentro da célula[cite: 230].

> **Grid Responsivo Automático:**
> `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));`
> [cite_start]Cria colunas automaticamente que se ajustam e quebram linha sem precisar de Media Queries[cite: 343, 348].

---

## 4. Responsividade
[cite_start]Capacidade do site se adaptar a qualquer tamanho de tela (celular, tablet, desktop)[cite: 423].

### A Tag Viewport
Essencial para mobile. [cite_start]Impede que o celular dê "zoom out" simulando um desktop[cite: 435].
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">