# Como cadastrar produtos seminovos

Os seminovos ficam em `src/data/usedProducts.ts`, na lista `usedProducts`. Enquanto a lista estiver vazia, a seção **Seminovos** mostra a mensagem "Novos seminovos chegando" com o botão para ser avisado pelo WhatsApp.

## Adicionando um seminovo
1. Coloque as fotos em `public/products/seminovos/` (crie a pasta, se ainda não existir).
2. Adicione um objeto à lista `usedProducts`:

```ts
{
  id: "seminovo-muuv-milu-2024", name: "MUUV MILU 1000W", category: "Scooter", powerW: 1000,
  image: "/products/seminovos/muuv-milu-2024.jpeg", alt: "MUUV MILU 1000W seminova",
  description: "Scooter seminova em ótimo estado, com cesto e painel digital.",
  autonomy: "35 km em média", maxSpeed: "32 km/h", battery: "Lítio 48 V · 20 Ah", maxLoad: "150 kg",
  highlights: ["Revisada pela oficina Muuv", "Manual e chave reserva"],
  condition: "Muito bom", year: 2024, mileageKm: 1800, batteryHealth: "90% da capacidade original",
  usedWarranty: "3 meses para motor e bateria", status: "Disponível",
},
```

## Campos específicos do seminovo
- `condition` (obrigatório): `"Excelente"`, `"Muito bom"` ou `"Bom"`. Aparece na etiqueta da foto.
- `year`, `mileageKm`: ano e quilometragem. Aparecem abaixo do nome e nos detalhes.
- `batteryHealth`, `usedWarranty`: texto livre exibido nos detalhes.
- O preço não é cadastrado: todos os seminovos mostram "Preço sob consulta".
- `status`: `"Disponível"` (padrão), `"Reservado"` ou `"Vendido"`. Seminovos vendidos ficam em preto e branco e sem o link de disponibilidade.

Os demais campos (`images` para o carrossel, `manualUrl`, ficha técnica e `highlights`) funcionam igual aos modelos novos — veja `COMO-ADICIONAR-FOTOS.md` e `COMO-ADICIONAR-MANUAIS.md`.

Os filtros de categoria aparecem automaticamente quando houver seminovos de mais de uma categoria.
