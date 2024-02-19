/* eslint-disable @typescript-eslint/no-explicit-any */

import { Layout } from "@/components/Layout";
import { NextPage } from "next";
import { useLocaleParser } from "@/libs/localeParser";
import { useRouter } from "next/router";
import { useState } from "react";
import { INPUTS, JOBS } from "@/libs/config/jobs";
import { CarrierForm } from "@/components/Carrier/form";
import classNames from "classnames";
import { onAppSubmit } from "@/libs/utils/carrier";

const CarrierPage: NextPage = () => {
  const parser = useLocaleParser();
  const router = useRouter();

  const currentAnchor = router.asPath.split("#")[1];
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);

  return (
    <Layout title={parser.get("carrier")}>
      <section className="h-full py-8 text-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl text-blue-600 font-semibold">
            {parser.get("carrierTitle")}
          </h1>
          <h3 className="text-3xl font-lg">{parser.get("carrierText")}</h3>
        </div>
        <div className="my-24">
          <h1 className="text-4xl font-semibold uppercase">
            {parser.get("jobsTitle")}
          </h1>
          <div className="h-[0.1px] w-full bg-gray-700 my-5" />
          <div className="flex flex-wrap gap-3 justify-center mt-3">
            {JOBS.map((job, idx) => (
              <button
                className={classNames(
                  "p-8 w-72 h-32 rounded-lg border hover:border-blue-600 duration-300 border-gray-700",
                )}
                onClick={() => router.push("#" + job.job)}
                key={idx}
              >
                <h3 className="text-xl font-semibold text-nowrap">
                  {parser.get(job.job as any)}
                </h3>
                <h5 className="mt-2">{parser.get("work")}</h5>
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-blue-700 py-5 px-8 text-left">
          <h2 className="text-2xl">{parser.get("workTitle")}</h2>
          <p
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: parser.get("workText") }}
          />
          <div className="mt-8 flex justify-center items-center">
            {INPUTS[currentAnchor as keyof typeof INPUTS] && (
              <form
                onSubmit={(e) =>
                  onAppSubmit(e, selectedRadio, selectedCheckbox, currentAnchor)
                }
                className="flex flex-col gap-5 md:w-1/2"
              >
                {INPUTS.default.map((input, idx) => (
                  <CarrierForm input={input} key={idx} />
                ))}
                {INPUTS[currentAnchor as keyof typeof INPUTS].map(
                  (input, idx) => (
                    <CarrierForm
                      input={input}
                      selectedRadio={selectedRadio}
                      setSelectedCheckbox={setSelectedCheckbox}
                      selectedCheckbox={selectedCheckbox}
                      setSelectedRadio={setSelectedRadio}
                      key={idx}
                    />
                  ),
                )}
                <div className="flex flex-row gap-3 w-full">
                  <button type="submit" className="bg-blue-600">
                    {parser.get("send")}
                  </button>
                  {/* <button type="button" className="bg-red-600">{parser.get("clear")}</button> */}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CarrierPage;
