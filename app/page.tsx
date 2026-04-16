import Image from "next/image";

type Book = {
  title: string;
  tagline: string;
  audience: string;
  image: string;
  link: string;
};

type Section = {
  title: string;
  description: string;
  hook: string;
  books: Book[];
};

const sections: Section[] = [
  {
    title: "What makes us human?",
    description:
      "Stories that wrestle with identity, sacrifice, and the cost of losing what makes us real.",
    hook: "Join the newsletter to get a free chapter from each of these stories and step into the world before you commit.",
    books: [
      {
        title: "Axiom",
        tagline:
          "A dystopian world of control and truth beneath a polished surface.",
        audience:
          "For readers who love books like Divergent and The Maze Runner.",
        image: "/images/axiom.jpg",
        link: "https://www.amazon.com/s?k=axiom+kristofor+hellmeister",
      },
      {
        title: "Scars of Axiom",
        tagline:
          "Survival, fracture, and the cost of resistance in a breaking world.",
        audience:
          "For readers who love books like Legend and Red Rising.",
        image: "/images/scars-of-axiom.jpg",
        link: "https://www.amazon.com/s?k=scars+of+axiom+kristofor+hellmeister",
      },
      {
        title: "Fall of Axiom",
        tagline:
          "When systems collapse, what remains is tested to the core.",
        audience:
          "For readers who love books like Mockingjay and Red Rising.",
        image: "/images/fall-of-axiom.jpg",
        link: "https://www.amazon.com/s?k=fall+of+axiom+kristofor+hellmeister",
      },
      {
        title: "Citadel",
        tagline:
          "Power, pressure, and a city built on dangerous certainty.",
        audience:
          "For readers who love books like Divergent and Arc of a Scythe.",
        image: "/images/citadel.jpg",
        link: "https://www.amazon.com/s?k=citadel+kristofor+hellmeister",
      },
      {
        title: "End of Man",
        tagline:
          "A speculative look at humanity when paradise comes at the cost of the body.",
        audience:
          "For readers who love books like Ready Player One and Black Mirror.",
        image: "/images/end-of-man.jpg",
        link: "https://www.amazon.com/s?k=end+of+man+kristofor+hellmeister",
      },
    ],
  },
  {
    title: "What is real?",
    description:
      "Worlds where perception, power, and truth collide—and nothing is quite what it seems.",
    hook: "Subscribe and get a free chapter from these novels to see where wonder, danger, and reality start to blur.",
    books: [
      {
        title: "Academy of Breath and Fire",
        tagline:
          "A sweeping academy story where power and identity are forged.",
        audience:
          "For readers who love books like Harry Potter and Keeper of the Lost Cities.",
        image: "/images/academy-breath-fire.jpg",
        link: "https://www.amazon.com/s?k=academy+of+breath+and+fire+kristofor+hellmeister",
      },
      {
        title: "Academy of Light and Shadows",
        tagline:
          "A continuation into deeper power, darker choices, and shifting realities.",
        audience:
          "For readers who love books like Shadow and Bone and Harry Potter.",
        image: "/images/academy-light-shadows.jpg",
        link: "https://www.amazon.com/s?k=academy+of+light+and+shadows+kristofor+hellmeister",
      },
    ],
  },
  {
    title: "What is the past?",
    description:
      "Stories rooted in memory, legacy, and the moments that shape who we become.",
    hook: "Get a free chapter from these stories when you join the list and find the moments that still echo long after the page turns.",
    books: [
      {
        title: "The Daylight",
        tagline:
          "A reflective journey shaped by time, memory, and meaning.",
        audience:
          "For readers who love books like The Book Thief.",
        image: "/images/the-daylight.jpg",
        link: "https://www.amazon.com/s?k=the+daylight+kristofor+hellmeister",
      },
      {
        title: "Brothers of Baseball",
        tagline:
          "A story of brotherhood, sport, and the moments that define us.",
        audience:
          "For readers who love books like The Sandlot.",
        image: "/images/brothers-of-baseball.jpg",
        link: "https://www.amazon.com/s?k=brothers+of+baseball+kristofor+hellmeister",
      },
      {
        title: "High Noon",
        tagline:
          "A sharp, character-driven story set against pressure and choice.",
        audience:
          "For readers who love classic western tension and moral stakes.",
        image: "/images/high-noon.jpg",
        link: "https://www.amazon.com/s?k=high+noon+kristofor+hellmeister",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Kristofor Hellmeister</p>
          <h1>Clean fiction with grit, stakes, and something real at the center.</h1>
          <p className="hero-text">
            I write stories that explore what makes us human, what is real, and what the past still has to say.
            These are clean reads that do not soften consequence or tension. They keep the integrity of the story intact.
          </p>

          <div className="hero-actions">
            <a className="button button-solid" href="#books">Browse the books</a>
            <a className="button button-outline" href="#newsletter">Get free chapters</a>
          </div>
        </div>

        <div className="hero-card">
          <Image
            src="/images/axiom.jpg"
            alt="Axiom cover"
            width={251}
            height={399}
            priority
            className="hero-cover"
          />
          <div className="hero-card-copy">
            <p className="hero-card-label">Start here</p>
            <h2>Axiom</h2>
            <p>
              A sleek entry point into your worlds of identity, control, and truth.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-heading">
          <p className="eyebrow">About the author</p>
          <h2>A brief bio</h2>
        </div>

        <div className="bio-card">
          <p>
            Kristofor Hellmeister is a Canadian-born, Georgia-bred author and middle school teacher who lives near Atlanta with his wife, Kristie, and their children. He is a lover of storytelling, sports, and the quiet moments where ideas take shape into something lasting.
          </p>
          <p>
            He writes fiction that blends imagination, tension, and moral depth—stories that explore identity, sacrifice, truth, and the enduring value of the human experience. Whether crafting dystopian science fiction, speculative worlds, or fantasy, his goal is to create stories that feel immersive, meaningful, and unforgettable.
          </p>
          <p>
            When he is not writing, Kristofor enjoys playing Halo, running ridiculously long races, hiking, and building LEGO creations with his boys.
          </p>
        </div>
      </section>

      <section id="books" className="books-area">
        {sections.map((section) => (
          <div key={section.title} className="section-block">
            <div className="section-heading">
              <p className="eyebrow">Featured collection</p>
              <h2>{section.title}</h2>
              <p className="section-description">{section.description}</p>
              <p className="section-hook">{section.hook}</p>
            </div>

            <div className="book-grid">
              {section.books.map((book) => (
                <article key={book.title} className="book-card">
                  <div className="book-cover-wrap">
                    <Image
                      src={book.image}
                      alt={`${book.title} cover`}
                      width={320}
                      height={480}
                      className="book-cover"
                    />
                  </div>

                  <div className="book-content">
                    <h3>{book.title}</h3>
                    <p className="book-tagline">{book.tagline}</p>
                    <p className="book-audience">{book.audience}</p>
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-outline small-button"
                    >
                      View on Amazon
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="newsletter" className="newsletter">
        <div className="section-heading">
          <p className="eyebrow">Stay connected</p>
          <h2>Join the newsletter</h2>
        </div>

        <div className="newsletter-card">
          <p>
            I’m Kristofor Hellmeister—author of stories that explore what it means to be human, what is real, and what we carry from the past. I write clean fiction with real stakes: stories that do not shy away from tension, consequence, or grit, but hold tightly to meaning and integrity.
          </p>
          <p>
            If you enjoy immersive worlds, thought-provoking ideas, and stories that stay with you long after the final page, this is where you’ll want to be. Join the newsletter for new releases, behind-the-scenes notes, and free chapters from the books.
          </p>

          <div
            className="mailerlite-embed"
            dangerouslySetInnerHTML={{
              __html: `<div class="ml-embedded" data-form="JzdyqS"></div>`,
            }}
          />
        </div>
      </section>
    </main>
  );
}
