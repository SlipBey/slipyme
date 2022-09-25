import { NextPage } from "next";
import { Layout } from "@components/Layout";
import { Button } from "@components/Utils/Button";
import { useRouter } from "next/router";

const ErrorPage: NextPage = () => {
  const router = useRouter();

  return (
    <Layout title="404 Sayfa Yok">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl font-extrabold lg:text-9xl text-sky-600">
              404
            </h1>
            <p className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Sayfa Bulunamadı
            </p>
            <p className="mb-4 text-lg font-semibold text-gray-500">
              Aradığınız sayfa silinmiş, taşınmış yada hiç açılmamış olabilir.
            </p>
            <Button type="primary" onClick={() => router.push("/")}>
              Anasayfaya Dön
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ErrorPage;
