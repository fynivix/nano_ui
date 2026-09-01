import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ProductDetails from "./pages/components/ProductDetails";

import Home from "./web-ui/Home"
import Features from "./web-ui/Features";
import Contact from "./web-ui/Contact";
import PublicLayout from "../src/web-ui/PublicLayout";

import ProtectedRoute from "./routes/ProtectedRoute";
import TermsConditions from "./web-ui/TermsandCondition";
import PrivacyPolicy from "./web-ui/PrivacyPolicy";
import About from "./web-ui/about";
import ProductsServices from "./web-ui/ProductsServices";
import Cookies from "./web-ui/Cookies";
import IntellectualPropertyPolicy from "./web-ui/IntellectualPropertyPolicy";
import Career from "./web-ui/Career";


export default function App() {
  return (
    <Routes>

      {/* Public Pages with same Header/Footer */}
      <Route element={<PublicLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/career" element={<Career />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/productsServices" element={<ProductsServices />} />
      <Route path="/intellectual" element={<IntellectualPropertyPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />

      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/products/:id"element={<ProductDetails />} /> 

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}