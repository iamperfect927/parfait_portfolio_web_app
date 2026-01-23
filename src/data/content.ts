import { Translations } from "@/types";

interface ContentType {
    en: any;
    fr: any;
}

export const content: ContentType = {
  en: {
    nav: {
      works: "Works",
      blog: "Blog",
      contact: "Contact",
      hireMe: "Hire Me",
    },
    hero: {
      title: "Hi, I am Parfait, A Frontend Web & Mobile App Developer",
      subtitle: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      resume: "Download Resume",
    },
    about: {
      title: "About Me",
      desc1: "I am a passionate Full Stack Developer with experience in building web and mobile applications.",
      desc2: "My expertise spans across React, Next.js, Node.js, and modern CSS frameworks like Tailwind. When I'm not coding, you can find me exploring new technologies or contributing to open source.",
      cta: "Read More"
    },
    works: {
      title: "Featured Works",
      subtitle: "Explore my latest projects, ranging from web applications to mobile UI designs.",
      filter: {
          all: "All Categories",
          personal: "Personal",
          client: "Client",
          school: "School"
      }
    },
    blog: {
      title: "Recent Posts",
      viewAll: "View all"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a project in mind or just want to say hi? Fill out the form below.",
      form: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
          send: "Send Message"
      }
    }
  },
  fr: {
    nav: {
      works: "Projets",
      blog: "Blog",
      contact: "Contact",
      hireMe: "Engagez-moi",
    },
    hero: {
      title: "Salut, je suis Parfait, Développeur Web Frontend & Applications Mobiles",
      subtitle: "Minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      resume: "Télécharger CV",
    },
    about: {
      title: "À Propos",
      desc1: "Je suis un développeur Full Stack passionné avec de l'expérience dans la création d'applications web et mobiles.",
      desc2: "Mon expertise couvre React, Next.js, Node.js et les frameworks CSS modernes comme Tailwind. Quand je ne code pas, je suis à la recherche de nouvelles technologies.",
      cta: "Lire Plus"
    },
    works: {
      title: "Projets Récents",
      subtitle: "Explorez mes derniers projets, allant des applications web aux interfaces mobiles.",
      filter: {
          all: "Toutes Catégories",
          personal: "Personnel",
          client: "Client",
          school: "École"
      }
    },
    blog: {
      title: "Articles Récents",
      viewAll: "Voir tout"
    },
    contact: {
      title: "Me Contacter",
      subtitle: "Vous avez un projet en tête ou voulez simplement dire bonjour ? Remplissez le formulaire ci-dessous.",
      form: {
          name: "Nom",
          email: "Email",
          subject: "Sujet",
          message: "Message",
          send: "Envoyer Message"
      }
    }
  },
};
