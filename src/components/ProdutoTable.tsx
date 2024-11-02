"use client";
import { Produtos } from "@/class/Produtos";
import { useState } from "react";

export const Add: Array<Produtos> = [];

export default function ProdutoTable() {
  const [produtos, setProdutos] = useState<Produtos[]>(Add);
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");

  const handleAddProduto = () => {
    if (nome && valor) {
      const novoProduto = new Produtos(nome, parseFloat(valor));
      setProdutos([...produtos, novoProduto]);
      setNome("");
      setValor("");
    }
  };

  const handleRemoveProduto = (index: number) => {
    const novosProdutos = produtos.filter((_, i) => i !== index);
    setProdutos(novosProdutos);
  };

  const getCalcular = (valor: Produtos[]) => {
    const somar = valor.reduce(
      (acumulador, valorTotal) => acumulador + valorTotal.getValor,
      0
    );
    return somar.toFixed(2);
  };

  return (
    <div className="mt-10 border border-green-700 border-opacity-20 p-5 rounded-md">
      <h1 className="text-xl font-semibold uppercase text-green-600">
        cadastrar produtos
      </h1>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="Nome do Produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-3 outline-green-600 mr-2 rounded-md bg-transparent border-green-700 border-opacity-50"
        />
        <input
          type="number"
          placeholder="Valor do Produto"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className="border p-3 outline-green-600 mr-2 rounded-md bg-transparent border-green-700 border-opacity-50"
        />
        <button
          onClick={handleAddProduto}
          className="bg-green-600 text-white p-3 rounded-md mt-3 hover:bg-green-500"
        >
          Adicionar Produto
        </button>
      </div>

      <div className="space-y-2 mt-10">
        {produtos.map((item, index) => (
          <div
            key={item.getNome}
            className="flex justify-between items-center gap-2 w-full"
          >
            <span className="w-full flex justify-between bg-green-700 text-green-700 bg-opacity-15 p-2 rounded-md">
              <span>
                <strong>Produto:</strong> {item.getNome}
              </span>

              <span>
                <strong>Valor:</strong> {item.getValor}
              </span>
            </span>

            <button
              onClick={() => handleRemoveProduto(index)}
              className="bg-rose-600 text-white p-2 rounded-md hover:bg-rose-500"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.81 2L5.19 5.63"
                  stroke="#DFDFEC"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.19 2L18.81 5.63"
                  stroke="#DFDFEC"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 7.85C2 6 2.99 5.85 4.22 5.85H19.78C21.01 5.85 22 6 22 7.85C22 10 21.01 9.85 19.78 9.85H4.22C2.99 9.85 2 10 2 7.85Z"
                  stroke="#DFDFEC"
                  stroke-width="1.5"
                />
                <path
                  d="M9.75999 14V17.55"
                  stroke="#DFDFEC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14.36 14V17.55"
                  stroke="#DFDFEC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
                  stroke="#DFDFEC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <p className="mt-5 bg-green-700 text-green-700 bg-opacity-15 p-2 flex items-center justify-center max-w-52 ml-auto rounded-md gap-2">
        <strong className="text-sm">Valor total:</strong>
        <span className="text-xl">{getCalcular(produtos)}</span>
      </p>
    </div>
  );
}
