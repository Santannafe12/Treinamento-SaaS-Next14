import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const category1 = await prisma.category.upsert({
        where: { name: "Acessórios de Segurança" },
        update: {},
        create: { name: "Acessórios de Segurança" },
      });
    
      const category2 = await prisma.category.upsert({
        where: { name: "Barracas e Abrigos" },
        update: {},
        create: { name: "Barracas e Abrigos" },
      });
    
      const category3 = await prisma.category.upsert({
        where: { name: "Calçados" },
        update: {},
        create: { name: "Calçados" },
      });
    
      const category4 = await prisma.category.upsert({
        where: { name: "Equipamentos de Camping" },
        update: {},
        create: { name: "Equipamentos de Camping" },
      });
    
      const category5 = await prisma.category.upsert({
        where: { name: "Equipamentos de Dormir" },
        update: {},
        create: { name: "Equipamentos de Dormir" },
      });
    
      const category6 = await prisma.category.upsert({
        where: { name: "Equipamentos de Escalada" },
        update: {},
        create: { name: "Equipamentos de Escalada" },
      });
    
      const category7 = await prisma.category.upsert({
        where: { name: "Iluminação e Eletrônicos" },
        update: {},
        create: { name: "Iluminação e Eletrônicos" },
      });
    
      const category8 = await prisma.category.upsert({
        where: { name: "Mochilas e Bolsas" },
        update: {},
        create: { name: "Mochilas e Bolsas" },
      });
    
      const category9 = await prisma.category.upsert({
        where: { name: "Navegação e Orientação" },
        update: {},
        create: { name: "Navegação e Orientação" },
      });
    
      const category10 = await prisma.category.upsert({
        where: { name: "Roupas Térmicas" },
        update: {},
        create: { name: "Roupas Térmicas" },
      });

  const product1 = await prisma.product.create({
    data: {
      title: "Cinto de Segurança para Montanhismo",
      content:
        "Cinto de segurança avançado para garantir sua proteção nas aventuras nas montanhas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230798/saas/cinto_acoab5.webp",
      price: 199,
      featured: false,
      categories: {
        connect: { id: category1.id },
      },
    },
  });

  const product2 = await prisma.product.create({
    data: {
      title: "Barraca Alpine Pro 3",
      content:
        "Barraca resistente e leve projetada para enfrentar as condições extremas das montanhas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230796/saas/barraca_ntd7m8.webp",
      price: 899,
      featured: true,
      categories: {
        connect: { id: category2.id },
      },
    },
  });

  const product3 = await prisma.product.create({
    data: {
      title: "Bota de Montanhismo Resistente à Água",
      content:
        "Bota de alta qualidade para enfrentar terrenos difíceis e condições climáticas adversas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230796/saas/bota_qjlsid.jpg",
      price: 599,
      featured: true,
      categories: {
        connect: { id: category3.id },
      },
    },
  });

  const product4 = await prisma.product.create({
    data: {
      title: "Saco de Dormir Térmico -15°C",
      content:
        "Saco de dormir ultraleve e térmico, ideal para noites frias nas altas montanhas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230805/saas/saco-ultraleve_esdoa9.webp",
      price: 249,
      featured: false,
      categories: {
        connect: { id: category5.id },
      },
    },
  });

  const product5 = await prisma.product.create({
    data: {
      title: "Mosquetão de Escalada Ultraleve",
      content:
        "Mosquetão durável e leve para escaladas técnicas nas montanhas mais desafiadoras.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230803/saas/mosquetao_xx8y84.webp",
      price: 39,
      featured: false,
      categories: {
        connect: { id: category6.id },
      },
    },
  });

  const product6 = await prisma.product.create({
    data: {
      title: "Lanterna LED Recarregável",
      content:
        "Lanterna potente e recarregável para iluminar suas trilhas noturnas nas montanhas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230801/saas/lanterna_gzfwpj.jpg",
      price: 79,
      featured: false,
      categories: {
        connect: { id: category7.id },
      },
    },
  });

  const product7 = await prisma.product.create({
    data: {
      title: "Mochila de Trekking Pro",
      content:
        "Mochila projetada ergonomicamente para máximo conforto durante longas jornadas de trekking.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230802/saas/mochila_ao2dbz.webp",
      price: 399,
      featured: false,
      categories: {
        connect: { id: category8.id },
      },
    },
  });

  const product8 = await prisma.product.create({
    data: {
      title: "Bússola de Alta Precisão",
      content:
        "Bússola confiável para navegação precisa durante suas aventuras nas montanhas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230797/saas/bussola_xgralo.webp",
      price: 129,
      featured: true,
      categories: {
        connect: { id: category9.id },
      },
    },
  });

  const product9 = await prisma.product.create({
    data: {
      title: "Jaqueta Térmica para Montanhismo",
      content:
        "Jaqueta térmica resistente ao vento e à água para enfrentar as condições climáticas extremas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230800/saas/jaqueta-termica_rf0ujw.webp",
      price: 599,
      featured: true,
      categories: {
        connect: { id: category10.id },
      },
    },
  });

  const product10 = await prisma.product.create({
    data: {
      title: "Luvas Térmicas para Montanhismo",
      content:
        "Mantenha suas mãos aquecidas nas altitudes mais frias com nossas Luvas Térmicas para Montanhismo. Conforto e proteção para suas aventuras geladas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230801/saas/luvas_su5dtz.jpg",
      price: 299,
      featured: true,
      categories: {
        connect: { id: category1.id },
      },
    },
  });

  const product11 = await prisma.product.create({
    data: {
      title: "Barraca Ultraleve Solo",
      content:
        "Aventure-se sozinho com nossa Barraca Ultraleve Solo. Compacta, resistente e perfeita para exploradores solitários em busca de desafios.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230796/saas/barraca-ultraleve_zzwukz.jpg",
      price: 399,
      featured: false,
      categories: {
        connect: { id: category2.id },
      },
    },
  });

  const product12 = await prisma.product.create({
    data: {
      title: "Sapatilha de Escalada Profissional",
      content:
        "Supere qualquer parede com nossa Sapatilha de Escalada Profissional. Ajuste preciso e aderência excepcional para os escaladores mais exigentes.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230805/saas/sapatilha_hfjcid.webp",
      price: 129,
      featured: false,
      categories: {
        connect: { id: category3.id },
      },
    },
  });

  const product13 = await prisma.product.create({
    data: {
      title: "Isolante Térmico Inflável",
      content:
        "Maximize o conforto nas suas noites ao ar livre com nosso Isolante Térmico Inflável. Leve, compacto e essencial para um sono reparador.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230800/saas/isolante_e4zuqp.webp",
      price: 79,
      featured: false,
      categories: {
        connect: { id: category4.id },
      },
    },
  });

  const product14 = await prisma.product.create({
    data: {
      title: "Corda de Escalada Profissional",
      content:
        "Conquiste novas alturas com nossa Corda de Escalada Profissional. Resistente e confiável, é a escolha ideal para escaladores determinados.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230798/saas/corda_oriino.jpg",
      price: 179,
      featured: false,
      categories: {
        connect: { id: category6.id },
      },
    },
  });

  const product15 = await prisma.product.create({
    data: {
      title: "Lanterna de Cabeça Recarregável",
      content:
        "Mantenha as trilhas iluminadas com nosso Farol de Cabeça Recarregável. Prático e potente, é o parceiro perfeito para suas explorações noturnas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230801/saas/lanterna-cabe%C3%A7a_kiktew.webp",
      price: 79,
      featured: false,
      categories: {
        connect: { id: category7.id },
      },
    },
  });

  const product16 = await prisma.product.create({
    data: {
      title: "Mochila de Expedição Resistente à Água",
      content:
        "Supere desafios meteorológicos com nossa Mochila de Expedição Resistente à Água. Espaçosa, durável e pronta para enfrentar as condições mais adversas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230802/saas/mochila-expedicao_gjbuz0.jpg",
      price: 499,
      featured: true,
      categories: {
        connect: { id: category8.id },
      },
    },
  });

  const product17 = await prisma.product.create({
    data: {
      title: "Navegador GPS de Montanha",
      content:
        "Explore novas rotas com nosso Navegador GPS de Montanha. Precisão e confiabilidade para orientação em terrenos desafiadores.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230800/saas/gps_glqufx.webp",
      price: 299,
      featured: false,
      categories: {
        connect: { id: category9.id },
      },
    },
  });

  const product18 = await prisma.product.create({
    data: {
      title: "Jaqueta Isolante Térmica Premium",
      content:
        "Mantenha-se aquecido com estilo usando nossa Jaqueta Isolante Térmica Premium. Design moderno e desempenho térmico para suas aventuras nas montanhas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230800/saas/jaqueta-isolante_fl9c7g.webp",
      price: 799,
      featured: true,
      categories: {
        connect: { id: category10.id },
      },
    },
  });

  const product19 = await prisma.product.create({
    data: {
      title: "Saco Estanque para Mochila",
      content:
        "Mantenha seus equipamentos secos mesmo em condições úmidas com nosso Saco Estanque para Mochila. Impermeável e resistente, é um essencial para suas trilhas aquáticas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230805/saas/saco-estanque_ywra29.jpg",
      price: 89,
      featured: false,
      categories: {
        connect: { id: category8.id },
      },
    },
  });

  const product20 = await prisma.product.create({
    data: {
      title: "Cachecol Térmico para Montanhismo",
      content:
        "Mantenha seu pescoço aquecido nas temperaturas mais frias com nosso Cachecol Térmico para Montanhismo. Conforto e estilo para suas aventuras geladas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230797/saas/cachecol_bipa0b.webp",
      price: 119,
      featured: false,
      categories: {
        connect: { id: category10.id },
      },
    },
  });

  const product21 = await prisma.product.create({
    data: {
      title: "Cadeira Dobrável para Acampamento",
      content:
        "Descanse confortavelmente em suas expedições com nossa Cadeira Dobrável para Acampamento. Compacta, leve e ideal para momentos de relaxamento nas montanhas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230797/saas/cadeira-dobravel_u8igen.webp",
      price: 300,
      featured: false,
      categories: {
        connect: { id: category4.id },
      },
    },
  });

  const product22 = await prisma.product.create({
    data: {
      title: "Saco de Dormir Ultraleve 0°C",
      content:
        "Encare noites mais frescas com nosso Saco de Dormir Ultraleve 0°C. Leve, compacto e projetado para manter o calor em condições mais amenas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230804/saas/saco_ykh7dz.webp",
      price: 299,
      featured: false,
      categories: {
        connect: { id: category5.id },
      },
    },
  });

  const product23 = await prisma.product.create({
    data: {
      title: "Camiseta Térmica de Manga Longa",
      content:
        "Mantenha-se aquecido com nossa Camiseta Térmica de Manga Longa. Confortável e versátil, é a base perfeita para suas camadas de vestuário nas montanhas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230797/saas/camiseta-termica_exqlbf.jpg",
      price: 199,
      featured: false,
      categories: {
        connect: { id: category10.id },
      },
    },
  });

  const product24 = await prisma.product.create({
    data: {
      title: "Gorro Térmico para Climas Extremos",
      content:
        "Proteja-se do frio intenso com nosso Gorro Térmico para Climas Extremos. Design funcional e isolamento térmico para manter sua cabeça aquecida nas altitudes mais elevadas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230799/saas/gorro-termico_bmeiny.webp",
      price: 99,
      featured: false,
      categories: {
        connect: { id: category10.id },
      },
    },
  });

  const product25 = await prisma.product.create({
    data: {
      title: "Cantil de Titânio Ultraleve",
      content:
        "Mantenha-se hidratado sem peso adicional com nosso Cantil de Titânio Ultraleve. Durável, leve e essencial para suas jornadas de longa duração.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230798/saas/cantil_pwwn3e.jpg",
      price: 149,
      featured: false,
      categories: {
        connect: { id: category4.id },
      },
    },
  });

  const product26 = await prisma.product.create({
    data: {
      title: "Bússola de Bolso Multifuncional",
      content:
        "Navegue com facilidade usando nossa Bússola de Bolso Multifuncional. Compacta e repleta de recursos, é o companheiro perfeito para suas aventuras de orientação.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230797/saas/bussola-bolso_fq5cwl.jpg",
      price: 159,
      featured: false,
      categories: {
        connect: { id: category9.id },
      },
    },
  });

  const product27 = await prisma.product.create({
    data: {
      title: "Protetor Solar para Montanhismo",
      content:
        "Proteja sua pele dos raios solares nas grandes altitudes com nosso Protetor Solar para Montanhismo. Fórmula resistente e projetada para ambientes extremos.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230804/saas/protetor-solar_fbpx0n.webp",
      price: 45,
      featured: false,
      categories: {
        connect: { id: category1.id },
      },
    },
  });

  const product28 = await prisma.product.create({
    data: {
      title: "Cadeado de Segurança para Equipamentos",
      content:
        "Mantenha seus equipamentos protegidos com nosso Cadeado de Segurança para Equipamentos. Robusto e confiável, é essencial para manter seu material seguro nas trilhas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230797/saas/cadeado_g88zkr.png",
      price: 39,
      featured: false,
      categories: {
        connect: { id: category1.id },
      },
    },
  });

  const product29 = await prisma.product.create({
    data: {
      title: "Boné Térmico com Proteção UV",
      content:
        "Mantenha a cabeça fresca e protegida do sol com nosso Boné Térmico com Proteção UV. Estilo e funcionalidade para suas aventuras ao ar livre.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230798/saas/chapeu_ee0v0k.jpg",
      price: 99,
      featured: true,
      categories: {
        connect: { id: category10.id },
      },
    },
  });

  const product30 = await prisma.product.create({
    data: {
      title: "Fogareiro Portátil para Camping",
      content:
        "Prepare refeições quentes em qualquer lugar com nosso Fogareiro Portátil para Camping. Compacto, eficiente e essencial para suas expedições culinárias nas montanhas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230798/saas/fogareiro_hwiuq9.webp",
      price: 159,
      featured: false,
      categories: {
        connect: { id: category4.id },
      },
    },
  });

  const product31 = await prisma.product.create({
    data: {
      title: "Kit de Talheres de Titânio Ultraleve",
      content:
        "Leve sua experiência gastronômica para as montanhas com nosso Kit de Talheres de Titânio Ultraleve. Prático, durável e essencial para suas refeições ao ar livre.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230800/saas/kit-talheres_gj0s9e.webp",
      price: 69,
      featured: false,
      categories: {
        connect: { id: category4.id },
      },
    },
  });

  const product32 = await prisma.product.create({
    data: {
      title: "Rede de Dormir para Acampamento",
      content:
        "Relaxe com conforto em nossas Redes de Dormir para Acampamento. Leves, compactas e ideais para momentos de descanso em suas aventuras ao ar livre.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230804/saas/rede_hx3pzn.png",
      price: 399,
      featured: false,
      categories: {
        connect: { id: category5.id },
      },
    },
  });

  const product33 = await prisma.product.create({
    data: {
      title: "Protetor de Ouvido para Ambientes Extremos",
      content:
        "Proteja seus ouvidos dos elementos em ambientes extremos com nosso Protetor de Ouvido para Ambientes Extremos. Conforto e isolamento acústico onde quer que vá.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230803/saas/protetor-ouvido_ay77vw.jpg",
      price: 19,
      featured: false,
      categories: {
        connect: { id: category1.id },
      },
    },
  });

  const product34 = await prisma.product.create({
    data: {
      title: "Máscara de Proteção UV e Respirável",
      content:
        "Mantenha-se protegido do sol e poeira com nossa Máscara de Proteção UV e Respirável. Ideal para aventuras em terrenos desafiadores com exposição solar intensa.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230802/saas/mascara_hmxxe2.webp",
      price: 39,
      featured: false,
      categories: {
        connect: { id: category10.id },
      },
    },
  });

  const product35 = await prisma.product.create({
    data: {
      title: "Garrafa Térmica de Aço Inoxidável",
      content:
        "Mantenha suas bebidas quentes ou frias durante suas trilhas com nossa Garrafa Térmica de Aço Inoxidável. Durável e eficiente, é um companheiro essencial.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230799/saas/garrafa_mcdaen.webp",
      price: 149,
      featured: true,
      categories: {
        connect: { id: category4.id },
      },
    },
  });

  const product36 = await prisma.product.create({
    data: {
      title: "Machado de Camping Multifuncional",
      content:
        "Prepare lenha e enfrente desafios com nosso Machado de Camping Multifuncional. Compacto e robusto, é uma ferramenta versátil para suas jornadas ao ar livre.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230802/saas/machado_jpbceo.jpg",
      price: 299,
      featured: true,
      categories: {
        connect: { id: category4.id },
      },
    },
  });

  const product37 = await prisma.product.create({
    data: {
      title: "Gaiters Impermeáveis para Caminhada",
      content:
        "Mantenha seus pés secos em terrenos úmidos com nossos Gaiters Impermeáveis para Caminhada. Proteção eficaz contra água e sujeira em suas trilhas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230799/saas/gaiters_ly4kyv.webp",
      price: 259,
      featured: false,
      categories: {
        connect: { id: category3.id },
      },
    },
  });

  const product38 = await prisma.product.create({
    data: {
      title: "Canivete Multifuncional de Bolso",
      content:
        "Esteja preparado para qualquer situação com nosso Canivete Multifuncional de Bolso. Ferramenta essencial para cortes, aberturas e diversas atividades durante suas expedições.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230797/saas/canivete_wnhgg6.webp",
      price: 79,
      featured: false,
      categories: {
        connect: { id: category6.id },
      },
    },
  });

  const product39 = await prisma.product.create({
    data: {
      title: "Chapéu de Sol com Proteção UV",
      content:
        "Mantenha-se fresco e protegido do sol com nosso Chapéu de Sol com Proteção UV. Estilo e funcionalidade para suas aventuras sob o sol.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230798/saas/chapeu-de-sol_xtr1yd.jpg",
      price: 110,
      featured: false,
      categories: {
        connect: { id: category10.id },
      },
    },
  });

  const product40 = await prisma.product.create({
    data: {
      title: "Bolsa Estanque para Eletrônicos",
      content:
        "Proteja seus eletrônicos da água e umidade com nossa Bolsa Estanque para Eletrônicos. Essencial para manter seus dispositivos seguros durante suas jornadas aquáticas.",
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1701230796/saas/bolsa-estanque-eletronicos_tcas1j.webp",
      price: 89,
      featured: false,
      categories: {
        connect: { id: category7.id },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
