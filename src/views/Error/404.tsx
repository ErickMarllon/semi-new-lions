import { PATH_PAGE } from "@/routers/paths";
import { Link } from "react-router-dom";
import errorImg from "@/assets/error/404.webp";
import { Button } from "@/components/ui/button";

export default function Page404() {
  return (
    <section className="container">
      <div className="flex justify-center items-center min-h-screen">
        <figure className="flex justify-center items-center flex-col md:flex-row gap-2">
          <img
            src={errorImg}
            height={1502}
            width={853}
            loading="lazy"
            alt="Erro 404 - Página não encontrada"
            className="max-w-39.75 max-h-70.25 md:max-w-80 md:max-h-140.75"
          />

          <figcaption className="flex justify-center items-center flex-col gap-4 px-4">
            <h1 className="text-brand text-7xl font-semibold">Ooops!!</h1>
            <p className="text-start text-muted-foreground text-2xl font-normal">
              Não conseguimos encontrar a página que <br />
              você está procurando...
            </p>
            <Link
              to={PATH_PAGE.home}
              className="font-normal text-black no-underline"
            >
              <Button
                className="bg-brand hover:bg-brand py-3.5 px-8 text-white hover:scale-105 transition-all"
                size={"lg"}
              >
                Página Inicial
              </Button>
            </Link>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
