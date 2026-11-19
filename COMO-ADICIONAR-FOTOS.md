# Como adicionar fotos ao carrossel dos produtos

As fotos dos produtos são configuradas em `src/data/products.ts`.

## Produto com uma única foto
Não é necessário preencher o campo `images`. O site usa automaticamente os campos `image` e `alt` já existentes e não mostra setas ou indicadores do carrossel.

## Produto com várias fotos
Adicione `images` ao objeto do produto. Coloque os arquivos na pasta `public/products/` e use caminhos começando por `/products/`.

```ts
images: [
  { src: "/products/muuv-emax-frente.jpg", alt: "MUUV EMAX PIX — vista frontal" },
  { src: "/products/muuv-emax-tras.jpg", alt: "MUUV EMAX PIX — vista traseira" },
  { src: "/products/muuv-emax-vermelha.jpg", alt: "MUUV EMAX PIX na cor vermelha", color: "Vermelha" },
],
```

- A ordem da lista é a ordem das fotos no carrossel.
- `color` é opcional e mostra uma etiqueta para identificar a cor daquela foto.
- O carrossel mostra setas, indicadores de posição e contador somente quando houver mais de uma foto.
- No celular, o visitante pode deslizar para a esquerda/direita.
- Clicar na foto permite ampliá-la.
