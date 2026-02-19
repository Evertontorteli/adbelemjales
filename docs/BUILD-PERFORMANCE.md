# Por que o build demora e como acelerar

## Principais causas da lentidão

### 1. **Muitas dependências**
O projeto tem **mais de 50 dependências diretas** (Radix UI, Recharts, Tailwind, etc.). O Parcel precisa analisar e processar toda a árvore de módulos. Os componentes em `src/components/ui/` puxam muitas bibliotecas; mesmo que a página principal use poucos, o bundler ainda processa o grafo.

### 2. **Tailwind + PostCSS**
O `index.css` importa `tailwindcss` e `globals.css`. Na primeira vez (e após limpar o cache), o Tailwind gera muito CSS e o PostCSS processa tudo, o que leva tempo.

### 3. **Cache do Parcel**
- **Primeira vez** ou após `rm -rf .parcel-cache`: o build é bem mais lento.
- **Builds seguintes**: o Parcel reutiliza o cache e fica bem mais rápido.
- **Dica:** não apague `.parcel-cache` a menos que precise (ex.: build estranho).

### 4. **Tamanho do `node_modules`**
Se `node_modules` estiver com tamanho anormal (ex.: vários GB), o disco e o bundler ficam lentos. Verifique com:
```bash
du -sh node_modules
```
Valores típicos: ~200 MB a ~1 GB. Se for muito maior, considere `rm -rf node_modules && npm install` ou conferir se há pacotes duplicados/desnecessários.

### 5. **Projeto em HD externo / caminho com espaço**
O projeto está em um caminho como `/Volumes/HD EXTERNO/...`. HDs externos (USB, etc.) costumam ser mais lentos que o disco interno, e caminhos com espaço às vezes atrapalham scripts. Se puder, clonar/copiar o projeto para uma pasta no disco interno (ex.: `~/projetos/SiteAdBelemJales`) pode reduzir bastante o tempo de build.

---

## O que fazer na prática

1. **Manter o cache**  
   Evite apagar `.parcel-cache` entre um build e outro.

2. **Desenvolvimento: usar `npm run dev`**  
   O Parcel fica em modo watch e só reprocessa o que mudou; é mais rápido que rodar `npm run build` toda hora.

3. **Limpar e reinstalar dependências (se `node_modules` estiver enorme)**  
   ```bash
   rm -rf node_modules .parcel-cache
   npm install
   npm run dev
   ```
   A primeira execução será lenta de novo; as seguintes tendem a melhorar.

4. **Build de produção só quando precisar**  
   Use `npm run build` apenas para gerar a pasta `build/` (deploy). No dia a dia, trabalhe com `npm run dev`.

5. **(Opcional) Reduzir dependências**  
   Se muitos componentes em `src/components/ui/` não forem usados nas páginas (Eventos, Início, Igreja, Doação, Departamentos), no futuro dá para remover os que não forem necessários e desinstalar pacotes correspondentes para aliviar o tempo de build.
