// App.jsx
/* 
Lesson task:
X - Add React Router. (npm install react-router-dom)
X - Create 3 pages: 
X <Home> 
X <Products>
X <Contact>.
X - Create <Header> and <Footer> components.
X - Create a <Nav> component with links to your pages and add it to your <Header> component.
X - Create a <Layout> component with an <Outlet>, and add the <Header> and <Footer> components to this <Layout> component.
 - Create the routing for your pages, making sure to use the <Layout> component.
- Create another page component, <Product>, that is a dynamic segment with an id value. In this component, log the parameter. Add links to test values e.g. product/1 and then test that it’s working.
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Contact from "./components/Contact";
import RouteNotFound from "./components/RouteNotFound";

function ReactRouterApp() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Layout = Header incl. Nav*/}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default ReactRouterApp;
