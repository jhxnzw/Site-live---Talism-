const produtos = [
  {
    nome: "3 Xicaras de vidro",
    categoria: "Utilidades do lar",
    preco: "49.90",
    imagem: "https://iili.io/2AHuvus.png",
  },
  {
    nome: "Par de Xicaras",
    categoria: "Utilidades do lar",
    preco: "45.00",
    imagem: "https://iili.io/2AHuNat.png",
  },
  {
    nome: "Porta Temperos",
    categoria: "Utilidades do lar",
    preco: "45.00",
    imagem: "https://iili.io/2AHuk9n.png",
  },

  {
    nome: "6 Copos de Vidro",
    categoria: "Utilidades do lar",
    preco: "45.00",
    imagem: "https://iili.io/2AHuPFS.png",
  },
  {
    nome: "Porta Temperos de Vidro - Unidade",
    categoria: "Utilidades do lar",
    preco: "18.00",
    imagem: "https://iili.io/2AHuic7.png",
  },
  {
    nome: "Garrafa Térmica 500ml",
    categoria: "Utilidades do lar",
    preco: "49.90",
    imagem: "https://iili.io/2AHusS9.png",
  },
  {
    nome: "Bandeja de cerâmica",
    categoria: "Utilidades do lar",
    preco: "49.90",
    imagem: "https://iili.io/25xM3WQ.png",
  },
  {
    nome: "Gaveteiro organizador",
    categoria: "Utilidades do lar",
    preco: "45.00",
    imagem: "https://iili.io/25xMFsV.png",
  },
  {
    nome: "Fruteira centro de mesa",
    categoria: "Utilidades do lar",
    preco: "45.00",
    imagem: "https://iili.io/25xMfqB.png",
  },
  {
    nome: "Fruteira centro de mesa",
    categoria: "Utilidades do lar",
    preco: "49.90",
    imagem: "https://iili.io/25uEpVf.png",
  },

  {
    nome: "Taça de vidro Bomboniere",
    categoria: "Utilidades do lar",
    preco: "45.00",
    imagem: "https://iili.io/25xMo5g.png",
  },

  {
    nome: "Centro de mesa decorativo",
    categoria: "Utilidades do lar",
    preco: "45.00",
    imagem: "https://iili.io/25xMndF.png",
  },
  {
    nome: "Garrafa Térmica 450ml - Unidade",
    categoria: "Decoração",
    preco: "39.00",
    imagem: "https://iili.io/2AHuO8X.png",
  },

  {
    nome: "Pratos rasos de porcelana - Unidade",
    categoria: "Utilidades do lar",
    preco: "12.00",
    imagem: "https://iili.io/25xMzmJ.png",
  },

  {
    nome: "Copos de vidro - Unidade",
    categoria: "Utilidades do lar",
    preco: "9.00",
    imagem: "https://iili.io/25xMAsp.png",
  },

  {
    nome: "Toalha de mesa - Teka",
    categoria: "Utilidades do lar",
    preco: "45.00",
    imagem: "https://iili.io/25xMYgt.png",
  },

  {
    nome: "Toalha de mesa - Teka",
    categoria: "Utilidades do lar",
    preco: "45.00",
    imagem: "https://iili.io/25xMcdX.png",
  },

  {
    nome: "Bandeja de aluminio",
    categoria: "Utilidades do lar",
    preco: "45.00",
    imagem: "https://iili.io/25xMXB2.png",
  },

  {
    nome: "Bandeja de plastico",
    categoria: "Utilidades do lar",
    preco: "45.00",
    imagem: "https://iili.io/25xMMX4.png",
  },
  {
    nome: "Taças de Vidro - Unidade",
    categoria: "Utilidades do lar - Unidade",
    preco: "9.00",
    imagem: "https://iili.io/25xMTzv.png",
  },

  {
    nome: "Arranjo de flores",
    categoria: "Utilidades do lar",
    preco: "45.00",
    imagem: "https://iili.io/25xMxea.png",
  },
  {
    nome: "Caneca de chá de vidro",
    categoria: "Utilidades do lar",
    preco: "32.00",
    imagem: "https://iili.io/25mwqla.png",
  },
  {
    nome: "Bandeja decorativa com espelho",
    categoria: "Utilidades do lar",
    preco: "110.00",
    imagem: "https://iili.io/25mNn1e.png",
  },
  {
    nome: "Porta retrato - Unidade",
    categoria: "Utilidades do lar",
    preco: "19.00",
    imagem: "https://iili.io/25meMWN.png",
  },
  {
    nome: "Vaso de vidro e cerâmica - Unidade",
    categoria: "Utilidades do lar",
    preco: "25.00",
    imagem: "https://iili.io/25mkgTv.png",
  },
  {
    nome: "Dispensador de sabonete líquido",
    categoria: "Utilidades do lar",
    preco: "29.00",
    imagem: "https://iili.io/25me1bR.png",
  },
  {
    nome: "Dispensador de sabonete líquido",
    categoria: "Utilidades do lar",
    preco: "29.00",
    imagem: "https://iili.io/25mvbl1.png",
  },
  {
    nome: "Bandeja decorativa",
    categoria: "Utilidades do lar",
    preco: "35.00",
    imagem: "https://iili.io/25meXft.png",
  },
  {
    nome: "Arranjo de flores",
    categoria: "Utilidades do lar",
    preco: "118.00",
    imagem: "https://iili.io/25meh0X.png",
  },
  {
    nome: "Saboneteira de vidro",
    categoria: "Utilidades do lar",
    preco: "18.00",
    imagem: "https://iili.io/25mejgn.png",
  },
  {
    nome: "Aromatizador de ambientes",
    categoria: "Utilidades do lar",
    preco: "18.00",
    imagem: "https://iili.io/25meNJs.png",
  },
  {
    nome: "Aromatizador de ambientes",
    categoria: "Utilidades do lar",
    preco: "25.00",
    imagem: "https://iili.io/25meeef.png",
  },
  {
    nome: "Aromatizador / Saboneteira - Unidade",
    categoria: "Utilidades do lar",
    preco: "25.00",
    imagem: "https://iili.io/25mekb4.png",
  },
  {
    nome: "Mini vaso decorativo - Unidade",
    categoria: "Utilidades do lar",
    preco: "14.00",
    imagem: "https://iili.io/25me8zl.png",
  },
  {
    nome: "Papel de parede 5m x 45cm - Unidade",
    categoria: "Utilidades do lar",
    preco: "25.00",
    imagem: "https://iili.io/25meSX2.png",
  },
  {
    nome: "Caneca de chá com difusor em porcelana - Unidade",
    categoria: "Utilidades do lar",
    preco: "32.00",
    imagem: "https://iili.io/25meUsS.png",
  },
];

