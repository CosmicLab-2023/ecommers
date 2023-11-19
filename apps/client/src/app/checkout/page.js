import CheckoutForm from "@/components/Forms/CheckoutForm";
import Header from "@/components/ui/Header";
import OrderReview from "../../components/Order/OrderReview";

function Page() {
  return (
    <main>
      <section>
        <div className="w-full max-w-7xl mx-auto my-16 px-4">
          <Header title="Checkout" />
          <div className="flex flex-col md:flex-row gap-4 ">
            <CheckoutForm />
            <OrderReview />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
