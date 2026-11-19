# Como cadastrar manuais de produtos

1. Coloque o PDF do manual em `public/manuals/`, por exemplo `public/manuals/muuv-emax-pix.pdf`.
2. No objeto do produto correspondente em `src/data/products.ts`, adicione o caminho público:

   ```ts
   manualUrl: "/manuals/muuv-emax-pix.pdf",
   ```

3. Salve. O botão **Baixar manual do produto** aparecerá nos detalhes e abrirá o PDF em uma nova aba.

Para um produto sem manual, deixe `manualUrl` de fora ou remova o campo. O botão e seu espaço não serão renderizados. Não associe o arquivo de outro modelo.
