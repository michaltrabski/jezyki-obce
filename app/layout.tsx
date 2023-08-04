// import { Providers } from "@/redux/Provider";

// export const metadata = {
//   title: "Testy na prawo jazdy 2023",
//   description: "Aplikacja do nauki testów na prawo jazdy 2023",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
          crossOrigin="anonymous"
        />
      </head>
      {/* <Providers> */}
      <body data-bs-theme="dark">
        <header className=" pb-3">
          <nav id="navbar" className="navbar navbar-expand-md navbar-dark bg-dark shadow-lg border-bottom border-dark ">
            <div className="container-fluid">
              <a href="/" className="navbar-brand">
                <span>
                  języki-<span className="text-danger">obce</span>.pl
                </span>
              </a>
              {/* <div className="btn-group" role="group" aria-label="Testy prawo jazdy">
                <a href="#" className="btn btn-sm btn-success">
                  ?
                </a>
                <a href="#" className="btn btn-sm btn-danger">
                  !
                </a>
              </div> */}

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div style={{ flexGrow: 0 }} className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {[
                    // {
                    //   label: "Pytania testowe",
                    //   href: "#",
                    // },
                  ].map(({ label, href }, i) => (
                    <li key={i} className="nav-item">
                      <a
                        href={href}
                        className="nav-a text-center h-100 d-flex align-items-center justify-content-center"
                      >
                        {label}
                      </a>
                    </li>
                  ))}

                  {/* <form className="m-0">
                      <a
                        href={URLS.TWOJE_KONTO}
                        className="btn btn-secondary w-100"
                      >
                        Twoje konto
                      </a>
                    </form> */}
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center">{children}</div>
            </div>
          </div>
        </main>

        <footer style={{ opacity: 0.1 }} className="d-none p5 bg-dark text-center border ">
          to jest footer
        </footer>
      </body>
      {/* </Providers> */}
    </html>
  );
}