let carrinho = [];

function searchProduct() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("searchResults");
  results.innerHTML = "";

  const produtosEncontrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(input)
  );
  displayProducts(produtosEncontrados);
}

function filterByCategory(category) {
  const results = document.getElementById("searchResults");
  results.innerHTML = "";

  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === category
  );
  displayProducts(produtosFiltrados);
}

function displayProducts(produtosArray) {
  const results = document.getElementById("searchResults");
  if (produtosArray.length > 0) {
    produtosArray.forEach((produto) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      productDiv.innerHTML = `
                      <img src="${produto.imagem}" alt="${produto.nome}">
                      <h2>${produto.nome}</h2>
                      <p>Preço: R$ ${parseFloat(produto.preco).toFixed(2)}</p>
                      <button onclick="addToCart('${produto.nome}', ${
        produto.preco
      })">Adicionar ao Carrinho</button>
                  `;
      results.appendChild(productDiv);
    });
  } else {
    results.innerHTML = "<p>Nenhum produto encontrado.</p>";
  }
}

function addToCart(nome, preco) {
  carrinho.push({ nome, preco: parseFloat(preco) });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  let total = 0;
  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(
      2
    )} <button class="remove-btn" onclick="removeFromCart(${index})">Remover</button>`;
    cartItems.appendChild(li);
    total += item.preco;
  });
  document.getElementById("totalPrice").textContent = `R$ ${total.toFixed(2)}`;
}

function removeFromCart(index) {
  carrinho.splice(index, 1);
  updateCart();
}

function checkout() {
  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  // Coletando as informações do cliente
  const clientName = document.getElementById("clientName").value;
  const clientPhone = document.getElementById("clientPhone").value;

  // Verificando se os dados do cliente foram preenchidos
  if (!clientName || !clientPhone) {
    alert("Por favor, preencha seu nome e telefone.");
    return;
  }

  if (total > 10) {
    let message =
      `Nome do Cliente: ${clientName}\n` +
      `Telefone: ${clientPhone}\n\n` +
      "Gostaria de finalizar a compra dos seguintes itens:\n\n";

    carrinho.forEach((item) => {
      message += `- ${item.nome}: R$ ${item.preco.toFixed(2)}\n`;
    });

    message += `\nTotal: R$ ${total.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);

    // Substitua 'NUMERO' pelo número desejado
    const whatsappNumber = "558881850649"; // Exemplo: (11) 99999-9999
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
  } else {
    alert(
      "O total da compra deve ser acima de R$ 10,00 para finalizar a compra."
    );
  }
}

window.onload = () => displayProducts(produtos);
