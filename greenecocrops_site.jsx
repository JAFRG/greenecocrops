export default function GreenEcoCrops() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      {/* HERO - MVP FOCUSED */}
      <section className="bg-green-700 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Diagnóstico de Biodiversidade para Explorações Agrícolas
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            A GreenEcoCrops ajuda grandes produtores e cooperativas a medir e melhorar a biodiversidade da sua exploração, com foco na conformidade com a PAC e valorização económica da produção.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-green-100 transition">
              Pedir Diagnóstico Piloto
            </button>
            <button className="border border-white px-8 py-4 rounded-2xl hover:bg-green-600 transition">
              Saber Mais
            </button>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">O Desafio Atual</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>• Dificuldade em reportar indicadores ambientais exigidos pela UE</p>
            <p>• Pressão crescente da PAC e dos eco-regimes</p>
            <p>• Sustentabilidade vista como custo e não como investimento</p>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO MVP */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">A Nossa Solução (MVP)</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-100 p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Diagnóstico Inicial</h3>
              <p>
                Avaliação técnica da biodiversidade da exploração com relatório estruturado e recomendações práticas.
              </p>
            </div>

            <div className="bg-green-100 p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Plano de Melhoria</h3>
              <p>
                Propostas concretas para regeneração ecológica e alinhamento com requisitos da PAC.
              </p>
            </div>

            <div className="bg-green-100 p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Acompanhamento Piloto</h3>
              <p>
                Monitorização simplificada durante 3–6 meses para medir evolução e validar impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="bg-green-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Para Quem?</h2>
          <p className="text-lg text-gray-700">
            Grandes explorações agrícolas, cooperativas e organizações de produtores que necessitam de demonstrar conformidade ambiental e melhorar o seu posicionamento competitivo.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Seja um dos primeiros projetos piloto</h2>
          <p className="mb-8 text-gray-600">
            Estamos a selecionar explorações para implementar o nosso diagnóstico piloto de biodiversidade.
          </p>

          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Nome da Exploração"
              className="p-4 rounded-2xl border"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-2xl border"
            />
            <input
              type="text"
              placeholder="Localização"
              className="p-4 rounded-2xl border"
            />
            <button
              type="submit"
              className="bg-green-700 text-white font-semibold px-6 py-4 rounded-2xl shadow-lg hover:bg-green-800 transition"
            >
              Candidatar ao Projeto Piloto
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-700 text-white py-6 text-center">
        <p>
          © {new Date().getFullYear()} GreenEcoCrops.pt — MVP em validação
        </p>
      </footer>
    </div>
  );
}
