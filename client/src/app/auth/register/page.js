import RegisterForm from "@/components/Forms/RegisterForm";
import React from "react";

function Page() {
  return (
    <main className="relative w-full py-10">
      <div className="flex w-full max-w-xl mx-auto h-full max-h-fit my-auto p-4">
        <div className="flex flex-col w-full gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded">
          <div className="text-xl md:text-2xl lg:text-4xl font-bold">Register</div>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}

export default Page;
