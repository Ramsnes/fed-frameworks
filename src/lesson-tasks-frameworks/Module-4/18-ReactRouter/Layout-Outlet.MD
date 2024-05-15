## Outlet

<Outlet /> represents the rest of the content that is not header and footer.

### Example:

<Route element={<Layout />}>
<Route index element={<Home />} />
<Route path="products" element={<Products />} />
<Route path="contact" element={<Contact />} />
<Route path="product/:id" element={<Product />} />
<Route path="\*" element={<RouteNotFound />} />
</Route>

<Route <Layout/> is wrapped around all children.
<Outlet>, which is within <Layout/>, represents all the children between header and footer within Layout.
