# Notes

> Fill this in as you work. This document is assessed alongside your code.

## Bugs I found

For each: what was wrong, **why** it was wrong, and how I fixed it.

1. [products] was wrong in the useProducts.ts file, becaues this creates infinity loop while fetching, so i have replaced [products] with []

2. "any" types in useProduct.ts file, it is has violated the strict zero any rule, replaced any by importing Product[].

3. small letter search gives No product result, corrected in page.tsx file, as it doesn't have case conversion, i used .toLowerCase().trim() to make all the searches to lowercase.

4. Array indexing breaks the framer mothon tracking {index} in ProductGrid.tsx file, so i replased index with {product.id}

5. Date rendering issue for devices on 12hrs and 24hrs, for 24hrs devices it shows Timestamp mismatch error, so i've used supressHydrationWarning to silence the mismatch.

## Features I completed

1. completed Error state UI in page.tsx file where the error for product fetching failure was higging the grid during loading

2. Added open and closed transitions using Framermotion to give blur effect while clicking and make the slides smooth animation.

## Decisions

Anywhere I had to choose between options — and why I chose what I did.

1. Removed if return null while adding open and close transitions and <AnimatePresence> inside ProductModel, instad of Creating conditions.

## With more time

What I'd improve or add next.
1. Make the product list loading with responsive skeleton with cards effects mathing.
2. Near search add sorting option to filter products based on prices
3. Add impressive UI for the customers to use the page.
-
