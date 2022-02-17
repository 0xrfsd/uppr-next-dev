import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const SignUp = () => {
  const [windowSize, setWindowSize] = React.useState(null);

  const [name, setName] = React.useState(undefined);
  const [tipo, setTipo] = React.useState(undefined);
  const [email, setEmail] = React.useState(undefined);

  const [page, setPage] = React.useState(1);
  const [pageTitle, setPageTitle] = React.useState(
    "Como devemos chamar seu negócio?"
  );

  const inputEl = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ paddingLeft: 20, paddingRight: 20 }}>
      <div style={{ maxWidth: 700, width: "100%", margin: "auto" }}>
        <h1 className={styles.title}>
          <a href="/">Uppernodes</a>
        </h1>

        {page === 4 ? (
          <></>
        ) : (
          <>
            <div
              style={{
                marginTop: 50,
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                onClick={() => {
                  setPage(1);
                  setPageTitle("Como devemos chamar seu negócio?");
                }}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  border: "2px solid #0070F3",
                  backgroundColor:
                    page === 1
                      ? "#0070F3"
                      : page === 2
                      ? "#0070F3"
                      : page === 3
                      ? "#0070F3"
                      : null,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color:
                      page === 1
                        ? "#fff"
                        : page === 2
                        ? "#FFF"
                        : page === 3
                        ? "#FFF"
                        : "#0070F3",
                  }}
                >
                  1
                </div>
              </div>
              <div
                style={{ height: 5, width: 10, backgroundColor: "#0070F3" }}
              ></div>
              <div
                onClick={() => {
                  if (name) {
                    setPage(2);
                    setPageTitle("Como você melhor classifica o seu negócio?");
                  }
                }}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  backgroundColor:
                    page === 2 ? "#0070F3" : page === 3 ? "#0070F3" : null,
                  border: "2px solid #0070F3",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color:
                      page === 2 ? "#FFF" : page === 3 ? "#FFF" : "#0070F3",
                  }}
                >
                  2
                </div>
              </div>
              <div
                style={{ height: 5, width: 10, backgroundColor: "#0070F3" }}
              ></div>
              <div
                onClick={() => {
                  if (name && tipo) {
                    setPage(3);
                    setPageTitle("Que tipo de produto ou serviço você");
                  }
                }}
                style={{
                  height: 50,
                  backgroundColor: page === 3 ? "#0070F3" : null,
                  width: 50,
                  borderRadius: 50,
                  border: "2px solid #0070F3",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ color: page === 3 ? "#FFF" : "#0070F3" }}>3</div>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                backgroundColor: "#FFF",
                padding: 20,
                borderRadius: 5,
                height: "35vh",
                marginTop: 50,
              }}
            >
              <div
                style={{
                  fontSize: 26,
                  textAlign: "center",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                {pageTitle}
              </div>
              <form style={{ marginTop: 20 }}>
                <input
                  value={
                    page === 1
                      ? name
                      : page === 2
                      ? tipo
                      : page === 3
                      ? email
                      : null
                  }
                  ref={inputEl}
                  onChange={(e) => {
                    if (page === 1) {
                      setName(e.target.value);
                    } else if (page === 2) {
                      setTipo(e.target.value);
                    }
                  }}
                  placeholder="Digite aqui"
                  style={{
                    border: "0px solid #0070F3",
                    fontSize: 22,
                    borderRadius: 5,
                    outlineColor: "#0070F3",
                    height: 50,
                    padding: 10,
                    width: "100%",
                  }}
                />
              </form>
            </div>
          </>
        )}

        {page === 4 ? (
          <>
            <Link href="/">
              <div
                style={{
                  height: 50,
                  width: "100%",
                  backgroundColor: "#0070F3",
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "#FFF", fontSize: 18 }}>
                  Acessar dashboard
                </div>
              </div>
            </Link>
          </>
        ) : (
          <>
            <div
              onClick={() => {
                if (page === 1) {
                  if (name) {
                    inputEl.current.value = "";
                    setPageTitle(
                      "Como você melhor classifica o tipo do seu negócio?"
                    );
                    setPage(2);
                  }
                } else if (page === 2) {
                  if (tipo) {
                    inputEl.current.value = "";
                    setPage(3);
                    setPageTitle("Qual seu melhor e-mail?");
                  }
                } else if (page === 3) {
                  setPage(4);
                }
              }}
              style={{
                height: 50,
                width: "100%",
                backgroundColor: "#0070F3",
                borderRadius: 5,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ color: "#FFF", fontSize: 18 }}>
                Próxima pergunta
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
