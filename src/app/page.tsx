"use client";

import { useMemo, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { Filters } from "@/components/Filters";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductModal } from "@/components/ProductModal";
import { Product } from "@/types/product";

export default function HomePage() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<Product | null>(null);

  const categories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category));
    return ["all", ...Array.from(unique)];
  }, [products]);

  //Changed to improvise search in any case
  let v_product = products;
  if(category !== "all"){
    v_product = v_product.filter((pr) => pr.category === category);
  }
  if(search.trim() !== ""){
    const query = search.toLowerCase().trim();
    v_product = v_product.filter((pr) => pr.title.toLowerCase().includes(query));
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6" suppressContentEditableWarning>
        <h1 className="text-3xl font-bold">Product Explorer</h1>
        <p className="text-sm text-slate-500" suppressHydrationWarning>
          Last updated at {new Date().toLocaleTimeString()}
        </p>
      </header>

      <Filters
        search={search}
        category={category}
        categories={categories}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />

      {loading && <p className="mt-8 text-slate-500">Loading products…</p>}

      {error &&(
        <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6 text-center text-read-800">
            <h3 className="text-base font-semibold">PRODUCT LOADING FAILED</h3>
            <p className="mt-1">Product datas cannot be Fetched</p>
        </div>
      )}
      
      {!loading && !error &&(<ProductGrid products={v_product} onSelect={setSelected} /> )}
      
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
