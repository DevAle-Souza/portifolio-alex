export type Language = "en" | "pt";

export type WordItem = {
  word: string;
  color?: string;
};

export type Testimonial = {
  key: number;
  quote: string;
  title: string;
};

export type Translation = {
  hero: {
    congrats: string;
    words: WordItem[];
    subtitle: string;
    downloadCv: string;
  };
  about: {
    heading: string;
    cards: {
      title: string;
      text: string;
    }[];
  };
  skills: {
    heading: string;
    testimonials: Testimonial[];
  };
  projects: {
    heading: string;
    praxis: {
      title: string;
      description: string;
    };
    marcio: {
      title: string;
      description: string;
    };
  };
  footer: {
    copyright: string;
  };
};

export const translations: Record<Language, Translation> = {
  en: {
    hero: {
      congrats: "Congratulations, you've made it to my portfolio! 🚀",
      words: [
        { word: "Building" },
        { word: "Modern," },
        { word: "Fast," },
        { word: "and" },
        { word: "Beautiful" },
        { word: "Applications", color: "#6366F1" },
        { word: "Experiences", color: "#6366F1" },
      ],
      subtitle:
        "Hi! I'm Carlos Alexandre, a Full Stack Developer focused on building modern, responsive, and high-performance applications.",
      downloadCv: "DOWNLOAD PDF CV",
    },
    about: {
      heading: "About me",
      cards: [
        {
          title: "From Gamer to Developer",
          text: "I'm a 23-year-old FullStack Developer from Goiás, Brazil. My passion for technology started in my childhood, driven by my love for games. That curiosity led me to discover how games are made and that's when I found programming.",
        },
        {
          title: "Computer scientist",
          text: "I completed a Bachelor's degree in Computer Science at Universidade Paulista - GO. It was 4 years of learning the theory behind the entire programming universe, where I started to truly understand how things work.",
        },
        {
          title: "My approach",
          text: "My approach is simple: create beautiful, functional, and practical solutions. I combine clean design with intuitive user experiences, always focusing on performance, usability, and real impact.",
        },
        {
          title: "Always Learning, Always Growing",
          text: "I believe that technology never stops evolving and neither do I. I'm constantly learning, improving my skills, and exploring new tools, frameworks, and technologies to deliver better and more innovative solutions.",
        },
      ],
    },
    skills: {
      heading: "My Skills",
      testimonials: [
        {
          key: 1,
          quote:
            "I use JavaScript as my main programming language for web and mobile development. I have strong knowledge in building dynamic interfaces, handling APIs, and creating interactive user experiences.",
          title: "JavaScript",
        },
        {
          key: 2,
          quote:
            "I develop high-quality web applications using React.js. I have experience with component-based architecture, state management, hooks, and creating responsive and scalable UIs.",
          title: "React.js",
        },
        {
          key: 3,
          quote:
            "I create mobile applications using React Native, applying the same React concepts to deliver cross-platform apps with native performance for both Android and iOS.",
          title: "React Native",
        },
        {
          key: 4,
          quote:
            "I have a solid understanding of UI/UX principles. I design intuitive, user-friendly interfaces with attention to usability, accessibility, and responsive design, using tools like Figma and CSS frameworks such as Tailwind.",
          title: "UI/UX",
        },
        {
          key: 5,
          quote:
            "I use Python for automation, scripting, backend services, and data processing. It's a versatile language that complements my frontend skills and allows me to handle backend tasks when needed.",
          title: "Python",
        },
        {
          key: 6,
          quote:
            "I work with MySQL for relational database management. I design, structure, and manage databases, ensuring data integrity and optimized queries for efficient performance.",
          title: "MySQL",
        },
        {
          key: 7,
          quote:
            "I have strong problem-solving skills, allowing me to quickly analyze challenges, find effective solutions, and adapt to new situations efficiently. This skill helps me deliver reliable and scalable solutions in every project.",
          title: "Problem-Solving",
        },
        {
          key: 8,
          quote:
            "I have excellent communication skills, which help me collaborate effectively with team members, understand client needs, share ideas clearly, and contribute to productive teamwork.",
          title: "Communication",
        },
        {
          key: 9,
          quote:
            "I develop high-quality backend applications using Node.js. I have experience building scalable server-side applications, designing RESTful APIs, working with asynchronous programming, managing databases, implementing authentication and authorization, and creating secure, high-performance, and maintainable backend solutions.",
          title: "Node.js",
        },
        {
          key: 10,
          quote:
            "I specialize in backend development with Java, building reliable and enterprise-grade applications. I have experience with Spring Boot, microservices architecture, REST API development, database integration, dependency injection, security with Spring Security, and writing clean, maintainable, and scalable code following object-oriented design principles.",
          title: "Java & Spring Boot",
        },
      ],
    },
    projects: {
      heading: "My last two personal projects",
      praxis: {
        title: "Grupo Práxis",
        description:
          "Project made for a group of professors from the Federal College of Tocantins to publish about education. Project was carried out using React JS with Typescript, zod validations and react hooks, uses Next.js and design libraries, database was made with supabase.",
      },
      marcio: {
        title: "Professor Marcio Carvalho",
        description:
          "Project for a federal professor, on the website the professor publishes news, his books, his calendar, among others. Project was carried out using React JS with Typescript, zod validations and react hooks, uses Vite and design libraries, database was made with supabase.",
      },
    },
    footer: {
      copyright: "Copyright ©2026 Alexandre. Designed by Dev Alexandre",
    },
  },
  pt: {
    hero: {
      congrats: "Parabéns, você chegou ao meu portfólio! 🚀",
      words: [
        { word: "Construindo" },
        { word: "Aplicações", color: "#6366F1" },
        { word: "Modernas," },
        { word: "Rápidas" },
        { word: "e" },
        { word: "Experiências", color: "#6366F1" },
        { word: "Incríveis" },
      ],
      subtitle:
        "Olá! Eu sou Carlos Alexandre, um Desenvolvedor Full Stack focado em criar aplicações modernas, responsivas e de alta performance.",
      downloadCv: "BAIXAR CURRÍCULO EM PDF",
    },
    about: {
      heading: "Sobre mim",
      cards: [
        {
          title: "De Gamer a Desenvolvedor",
          text: "Sou um Desenvolvedor FullStack de 23 anos, de Goiás, Brasil. Minha paixão pela tecnologia começou na infância, motivada pelo meu amor por jogos. Essa curiosidade me levou a descobrir como os jogos são feitos, e foi aí que encontrei a programação.",
        },
        {
          title: "Cientista da Computação",
          text: "Concluí o Bacharelado em Ciência da Computação na Universidade Paulista - GO. Foram 4 anos aprendendo a teoria por trás de todo o universo da programação, onde comecei a realmente entender como as coisas funcionam.",
        },
        {
          title: "Minha abordagem",
          text: "Minha abordagem é simples: criar soluções bonitas, funcionais e práticas. Combino um design limpo com experiências de usuário intuitivas, sempre focando em performance, usabilidade e impacto real.",
        },
        {
          title: "Sempre Aprendendo, Sempre Crescendo",
          text: "Acredito que a tecnologia nunca para de evoluir, e eu também não. Estou constantemente aprendendo, aprimorando minhas habilidades e explorando novas ferramentas, frameworks e tecnologias para entregar soluções melhores e mais inovadoras.",
        },
      ],
    },
    skills: {
      heading: "Minhas Habilidades",
      testimonials: [
        {
          key: 1,
          quote:
            "Uso JavaScript como minha principal linguagem de programação para desenvolvimento web e mobile. Tenho amplo conhecimento na construção de interfaces dinâmicas, integração com APIs e criação de experiências de usuário interativas.",
          title: "JavaScript",
        },
        {
          key: 2,
          quote:
            "Desenvolvo aplicações web de alta qualidade usando React.js. Tenho experiência com arquitetura baseada em componentes, gerenciamento de estado, hooks e criação de interfaces responsivas e escaláveis.",
          title: "React.js",
        },
        {
          key: 3,
          quote:
            "Crio aplicações mobile usando React Native, aplicando os mesmos conceitos do React para entregar apps multiplataforma com performance nativa tanto para Android quanto para iOS.",
          title: "React Native",
        },
        {
          key: 4,
          quote:
            "Tenho um sólido entendimento dos princípios de UI/UX. Projeto interfaces intuitivas e amigáveis, com atenção à usabilidade, acessibilidade e design responsivo, utilizando ferramentas como Figma e frameworks CSS como Tailwind.",
          title: "UI/UX",
        },
        {
          key: 5,
          quote:
            "Uso Python para automação, scripts, serviços de backend e processamento de dados. É uma linguagem versátil que complementa minhas habilidades em frontend e me permite lidar com tarefas de backend quando necessário.",
          title: "Python",
        },
        {
          key: 6,
          quote:
            "Trabalho com MySQL para gerenciamento de bancos de dados relacionais. Eu projeto, estruturo e gerencio bancos de dados, garantindo integridade dos dados e queries otimizadas para um desempenho eficiente.",
          title: "MySQL",
        },
        {
          key: 7,
          quote:
            "Tenho fortes habilidades de resolução de problemas, o que me permite analisar desafios rapidamente, encontrar soluções eficazes e me adaptar a novas situações com eficiência. Essa habilidade me ajuda a entregar soluções confiáveis e escaláveis em todos os projetos.",
          title: "Resolução de Problemas",
        },
        {
          key: 8,
          quote:
            "Tenho excelentes habilidades de comunicação, que me ajudam a colaborar de forma eficaz com os membros da equipe, entender as necessidades dos clientes, compartilhar ideias com clareza e contribuir para um trabalho em equipe produtivo.",
          title: "Comunicação",
        },
        {
          key: 9,
          quote:
            "Desenvolvo aplicações backend de alta qualidade usando Node.js. Tenho experiência construindo aplicações server-side escaláveis, projetando APIs RESTful, trabalhando com programação assíncrona, gerenciando bancos de dados, implementando autenticação e autorização, e criando soluções backend seguras, performáticas e de fácil manutenção.",
          title: "Node.js",
        },
        {
          key: 10,
          quote:
            "Sou especializado em desenvolvimento backend com Java, construindo aplicações confiáveis de nível empresarial. Tenho experiência com Spring Boot, arquitetura de microsserviços, desenvolvimento de APIs REST, integração com bancos de dados, injeção de dependência, segurança com Spring Security, e escrita de código limpo, escalável e de fácil manutenção seguindo os princípios de design orientado a objetos.",
          title: "Java & Spring Boot",
        },
      ],
    },
    projects: {
      heading: "Meus últimos dois projetos pessoais",
      praxis: {
        title: "Grupo Práxis",
        description:
          "Projeto feito para um grupo de professores do Instituto Federal do Tocantins para publicações sobre educação. O projeto foi desenvolvido usando React JS com Typescript, validações com zod e react hooks, utiliza Next.js e bibliotecas de design, com banco de dados feito em Supabase.",
      },
      marcio: {
        title: "Professor Marcio Carvalho",
        description:
          "Projeto para um professor federal, onde o professor publica notícias, seus livros, sua agenda, entre outros. O projeto foi desenvolvido usando React JS com Typescript, validações com zod e react hooks, utiliza Vite e bibliotecas de design, com banco de dados feito em Supabase.",
      },
    },
    footer: {
      copyright: "Copyright ©2026 Alexandre. Desenvolvido por Dev Alexandre",
    },
  },
};
